<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $input = [
            "name" => $validatedData['name'],
            "email" => $validatedData['email'],
            "password" => Hash::make($validatedData['password']),
            "role" => 'Peserta', // Default role
        ];

        $user = User::create($input);

        return response()->json([
            "status" => "success",
            "message" => "Register success"
        ]);
    }

    public function login(Request $request){
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken("token")->plainTextToken;

            return response()->json([
                "code" => 200,
                "status" => "success",
                "message" => "Login success",
                "token" => $token
            ]);
        }

        return response()->json([
            "code" => 401,
            "status" => "error",
            "message" => "Login Failed"
        ]);
    }
}
