<?php

namespace App\Http\Controllers;

use App\Models\Kelola_lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class Kelola_lombaController extends Controller
{
    // Fungsi index (tampilkan data)
    public function index()
    {
        // Ambil semua data kelola_lomba
        $kelola_lomba = Kelola_lomba::all();

        // Mengembalikan koleksi data sebagai resource
        return new ResponsResource(true, 'List Data Kelola Lomba', $kelola_lomba);
    }

    // Fungsi store (menyimpan data)
    public function store(Request $request)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'lomba_id' => 'required|integer',
            'lomba_katekori_lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer'
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Menyimpan data kelola_lomba
        $kelola_lomba = Kelola_lomba::create([
            'lomba_id' => $request->lomba_id,
            'lomba_katekori_lomba_id' => $request->lomba_katekori_lomba_id,
            'detail_user_id' => $request->detail_user_id
        ]);

        // Mengembalikan response setelah berhasil ditambahkan
        return new ResponsResource(true, 'Data Berhasil Ditambahkan!', $kelola_lomba);
    }

    // Fungsi show (menampilkan detail berdasarkan ID)
    public function show($id)
    {
        // Mencari data kelola_lomba berdasarkan ID
        $kelola_lomba = Kelola_lomba::find($id);

        if (!$kelola_lomba) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Mengembalikan detail data kelola_lomba
        return new ResponsResource(true, 'Detail Data Kelola Lomba!', $kelola_lomba);
    }

    // Fungsi update (mengupdate data kelola_lomba)
    public function update(Request $request, $id)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'lomba_id' => 'required|integer',
            'lomba_katekori_lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer'
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Mencari data kelola_lomba berdasarkan ID
        $kelola_lomba = Kelola_lomba::find($id);

        if (!$kelola_lomba) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Mengupdate data kelola_lomba
        $kelola_lomba->update([
            'lomba_id' => $request->lomba_id,
            'lomba_katekori_lomba_id' => $request->lomba_katekori_lomba_id,
            'detail_user_id' => $request->detail_user_id
        ]);

        // Mengembalikan response setelah data diupdate
        return new ResponsResource(true, 'Data Berhasil Diupdate!', $kelola_lomba);
    }

    // Fungsi destroy (menghapus data kelola_lomba)
    public function destroy($id)
    {
        // Mencari data kelola_lomba berdasarkan ID
        $kelola_lomba = Kelola_lomba::find($id);

        if (!$kelola_lomba) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Menghapus data kelola_lomba
        $kelola_lomba->delete();

        // Mengembalikan response setelah data dihapus
        return new ResponsResource(true, 'Data Berhasil Dihapus!', null);
    }
}
