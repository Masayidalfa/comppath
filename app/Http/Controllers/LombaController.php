<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class LombaController extends Controller
{
    public function index()
    {
        $lomba = Lomba::all();
        return new ResponsResource(true, 'List Data Posts', $lomba);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'detail_lomba' => 'required',
            'gambar_lomba' => 'required',
            'biaya_pendaftaran' => 'required|integer',
            'tanggal_mulai' => 'required|date',
            'tanggal_akhir' => 'required|date',
            'nama_lomba' => 'required',
            'jumlah_pesrta' => 'required|integer',
            'batas_peserta' => 'required|integer',
            'persyaratan_lomba' => 'required',
            'katekori_lomba_id' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $lomba = Lomba::create($request->all());
        return new ResponsResource(true, 'Data Lomba berhasil ditambahkan', $lomba);
    }

    public function show($id)
    {
        $lomba = Lomba::find($id);

        if (!$lomba) {
            return response()->json([
                'success' => false,
                'message' => 'Data Lomba tidak ditemukan',
            ], 404);
        }

        return new ResponsResource(true, 'Detail Data Lomba!', $lomba);
    }

    public function update(Request $request, string $id)
{
    // Validasi data yang diterima
    $validator = Validator::make($request->all(), [
        'detail_lomba' => 'required|string',
        'biaya_pendaftaran' => 'required|numeric',  // Pastikan numeric jika biaya pendaftaran adalah angka
        'tanggal_mulai' => 'required|date',
        'tanggal_akhir' => 'required|date',
        'nama_lomba' => 'required|string',
        'jumlah_pesrta' => 'required|integer',
        'batas_peserta' => 'required|integer',
        'persyaratan_lomba' => 'required|string',
        'katekori_lomba_id' => 'required|integer',
        'gambar_lomba' => 'nullable|file',  // Gambar boleh kosong
    ]);
    

    // Jika validasi gagal
    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    // Temukan data lomba berdasarkan ID
    $lomba = Lomba::findOrFail($id);

    // Update data lomba, kecuali gambar_lomba yang diproses secara terpisah
    $lomba->update([
        'detail_lomba' => $request->detail_lomba,
        'biaya_pendaftaran' => $request->biaya_pendaftaran,
        'tanggal_mulai' => $request->tanggal_mulai,
        'tanggal_akhir' => $request->tanggal_akhir,
        'nama_lomba' => $request->nama_lomba,
        'jumlah_pesrta' => $request->jumlah_pesrta,
        'batas_peserta' => $request->batas_peserta,
        'persyaratan_lomba' => $request->persyaratan_lomba,
        'katekori_lomba_id' => $request->katekori_lomba_id,
    ]);

    // Jika ada gambar baru, simpan gambar tersebut
    if ($request->hasFile('gambar_lomba')) {
        $imagePath = $request->file('gambar_lomba')->store('images');  // Menyimpan file gambar
        $lomba->gambar_lomba = $imagePath;  // Update gambar lomba
        $lomba->save();  // Simpan perubahan
    }

    // Kembalikan response dengan data lomba yang telah diperbarui
    return new ResponsResource(true, 'Data Lomba berhasil diubah', $lomba);
}

    

    public function destroy($id)
    {
        $lomba = Lomba::find($id);

        if (!$lomba) {
            return response()->json([
                'success' => false,
                'message' => 'Data Lomba tidak ditemukan',
            ], 404);
        }

        $lomba->delete();
        return new ResponsResource(true, 'Data Lomba berhasil dihapus', null);
    }
}
