<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Kategori_lomba extends Model
{
    use HasFactory;
    protected $table = 'katekori_lomba';
    protected $filliable = 
    ['nama_kategori'];
    public $timestamps = false;

    //relasi database many to one ke tabel lomba
    public function lomba(): HasMany
    {
        return $this->hasMany(Lomba::class, 'katekori_lomba_id');
    }

    public function KelolaLomba(): HasMany
    {
        return $this->hasMany(Kelola_lomba::class, 'lomba_katekori_lomba_id');
    }
}
