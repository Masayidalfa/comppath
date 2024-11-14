<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class PendaftaranController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index(){
        //get all Pendaftaran
        $pendaftaran = Pendaftaran::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $pendaftaran);
    }

    //fungsi store
    public function store(Request $request){
        //definisikan validasi
        $validator = Validator::make($request->all(),[
            'bukti_pembayaran' => 'required',
            'tanggal_pendaftaran' => 'required|date',
            'jenjang' => 'required',
            'status_pendaftaran' => 'required',
            'bukti_persyaratan' => 'required',
            'lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer'
        ]);

        //chek jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create pendaftaran
        $pendaftaran = Pendaftaran::create([
            'bukti_pembayaran' => $request->bukti_pembayaran,
            'tanggal_pendaftaran' => $request->tanggal_pendaftaran,
            'jenjang' => $request->jenjang,
            'status_pendaftaran' => $request->status_pendaftaran,
            'bukti_persyaratan' => $request->bukti_persyaratan,
            'lomba_id' => $request->lomba_id,
            'detail_user_id' => $request->detail_user_id,
        ]);

        //jika berhasil
        return new ResponsResource(true, 'Data Pendaftaran berhasil ditambahkan', $pendaftaran);
}

        //fungsi show detail
        public function show($id){
            //find post by ID
            $pendaftaran = Pendaftaran::find($id);

            //return single post as a resource
            return new ResponsResource(true, 'Detail Data Pendaftaran!', $pendaftaran);
        }
}
