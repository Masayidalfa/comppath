<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Detail_user extends Model
{
    use HasFactory;
    protected $table = 'detail_users';
    protected $fillable = [
        'user_id',
        'alamat',
        'no_handphone',
        'tanggal_lahir',
        'jenis_kelamin',
        'instansi',
        'foto_profil'
    ];

    public $timestamps = false;
    
    // relasi database inverse dari tabel detail  ke tabel user
   public function user(): BelongsTo 
   {
       return $this->belongsTo(User::class);
   }

   //relasi one to many ke tabel registration
   public function registration(): HasMany
   {
       return $this->hasMany(Registration::class, 'detail_user_id');
   }

}
