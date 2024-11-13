<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pendaftaran extends Model
{

    use HasFactory;
    protected $table = 'pendaftaran';
    protected $fillable = [
        'bukti_pembayaran',
        'tanggal_pendaftaran',
        'jenjang',
        'status_pendaftaran',
        'bukti_persyaratan',
        'lomba_id',
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
}
