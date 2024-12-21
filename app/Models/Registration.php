<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Registration extends Model
{

    use HasFactory;
    protected $table = 'registrations';
    protected $fillable = [
        'user_id',
        'competition_id',
        'registration_date',
        'status',
        'requirements_file',
        'payment_proof'
    ];
    protected $attributes = [
        'status' => 'pending',
    ];
    public $timestamps = false;

    // relasi inverse one to many ke tabel competition
    public function competition(): BelongsTo
    {
        return $this->belongsTo(Competition::class);
    }

    // relasi inverse one to many ke tabel detail_user
    public function detailUser(): BelongsTo
    {
        return $this->belongsTo(Detail_user::class);
    }
}
