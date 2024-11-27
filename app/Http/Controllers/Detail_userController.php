<?php

namespace App\Http\Controllers;

use App\Models\Detail_user;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class Detail_userController extends Controller
{
    public function index()
    {
        $detail_user = Detail_user::all();
        return new ResponsResource(true, 'List Data Posts', $detail_user);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'alamat' => 'required',
            'no_handphone' => 'required',
            'usia' => 'required',
            'jenis_kelamin' => 'required',
            'role' => 'required',
            'instansi' => 'required',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $detail_user = Detail_user::create($request->all());
        return new ResponsResource(true, 'Data Detail_user berhasil ditambahkan', $detail_user);
    }

    public function show($id)
    {
        $detail_user = Detail_user::find($id);

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
            'alamat' => 'required',
            'no_handphone' => 'required',
            'usia' => 'required',
            'jenis_kelamin' => 'required',
            'role' => 'required',
            'instansi' => 'required',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $detail_user->update($request->all());
        return new ResponsResource(true, 'Data berhasil diubah', $detail_user);
    }

    public function destroy($id)
    {
        $detail_user = Detail_user::find($id);

        if (!$detail_user) {
            return response()->json([
                'success' => false,
                'message' => 'Data tidak ditemukan',
            ], 404);
        }

        $detail_user->delete();
        return new ResponsResource(true, 'Data berhasil dihapus', null);
    }
}
