<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kelola_lomba extends Model
{
    use HasFactory;
    protected $table = 'kelola_lomba';
    protected $fillable = [
        'lomba_id',
        'lomba_katekori_lomba_id',
        'detail_user_id',
    ];
    public $timestamps = false;

    // relasi inverse one to many ke tabel lomba
    public function lomba(): BelongsTo
    {
        return $this->belongsTo(Lomba::class);
    }

    // relasi inverse one to many ke tabel detail_user
    public function detailUser(): BelongsTo
    {
        return $this->belongsTo(Detail_user::class);
    }

    public function kategori_lomba(): BelongsTo
    {
        return $this->belongsTo(Kategori_lomba::class);
    }
}
