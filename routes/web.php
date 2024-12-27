<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompetitionController;
use App\Http\Controllers\Detail_userController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Kelola_competitionController;
use App\Http\Controllers\CategoryController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

//default route
Route::get('/', function () {
    return view('welcome');
});


//User
Route::apiResource('/user', UserController::class);

//Detail user
Route::apiResource('/detail_user', Detail_userController::class);

//category
Route::apiResource('/category', CategoryController::class);

//competition
Route::apiResource('/competition', CompetitionController::class);

//registration
Route::apiResource('/registration', RegistrationController::class);

Route::get('user/{id}/edit', [UserController::class, 'edit']);
Route::put('user/{id}', [UserController::class, 'update']);
Route::delete('user/{id}', [UserController::class, 'destroy']);



Route::get('/login', [AuthController::class, 'index'])->name('login'); // Login form
Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register'); // Register form
Route::post('/register', [AuthController::class, 'register']); // Register form submission
Route::post('/login', [AuthController::class, 'login']); // Login form submission

