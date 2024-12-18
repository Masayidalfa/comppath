<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LombaController;
use App\Http\Controllers\Detail_userController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\Kelola_lombaController;
use App\Http\Controllers\Kategori_lombaController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// User
Route::get('/user', [UserController::class, 'index']);
Route::post('/user', [UserController::class, 'store']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::put('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);

// Detail User
Route::get('/detail_user', [Detail_userController::class, 'index']);
Route::post('/detail_user', [Detail_userController::class, 'store']);
Route::get('/detail_user/{id}', [Detail_userController::class, 'show']);
Route::put('/detail_user/{id}', [Detail_userController::class, 'update']);
Route::delete('/detail_user/{id}', [Detail_userController::class, 'destroy']);

// Kategori Lomba
Route::get('/kategori', [Kategori_lombaController::class, 'index']);
Route::post('/kategori', [Kategori_lombaController::class, 'store']);
Route::get('/kategori/{id}', [Kategori_lombaController::class, 'show']);
Route::put('/kategori/{id}', [Kategori_lombaController::class, 'update']);
Route::delete('/kategori/{id}', [Kategori_lombaController::class, 'destroy']);

// Kelola Lomba
Route::get('/kelola_lomba', [Kelola_lombaController::class, 'index']);
Route::post('/kelola_lomba', [Kelola_lombaController::class, 'store']);
Route::get('/kelola_lomba/{id}', [Kelola_lombaController::class, 'show']);
Route::put('/kelola_lomba/{id}', [Kelola_lombaController::class, 'update']);
Route::delete('/kelola_lomba/{id}', [Kelola_lombaController::class, 'destroy']);

// Lomba
Route::get('/lomba', [LombaController::class, 'index']);
Route::post('/lomba', [LombaController::class, 'store']);
Route::get('/lomba/{id}', [LombaController::class, 'show']);
Route::put('/lomba/{id}', [LombaController::class, 'update']);
Route::delete('/lomba/{id}', [LombaController::class, 'destroy']);

// Pendaftaran
Route::get('/pendaftaran', [PendaftaranController::class, 'index']);
Route::post('/pendaftaran', [PendaftaranController::class, 'store']);
Route::get('/pendaftaran/{id}', [PendaftaranController::class, 'show']);
Route::put('/pendaftaran/{id}', [PendaftaranController::class, 'update']);
Route::delete('/pendaftaran/{id}', [PendaftaranController::class, 'destroy']);

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
