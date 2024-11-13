<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lomba extends Model
{
    use HasFactory;
    protected $table = 'lomba';
    protected $fillable = [
        'detail_lomba',
        'gambar_lomba',
        'biaya_pendaftaran',
        'tanggal_mulai',
        'tanggal_akhir',
        'nama_lomba',
        'jumlah_pesrta',
        'batas_peserta',
        'persyaratan_lomba',
        'katekori_lomba_id'
    ];
    public $timestamps = false;

    //relasi database inverse dari tabel lomba ke tabel kategori_lomba (many to one)
    public function kategori_lomba(): BelongsTo
    {
        return $this->belongsTo(Kategori_lomba::class);
    }

    //relasi one to many ke tabel pendaftaran
    public function pendaftaran(): HasMany
    {
        return $this->hasMany(Pendaftaran::class, 'lomba_id');
    }

    //relasi one to many ke tabel kelola_lomba
    public function kelola_lomba(): HasMany
    {
        return $this->hasMany(Kelola_lomba::class, 'lomba_id');
    }
}
