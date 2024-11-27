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

    public function update(Request $request, $id)
    {
        $lomba = Lomba::find($id);

        if (!$lomba) {
            return response()->json([
                'success' => false,
                'message' => 'Data Lomba tidak ditemukan',
            ], 404);
        }

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

        $lomba->update($request->all());
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
