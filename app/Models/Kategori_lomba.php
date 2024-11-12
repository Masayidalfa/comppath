<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kategori_lomba extends Model
{
    //
    protected $table = 'kategori_lomba';
    protected $filliable = 
    ['nama_kategori'];
    public $timestamps = false;
}
