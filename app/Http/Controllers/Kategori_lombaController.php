<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori_lomba;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class Kategori_lombaController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index()
    {
        //get all Kategori_lomba
        $kategori_lomba = Kategori_lomba::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $kategori_lomba);
    }

    //fungsi store
    public function store(Request $request){
        //validasi data
        $validator = Validator::make($request->all(), [
            'nama_kategori' => 'required'
        ]);

        //jika validasi gagal
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        //create data
        $kategori_lomba = Kategori_lomba::create([
            'nama_kategori' => $request->nama_kategori
        ]);

        //return response
        return new ResponsResource(true, 'Data Berhasil Ditambahkan!', $kategori_lomba);
    }

    //fungsi show detail
    public function show($id)
    {
        //find post by ID
        $kategori_lomba = Kategori_lomba::find($id);

        //return single post as a resource
        return new ResponsResource(true, 'Detail Data Kategori_lomba!', $kategori_lomba);
    }
}
