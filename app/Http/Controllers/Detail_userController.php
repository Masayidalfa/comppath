<?php

namespace App\Http\Controllers;

use App\Models\Detail_user;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;

class Detail_userController extends Controller
{
    public function index(){
        //get all Detail_user
        $detail_user = Detail_user::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $detail_user);
    }
}
