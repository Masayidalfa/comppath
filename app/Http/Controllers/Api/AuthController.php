<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class AuthController extends Controller
{
    // Display the login form
    public function index()
    {
        return view('pages.auth.login'); // Your login view
    }

    // Show the registration form
    public function showRegisterForm()
    {
        return view('pages.auth.register'); // Your registration view
    }

    // Handle the registration logic
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'nullable|in:admin,kontributor,user',
        ]);

        // Tentukan nilai default untuk role jika tidak diisi
        $role = $request->role ?? 'user';

        // Buat pengguna baru
        $user =  User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $role,
        ]);

        // response
        return response()->json([
            'success' => true,
            'message' => 'Register success',
            'user' => $user,
        ], 201);
    }

    // Handle the login logic
    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
    
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
    
        if (Auth::attempt($credentials)) {
            $user = Auth::user(); // Ambil user yang sedang login
            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
                "code" => 200,
                'success' => true,
                "message" => "Login Success",
                "token" => $token,
                "user" => [
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $user->email,
                    "role" => $user->role,
                ]
            ]);
        }
    
        return response()->json([
            "code" => 401,
            "status" => "error",
            "message" => "Login Failed",
        ]);
    }
    

}
