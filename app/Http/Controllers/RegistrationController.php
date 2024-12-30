<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function index()
    {
        $registrations = Registration::all();
        return response()->json(['success' => true, 'data' => $registrations]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'competition_id' => 'required|exists:competitions,id',
            'status' => 'required|in:pending,accepted,rejected',
            'requirements_file' => 'required|file|mimes:pdf|max:10240',
            'payment_proof' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        $registrationDate = $request->registration_date ?? now()->toDateString();
        $status = $request->status ?? 'pending';

        $requirementPath = $request->file('requirements_file')->store('requirements', 'public');
        $paymentPath = $request->file('payment_proof')->store('payments', 'public');

        $registration = Registration::create([
            'user_id' => $request->user_id,
            'competition_id' => $request->competition_id,
            'registration_date' => $registrationDate,
            'status' => $status,
            'requirements_file' => $requirementPath,
            'payment_proof' => $paymentPath,
        ]);


        return response()->json(['success' => true, 'data' => $registration]);
    }

    public function show($id)
    {
        $registration = Registration::with('competition')->find($id);
        if (!$registration) {
            return response()->json(['success' => false, 'message' => 'Data not found'], 404);
        }
        return response()->json(['success' => true, 'data' => $registration]);
    }


    public function update(Request $request, $id)
    {
        // Cari registrasi
        $registration = Registration::find($id);
        if (!$registration) {
            return response()->json([
                'success' => false,
                'message' => 'Data Registration tidak ditemukan',
            ], 404);
        }

        // Validasi input
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'competition_id' => 'required|exists:competitions,id',
            'status' => 'required|in:pending,accepted,rejected',
            'requirements_file' => 'nullable|file|mimes:pdf|max:10240', // Opsional
            'payment_proof' => 'nullable|file|mimes:jpeg,png,jpg|max:2048', // Opsional
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'errors' => $validator->errors()], 422);
        }

        // Perbarui file jika ada unggahan baru
        if ($request->hasFile('requirements_file')) {
            $requirementPath = $request->file('requirements_file')->store('requirements', 'public');
            $registration->requirements_file = $requirementPath;
        }

        if ($request->hasFile('payment_proof')) {
            $paymentPath = $request->file('payment_proof')->store('payments', 'public');
            $registration->payment_proof = $paymentPath;
        }

        // Perbarui data lainnya
        $registration->update([
            'user_id' => $request->user_id,
            'competition_id' => $request->competition_id,
            'registration_date' => $request->registration_date ?? $registration->registration_date,
            'status' => $request->status,
        ]);

        return response()->json(['success' => true, 'data' => $registration]);
    }


    public function destroy($id)
    {
        $registration = Registration::find($id);
        if (!$registration) {
            return response()->json(['success' => false, 'message' => 'Data not found'], 404);
        }
        $registration->delete();
        return response()->json(['success' => true, 'message' => 'Registration deleted']);
    }

    public function Peserta($id)
    {
        // Mengambil data registrasi dengan relasi ke tabel user
        $registrations = Registration::with('user')
            ->where('competition_id', $id)
            ->get();

        if ($registrations->isEmpty()) {
            return response()->json(['success' => false, 'message' => 'No participants found'], 404);
        }

        return response()->json(['success' => true, 'data' => $registrations]);
    }
}
