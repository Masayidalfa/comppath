<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Detail_user;
use App\Models\Category;
use App\Models\Competition;
use App\Models\Registration;
use App\Http\Resources\ResponsResource;


class DashboardController extends Controller
{
    //
    public function index(){
        $users = User::count();
        $detail_users = Detail_user::count();
        $categories = Category::count();
        $competitions = Competition::count();
        $registrations = Registration::count();
        return new ResponsResource(true, 'Dashboard', [
            'users' => $users,
            'detail_users' => $detail_users,
            'categories' => $categories,
            'competitions' => $competitions,
            'registrations' => $registrations
        ] );}
}
