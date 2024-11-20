<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LombaController;
use App\Http\Controllers\Detail_userController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\Kelola_lombaController;
use App\Http\Controllers\Kategori_lombaController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//User
Route::apiResource('/user', UserController::class);

//Detail user
Route::apiResource('/detail_user', Detail_userController::class);

//kategori_lomba
Route::get('/kategori', [Kategori_lombaController::class, 'index']);
Route::post('/kategori', [Kategori_lombaController::class, 'store']); 
Route::get('/kategori/{id}', [Kategori_lombaController::class, 'show']); 
Route::put('/kategori/{id}', [Kategori_lombaController::class, 'update']); 
Route::delete('/kategori/{id}', [Kategori_lombaController::class, 'destroy']); 

//kelola_lomba
Route::apiResource('/kelola_lomba', Kelola_lombaController::class);

//lomba
Route::apiResource('/lomba', LombaController::class);

//pendaftaran
Route::apiResource('/pendaftaran', PendaftaranController::class);