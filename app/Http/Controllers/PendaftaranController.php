<?php

namespace App\Http\Controllers;

use App\Models\Pendaftaran;
use Illuminate\Http\Request;
use App\Http\Resources\ResponsResource;

class PendaftaranController extends Controller
{
    public function index(){
        //get all Pendaftaran
        $pendaftaran = Pendaftaran::all();

        //return collection of posts as a resource
        return new ResponsResource(true, 'List Data Posts', $pendaftaran);
    }
}
