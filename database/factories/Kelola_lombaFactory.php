<?php

namespace Database\Factories;

use App\Models\Lomba;
use App\Models\Detail_user;
use App\Models\Kategori_lomba;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kelola_lomba>
 */
class Kelola_lombaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'lomba_id' => Lomba::factory(),
        'lomba_katekori_lomba_id' => Kategori_lomba::factory(),
        'detail_user_id' => Detail_user::factory()
        ];
    }
}
