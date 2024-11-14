<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;

class UserController extends Controller
{
    public function index()
    {
        //get all user
        $users = User::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $users);
    }
}
