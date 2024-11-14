<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class LombaController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index(){
        //get all lomba
    $lomba = Lomba::all();

    //return collection of posts as a resource
    return new ResponsResource(true, 'List Data Posts', $lomba);
    }

    //fungsi store
    
    public function store(Request $request){
        //definisikan validasi
        $validator = Validator::make($request->all(),[
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

        //chek jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create lomba
        $lomba = Lomba::create([
            'detail_lomba' => $request->detail_lomba,
            'gambar_lomba' => $request->gambar_lomba,
            'biaya_pendaftaran' => $request->biaya_pendaftaran,
            'tanggal_mulai' => $request->tanggal_mulai,
            'tanggal_akhir' => $request->tanggal_akhir,
            'nama_lomba' => $request->nama_lomba,
            'jumlah_pesrta' => $request->jumlah_pesrta,
            'batas_peserta' => $request->batas_peserta,
            'persyaratan_lomba' => $request->persyaratan_lomba,
            'katekori_lomba_id' => $request->katekori_lomba_id
        ]);

        //jika berhasil
        return new ResponsResource(true, 'Data Lomba berhasil ditambahkan', $lomba);
}

        //fungsi show detail
        public function show($id)
        {
            //find post by ID
            $lomba = Lomba::find($id);

            //return single post as a resource
            return new ResponsResource(true, 'Detail Data Lomba!', $lomba);
        }

}
