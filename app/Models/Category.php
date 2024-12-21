<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'gambar'
        ];
    public $timestamps = false;

    //relasi database many to one ke tabel competition
    public function competition(): HasMany
    {
        return $this->hasMany(Competition::class, 'katekori_competition_id');
    }
}
