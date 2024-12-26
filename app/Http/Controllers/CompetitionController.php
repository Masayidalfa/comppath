<?php

namespace App\Http\Controllers;

use App\Models\Competition;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;  // Import Storage

class CompetitionController extends Controller
{
    public function index()
    {
        $competitions = Competition::all();
        return new ResponsResource(true, 'List Data Competitions', $competitions);
    }

    public function store(Request $request)
    {
        // Validasi data yang diterima
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Gambar bersifat opsional
            'category_id' => 'required|exists:categories,id', // Pastikan kategori ada
            'jenjang' => 'nullable|in:sd,smp,sma/smk,kuliah,umum',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'creator_id' => 'required|exists:users,id', // Pastikan creator_id ada di tabel users
            'status' => 'nullable|in:open,closed',
            'fee' => 'nullable|string',
            'requirement' => 'nullable|file|mimes:pdf|max:10240', // Validasi file PDF (max 10MB)
            'group_link' => 'nullable|string|url', // Link grup sosial media
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Atur default status ke 'open' jika tidak ada dalam request
        $status = $request->status ?? 'open';
        $fee = $request->fee ?? 'Free Register';

        // Menyimpan gambar jika ada
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); // Menyimpan file gambar
        }

        // Menyimpan file persyaratan jika ada
        $requirementPath = null;
        if ($request->hasFile('requirement')) {
            $requirementPath = $request->file('requirement')->store('requirements', 'public'); // Menyimpan file PDF
        }

        // Membuat data kompetisi baru
        $competition = Competition::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $imagePath, // Menyimpan path gambar
            'category_id' => $request->category_id,
            'jenjang' => $request->jenjang,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'creator_id' => $request->creator_id,
            'status' => $status, // Nilai default status adalah 'open'
            'fee' => $fee, //Nilai default fee adalah 'Free Register' 
            'requirement' => $requirementPath, // Menyimpan path file PDF
            'group_link' => $request->group_link,
        ]);

        return new ResponsResource(true, 'Data Competition berhasil ditambahkan', $competition);
    }


    public function show($id)
    {
        $competition = Competition::find($id);

        if (!$competition) {
            return response()->json(['success' => false, 'message' => 'Data Competition tidak ditemukan'], 404);
        }

        return new ResponsResource(true, 'Detail Data Competition!', $competition);
    }

    public function update(Request $request, $id)
    {
        // Validasi data yang diterima
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',  // Gambar bisa kosong
            'category_id' => 'required|exists:categories,id',
            'jenjang' => 'nullable|in:sd,smp,sma/smk,kuliah,umum',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'creator_id' => 'required|exists:users,id',
            'fee' => 'nullable|string',
            'requirement' => 'nullable|file|mimes:pdf|max:10240', // Validasi file PDF (max 10MB)
            'group_link' => 'nullable|string|url',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Temukan data kompetisi berdasarkan ID
        $competition = Competition::findOrFail($id);

        // Update data kompetisi tanpa gambar
        $competition->update([
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'jenjang' => $request->jenjang,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'creator_id' => $request->creator_id,
            'fee' => $request->fee,
            'requirement' => $request->requirement,
            'group_link' => $request->group_link,
        ]);

        // Jika ada gambar baru, simpan gambar tersebut
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images');  // Menyimpan gambar
            $competition->image = $imagePath;  // Update gambar kompetisi
        }

        // Jika ada file PDF baru untuk persyaratan, simpan file tersebut
        if ($request->hasFile('requirement')) {
            // Hapus file lama jika ada
            if ($competition->requirement) {
                Storage::delete('public/' . $competition->requirement);  // Menghapus file lama
            }
            // Simpan file PDF yang baru
            $pdfPath = $request->file('requirement')->store('requirements', 'public');
            $competition->requirement = $pdfPath;  // Update path file PDF
        }

        // Simpan perubahan pada data kompetisi
        $competition->save();

        return new ResponsResource(true, 'Data Competition berhasil diubah', $competition);
    }

    public function destroy($id)
    {
        $competition = Competition::find($id);

        if (!$competition) {
            return response()->json(['success' => false, 'message' => 'Data Competition tidak ditemukan'], 404);
        }

        // Hapus gambar jika ada
        if ($competition->image) {
            Storage::delete('public/' . $competition->image);  // Hapus gambar kompetisi
        }

        $competition->delete();

        return new ResponsResource(true, 'Data Competition berhasil dihapus', null);
    }

    // fungsi untuk data di landing page
    public function indexLandingPage()
    {
        $competitions = Competition::select('id', 'name', 'jenjang', 'fee', 'image', 'status')->get();
        return response()->json($competitions);
    }

    // fungsi untuk data di page daftar lomba
    public function indexCompetitions()
{
    $competitions = Competition::with('category:id,name,gambar') // Relasi ke kategori
        ->select('id', 'name', 'image', 'jenjang', 'fee', 'status', 'category_id') // Pilih kolom yang dibutuhkan
        ->get();

    return response()->json([
        'success' => true,
        'message' => 'Data kompetisi berhasil diambil',
        'data' => $competitions
    ]);
}

    // fungsi untuk daftar lomba kontributor
    public function getCreatedCompetitions(Request $request)
    {
        $user = $request->user();

        if ($user->role !== 'kontributor' && $user->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $competitions = Competition::where('creator_id', $user->id)->get();
        return response()->json($competitions);
    }

    // fungsi untuk page pendaftaran lomba
    public function getRegistrationForm($competitionId)
    {
        $competition = Competition::select('id', 'name', 'image')->where('id', $competitionId)->first();
        if (!$competition) {
            return response()->json(['message' => 'Competition not found'], 404);
        }

        return response()->json($competition);
    }
}
