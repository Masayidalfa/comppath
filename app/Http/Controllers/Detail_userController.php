<?php

namespace App\Http\Controllers;

use App\Models\Detail_user;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class Detail_userController extends Controller
{
    public function index()
    {
        // Mengambil semua data detail_user
        $detail_user = Detail_user::all();
        return new ResponsResource(true, 'List Data Detail User', $detail_user);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'alamat' => 'nullable|string',
            'no_handphone' => 'nullable|string|max:15',
            'tanggal_lahir' => 'nullable|date',
            'jenis_kelamin' => 'nullable|in:laki-laki,perempuan',
            'instansi' => 'nullable|string',
            'foto_profil' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->all();

        // Simpan file gambar ke storage jika ada
        if ($request->hasFile('foto_profil')) {
            $filePath = $request->file('foto_profil')->store('foto_profil', 'public');
            $data['foto_profil'] = $filePath;
        }

        $detail_user = Detail_user::create($data);

        return new ResponsResource(true, 'Data Detail_user berhasil ditambahkan', $detail_user);
    }


    public function show($id)
    {
        // Cari data detail_user berdasarkan ID
        $detail_user = Detail_user::find($id);

        // Jika data tidak ditemukan
        if (!$detail_user) {
            return response()->json([
                'success' => false,
                'message' => 'Data Detail_user tidak ditemukan',
            ], 404);
        }

        return new ResponsResource(true, 'Detail Data Detail_user!', $detail_user);
    }

    public function update(Request $request, $id)
    {
        $detail_user = Detail_user::find($id);

        if (!$detail_user) {
            return response()->json([
                'success' => false,
                'message' => 'Data Detail_user tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'alamat' => 'nullable|string',
            'no_handphone' => 'nullable|string|max:15',
            'tanggal_lahir' => 'nullable|date',
            'jenis_kelamin' => 'nullable|in:laki-laki,perempuan',
            'instansi' => 'nullable|string',
            'foto_profil' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->all();

        // Jika ada file gambar baru, hapus yang lama dan simpan yang baru
        if ($request->hasFile('foto_profil')) {
            if ($detail_user->foto_profil && Storage::disk('public')->exists($detail_user->foto_profil)) {
                Storage::disk('public')->delete($detail_user->foto_profil);
            }

            $filePath = $request->file('foto_profil')->store('foto_profil', 'public');
            $data['foto_profil'] = $filePath;
        }

        $detail_user->update($data);

        return new ResponsResource(true, 'Data berhasil diubah', $detail_user);
    }

    public function destroy($id)
    {
        // Cari data detail_user berdasarkan ID
        $detail_user = Detail_user::find($id);

        // Jika data tidak ditemukan
        if (!$detail_user) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }

        // Hapus data detail_user
        $detail_user->delete();

        return new ResponsResource(true, 'Data berhasil dihapus', null);
    }

    // fungsi untuk page profile 
    public function getUserProfile($userId)
    {
        $detailUser = Detail_User::where('user_id', $userId)->with('user:id,name,email')->first();

        if (!$detailUser) {
            return response()->json(['message' => 'User profile not found'], 404);
        }

        return response()->json($detailUser);
    }
}
