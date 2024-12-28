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
Route::get('/competition', [CompetitionController::class, 'index']);
Route::get('/competition/{id}', [CompetitionController::class, 'show']);
Route::get('/dashboard', [DashboardController::class, 'index']);

// Routes that require authentication

    // Routes for role "user"
    Route::middleware('auth:sanctum', 'peran:user-kontributor-admin')->group(function () {
        Route::get('/user', [UserController::class, 'show']); // Only show user's own data
        Route::get('/detail_user', [Detail_userController::class, 'index']);
        Route::get('/detail_user/{id}', [Detail_userController::class, 'show']);
        Route::get('/registration', [RegistrationController::class, 'index']);
        Route::get('/registration/{id}', [RegistrationController::class, 'show']);
        Route::post('/registration', [RegistrationController::class, 'store']);
    });

    // Routes for role "kontributor"
    Route::middleware('auth:sanctum', 'peran:kontributor-admin')->group(function () {
        Route::post('/competition', [CompetitionController::class, 'store']);
        Route::put('/competition/{id}', [CompetitionController::class, 'update']);
        Route::delete('/competition/{id}', [CompetitionController::class, 'destroy']);
        Route::put('/registration/{id}', [RegistrationController::class, 'update']);
        Route::delete('/registration/{id}', [RegistrationController::class, 'destroy']);
    });

    // Routes for role "admin"
    Route::middleware('auth:sanctum', 'peran:admin')->group(function () {
        Route::apiResource('/user', UserController::class);
        Route::apiResource('/detail_user', Detail_userController::class);
        Route::apiResource('/category', CategoryController::class);
        Route::apiResource('/competition', CompetitionController::class);
        Route::apiResource('/registration', RegistrationController::class);
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
Route::get('/competition/{id}/participants', [RegistrationController::class, 'getCompetitionParticipants']);