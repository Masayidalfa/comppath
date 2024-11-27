<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class PendaftaranController extends Controller
{
    public function index()
    {
        $pendaftaran = Pendaftaran::all();
        return new ResponsResource(true, 'List Data Posts', $pendaftaran);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'bukti_pembayaran' => 'required',
            'tanggal_pendaftaran' => 'required|date',
            'jenjang' => 'required',
            'status_pendaftaran' => 'required',
            'bukti_persyaratan' => 'required',
            'lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $pendaftaran = Pendaftaran::create($request->all());
        return new ResponsResource(true, 'Data Pendaftaran berhasil ditambahkan', $pendaftaran);
    }

    public function show($id)
    {
        $pendaftaran = Pendaftaran::find($id);

        if (!$pendaftaran) {
            return response()->json([
                'success' => false,
                'message' => 'Data Pendaftaran tidak ditemukan',
            ], 404);
        }

        return new ResponsResource(true, 'Detail Data Pendaftaran!', $pendaftaran);
    }

    public function update(Request $request, $id)
    {
        $pendaftaran = Pendaftaran::find($id);

        if (!$pendaftaran) {
            return response()->json([
                'success' => false,
                'message' => 'Data Pendaftaran tidak ditemukan',
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'bukti_pembayaran' => 'required',
            'tanggal_pendaftaran' => 'required|date',
            'jenjang' => 'required',
            'status_pendaftaran' => 'required',
            'bukti_persyaratan' => 'required',
            'lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $pendaftaran->update($request->all());
        return new ResponsResource(true, 'Data Pendaftaran berhasil diubah', $pendaftaran);
    }

    public function destroy($id)
    {
        $pendaftaran = Pendaftaran::find($id);

        if (!$pendaftaran) {
            return response()->json([
                'success' => false,
                'message' => 'Data Pendaftaran tidak ditemukan',
            ], 404);
        }

        $pendaftaran->delete();
        return new ResponsResource(true, 'Data Pendaftaran berhasil dihapus', null);
    }
}
