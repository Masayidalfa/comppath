<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori_lomba;
use App\Http\Resources\ResponsResource;

class Kategori_lombaController extends Controller
{
    //
    public function index()
    {
        //get all Kategori_lomba
        $kategori_lomba = Kategori_lomba::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $kategori_lomba);
    }
}
