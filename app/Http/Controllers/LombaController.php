<?php

namespace App\Http\Controllers;

use App\Models\Lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;

class LombaController extends Controller
{
    public function index(){
        //get all lomba
    $lomba = Lomba::all();

    //return collection of posts as a resource
    return new ResponsResource(true, 'List Data Posts', $lomba);
    }

}
