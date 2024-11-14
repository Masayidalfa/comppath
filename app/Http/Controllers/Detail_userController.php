<?php

namespace App\Http\Controllers;

use App\Models\Detail_user;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class Detail_userController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index(){
        //get all Detail_user
        $detail_user = Detail_user::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $detail_user);
    }

    //fungsi store (menambah data)
    public function store(Request $request){
        //definisikan validasi 
        $validator = Validator::make($request->all(),[
        'alamat' => 'required',
        'no_handphone' => 'required',
        'usia' => 'required',
        'jenis_kelamin' => 'required',
        'role' => 'required',
        'instansi' => 'required',
        'user_id' => 'required'
        ]);

        //chek jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create detail_user
        $detail_user = Detail_user::create([
        'alamat' => $request->alamat,
        'no_handphone' => $request->no_handphone,
        'usia' => $request->usia,
        'jenis_kelamin' => $request->jenis_kelamin,
        'role' => $request->role,
        'instansi' => $request->instansi,
        'user_id' => $request->user_id
        ]);

        //jika berhasil
        return new ResponsResource(true, 'Data Detail_user berhasil ditambahkan', $detail_user);
    }

    // fungsi show detail
    public function show($id)
    {
        //find post by ID
        $detail_user = Detail_user::find($id);

        //return single post as a resource
        return new ResponsResource(true, 'Detail Data Detail_user!', $detail_user);
    }
}
