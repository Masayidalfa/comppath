<?php

namespace App\Http\Controllers;

use App\Models\Competition;
use App\Models\Registration;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function index()
    {
        $registrations = Registration::all();
        return new ResponsResource(true, 'List Data Registrations', $registrations);
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id', // Pastikan user_id ada di tabel users
            'competition_id' => 'required|exists:competitions,id', // Pastikan competition_id ada di tabel competitions
            'registration_date' => 'required|date', // Tanggal registrasi
            'status' => 'nullable|in:pending,accepted,rejected', // Status registrasi
            'requirements_file' => 'nullable|file|mimes:pdf|max:10240', // File persyaratan (PDF)
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg,pdf|max:10240', // Bukti pembayaran (gambar atau PDF)
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Atur default status jika tidak ada dalam request
        $status = $request->status ?? 'pending';

        // Menyimpan bukti pembayaran jika ada
        $paymentProofPath = null;
        if ($request->hasFile('payment_proof')) {
            $paymentProofPath = $request->file('payment_proof')->store('payment_proofs', 'public'); // Menyimpan file bukti pembayaran
        }

        // Menyimpan file persyaratan jika ada
        $requirementsFilePath = null;
        if ($request->hasFile('requirements_file')) {
            $requirementsFilePath = $request->file('requirements_file')->store('requirements', 'public'); // Menyimpan file persyaratan
        }

        // Membuat data registrasi baru
        $registration = Registration::create([
            'user_id' => $request->user_id,
            'competition_id' => $request->competition_id,
            'registration_date' => $request->registration_date,
            'status' => $status, // Gunakan status dengan nilai default jika kosong
            'requirements_file' => $requirementsFilePath,
            'payment_proof' => $paymentProofPath,
        ]);

        return new ResponsResource(true, 'Data Registration berhasil ditambahkan', $registration);
    }

    public function show($id)
    {
        $registration = Registration::find($id);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Data Registration tidak ditemukan',
            ], 404);
        }

        return new ResponsResource(true, 'Detail Data Registration!', $registration);
    }

    public function update(Request $request, $id)
    {
        $registration = Registration::find($id);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Data Registration tidak ditemukan',
            ], 404);
        }

        // Validasi data yang diterima
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'competition_id' => 'required|exists:competitions,id',
            'registration_date' => 'required|date',
            'status' => 'nullable',
            'requirements_file' => 'nullable|file|mimes:pdf|max:10240',
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg,pdf|max:10240',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Update data registrasi
        $registration->update([
            'user_id' => $request->user_id,
            'competition_id' => $request->competition_id,
            'registration_date' => $request->registration_date,
            'status' => $request->status,
        ]);

        // Jika ada bukti pembayaran baru, simpan file tersebut
        if ($request->hasFile('payment_proof')) {
            // Hapus file bukti pembayaran lama jika ada
            if ($registration->payment_proof) {
                Storage::delete('public/' . $registration->payment_proof);
            }
            // Simpan file bukti pembayaran yang baru
            $paymentProofPath = $request->file('payment_proof')->store('payment_proofs', 'public');
            $registration->payment_proof = $paymentProofPath;
        }

        // Jika ada file persyaratan baru, simpan file tersebut
        if ($request->hasFile('requirements_file')) {
            // Hapus file persyaratan lama jika ada
            if ($registration->requirements_file) {
                Storage::delete('public/' . $registration->requirements_file);
            }
            // Simpan file persyaratan yang baru
            $requirementsFilePath = $request->file('requirements_file')->store('requirements', 'public');
            $registration->requirements_file = $requirementsFilePath;
        }

        // Simpan perubahan pada data registrasi
        $registration->save();

        return new ResponsResource(true, 'Data Registration berhasil diubah', $registration);
    }

    public function destroy($id)
    {
        $registration = Registration::find($id);

        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Data Registration tidak ditemukan',
            ], 404);
        }

        // Hapus file bukti pembayaran jika ada
        if ($registration->payment_proof) {
            Storage::delete('public/' . $registration->payment_proof);
        }

        // Hapus file persyaratan jika ada
        if ($registration->requirements_file) {
            Storage::delete('public/' . $registration->requirements_file);
        }

        // Hapus data registrasi
        $registration->delete();

        return new ResponsResource(true, 'Data Registration berhasil dihapus', null);
    }

    

    //fungsi untuk page kegiatan lomba (user/kontributor)
    public function getUserCompetitions($userId)
    {
        $registrations = Registration::where('user_id', $userId)
            ->join('competitions', 'registrations.competition_id', '=', 'competitions.id')
            ->select('competitions.name', 'competitions.image', 'registrations.status')
            ->get();

        return response()->json($registrations);
    }

    // fungsi untuk page daftar peserta 
    public function getCompetitionParticipants($competitionId)
    {
        $participants = Registration::where('competition_id', $competitionId)
            ->join('users', 'registrations.user_id', '=', 'users.id')
            ->join('detail_users', 'registrations.user_id', '=', 'detail_users.user_id')
            ->select(
                'users.name',
                'users.email',
                'detail_users.tanggal_lahir',
                'detail_users.alamat',
                'detail_users.no_handphone',
                'registrations.requirements_file',
                'registrations.payment_proof',
                'registrations.status'
            )
            ->get();

        return response()->json($participants);
    }
}
