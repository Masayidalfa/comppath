<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //fungsi indexx (tampilkan data)
    public function index()
    {
        //get all user
        $users = User::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $users);
    }

    //fungsi store (menambah data)
    public function store(Request $request)
    {
        //mendefinisikan peraturan validasi
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        // chek jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        // create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        //jika berhasil
        return new ResponsResource(true, 'Data user berhasil ditambahkan', $user);

}

        //fungsi show detail
        public function show($id)
        {
            //find post by ID
            $user = User::find($id);

            //return single post as a resource
            return new ResponsResource(true, 'Detail Data User!', $user);
        }

}
