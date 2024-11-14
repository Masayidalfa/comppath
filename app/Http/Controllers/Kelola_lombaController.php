<?php

namespace App\Http\Controllers;

use App\Models\Kelola_lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class Kelola_lombaController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index(){
    //get all Kelola_lomba
    $kelola_lomba = Kelola_lomba::all();

    //return collection of posts as a resource
    return new ResponsResource(true, 'List Data Posts', $kelola_lomba);
    }

    //fungsi store
    public function store(Request $request)
    {
        //validasi data
        $validator = Validator::make($request->all(), [
            'lomba_id' => 'required|integer',
            'lomba_katekori_lomba_id' => 'required|integer',
            'detail_user_id' => 'required|integer'
        ]);

        //jika validasi gagal
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        //create data
        $kelola_lomba = Kelola_lomba::create([
            'lomba_id' => $request->lomba_id,
            'lomba_katekori_lomba_id' => $request->lomba_katekori_lomba_id,
            'detail_user_id' => $request->detail_user_id
        ]);

        //return response
        return new ResponsResource(true, 'Data Berhasil Ditambahkan!', $kelola_lomba);
}

        //fungsi show detail
        public function show($id)
        {
            //find post by ID
            $kelola_lomba = Kelola_lomba::find($id);

            //return single post as a resource
            return new ResponsResource(true, 'Detail Data Kelola_lomba!', $kelola_lomba);
        }

}