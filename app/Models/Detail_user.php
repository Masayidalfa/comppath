<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Detail_user extends Model
{
    use HasFactory;
    protected $table = 'detail_user';
    protected $fillable = [
        'alamat',
        'no_handphone',
        'usia',
        'jenis_kelamin',
        'role',
        'instansi',
        'user_id'
    ];

    public $timestamps = false;
    
    // relasi database inverse dari tabel detail  ke tabel user
   public function user(): BelongsTo 
   {
       return $this->belongsTo(User::class);
   }

   //relasi one to many ke tabel pendaftaran
   public function pendaftaran(): HasMany
   {
       return $this->hasMany(Pendaftaran::class, 'detail_user_id');
   }

   //relasi one to many ke tabel kelola_lomba
   public function kelola_lomba(): HasMany
   {
       return $this->hasMany(Kelola_lomba::class, 'detail_user_id');
   }
}
