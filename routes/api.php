<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompetitionController;
use App\Http\Controllers\Detail_userController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\CategoryController;

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

// Category Competition
Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'store']);
Route::get('/category/{id}', [CategoryController::class, 'show']);
Route::put('/category/{id}', [CategoryController::class, 'update']);
Route::delete('/category/{id}', [CategoryController::class, 'destroy']);


// Competition
Route::get('/competition', [CompetitionController::class, 'index']);
Route::post('/competition', [CompetitionController::class, 'store']);
Route::get('/competition/{id}', [CompetitionController::class, 'show']);
Route::put('/competition/{id}', [CompetitionController::class, 'update']);
Route::delete('/competition/{id}', [CompetitionController::class, 'destroy']);

// Registration
Route::get('/registration', [RegistrationController::class, 'index']);
Route::post('/registration', [RegistrationController::class, 'store']);
Route::get('/registration/{id}', [RegistrationController::class, 'show']);
Route::put('/registration/{id}', [RegistrationController::class, 'update']);
Route::delete('/registration/{id}', [RegistrationController::class, 'destroy']);

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// === Routes Tambahan untuk Halaman Spesifik ===

// Page Landing
Route::get('/landing/competitions', [CompetitionController::class, 'indexLandingPage']);
Route::get('/landing/categories', [CategoryController::class, 'index']);

// Page Daftar Lomba
Route::get('/competitions/list', [CompetitionController::class, 'indexCompetitions']);

// Page Pendaftaran Lomba
Route::get('/competition/{id}/register', [CompetitionController::class, 'getRegistrationForm']);

// Page Kegiatan Lomba
Route::get('/user/{user_id}/activities', [RegistrationController::class, 'getUserCompetitions']);

// Page Profile
Route::get('/user/{user_id}/profile', [Detail_userController::class, 'getUserProfile']);

// Page Lomba yang Dibuat
Route::middleware('auth:sanctum')->get('/user/{user_id}/created-competitions', [CompetitionController::class, 'getCreatedCompetitions']);

// Page Daftar Peserta
Route::get('/competition/{id}/participants', [RegistrationController::class, 'getCompetitionParticipants']);