<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CompetitionController;
use App\Http\Controllers\Detail_userController;
use App\Http\Controllers\RegistrationController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// hak akses pengunjung 
Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'show']);
Route::get('/competition', [CompetitionController::class, 'index']);
Route::get('/competition/{id}', [CompetitionController::class, 'show']);
Route::get('/dashboard', [DashboardController::class, 'index']);

// Routes that require authentication

    // Routes for role "user"
    Route::middleware('auth:sanctum', 'peran:user-kontributor-admin')->group(function () {
        //user
        Route::get('/user/{id}', [UserController::class, 'show']); // Only show user's own data
        //detail_user
        Route::get('/detail_user', [Detail_userController::class, 'index']);
        Route::get('/detail_user/{id}', [Detail_userController::class, 'show']);
        Route::post('/detail_user', [Detail_userController::class, 'store']);
        Route::put('/detail_user/{id}', [Detail_userController::class, 'update']);
        Route::delete('/detail_user/{id}', [Detail_userController::class, 'destroy']);
        //registrasi
        Route::get('/registration', [RegistrationController::class, 'index']);
        Route::get('/registration/{id}', [RegistrationController::class, 'show']);
        Route::post('/registration', [RegistrationController::class, 'store']);
    });

    // Routes for role "kontributor"
    Route::middleware('auth:sanctum', 'peran:kontributor-admin')->group(function () {
        // lomba/competition
        Route::post('/competition', [CompetitionController::class, 'store']);
        Route::put('/competition/{id}', [CompetitionController::class, 'update']);
        Route::delete('/competition/{id}', [CompetitionController::class, 'destroy']);
        
        //registrasi
        Route::put('/registration/{id}', [RegistrationController::class, 'update']);
        Route::delete('/registration/{id}', [RegistrationController::class, 'destroy']);
    });

    // Routes for role "admin"
    Route::middleware('auth:sanctum', 'peran:admin')->group(function () {
        //user
        Route::get('/user', [UserController::class, 'index']);
        Route::post('/user', [UserController::class, 'store']);
        Route::put('/user/{id}', [UserController::class, 'update']);
        Route::delete('/user/{id}', [UserController::class, 'destroy']);

        //catategory
        Route::post('/category', [CategoryController::class, 'store']);
        Route::put('/category/{id}', [CategoryController::class, 'update']);
        Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

        //detail_user
        //udah semua diatas

        //lomba/competition
        //udah semua diatas

        //registrasi
        //udah semua diatas


    });

    
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
Route::get('/competition/{id}/participants', [RegistrationController::class, 'Peserta']);