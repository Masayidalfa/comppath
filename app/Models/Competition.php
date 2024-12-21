<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Competition extends Model
{
    use HasFactory;
    protected $table = 'competitions';
    protected $fillable = [
        'name',
        'description',
        'image',
        'category_id',
        'jenjang',
        'start_date',
        'end_date',
        'creator_id',
        'status',
        'fee',
        'requirement',
        'group_link',
    ];
    public $timestamps = false;

    //relasi database inverse dari tabel competition ke tabel category (many to one)
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    //relasi one to many ke tabel registration
    public function registration(): HasMany
    {
        return $this->hasMany(Registration::class, 'competition_id');
    }

}
