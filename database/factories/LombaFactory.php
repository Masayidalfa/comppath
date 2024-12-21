<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Competition>
 */
class CompetitionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'detail_competition' => fake()->text(),
        'gambar_competition' => fake()->imageUrl(),
        'biaya_registration' => fake()->randomFloat(2, 0, 1000),
        'tanggal_mulai' => fake()->date(),
        'tanggal_akhir' => fake()->date(),
        'nama_competition' => fake()->title(),
        'jumlah_pesrta' => fake()->randomDigit(),
        'batas_peserta' => fake()->numberBetween(10, 100),
        'persyaratan_competition' => fake()->text(),
        'katekori_competition_id' => Category::factory()
        ];
    }
}
