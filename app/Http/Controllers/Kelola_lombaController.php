<?php

namespace App\Http\Controllers;

use App\Models\Kelola_lomba;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;

class Kelola_lombaController extends Controller
{
    public function index(){
    //get all Kelola_lomba
    $kelola_lomba = Kelola_lomba::all();

    //return collection of posts as a resource
    return new ResponsResource(true, 'List Data Posts', $kelola_lomba);
    }
}
