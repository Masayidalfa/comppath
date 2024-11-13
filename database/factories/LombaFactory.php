<?php

namespace Database\Factories;

use App\Models\Kategori_lomba;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lomba>
 */
class LombaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'detail_lomba' => fake()->text(),
        'gambar_lomba' => fake()->imageUrl(),
        'biaya_pendaftaran' => fake()->randomFloat(2, 0, 1000),
        'tanggal_mulai' => fake()->date(),
        'tanggal_akhir' => fake()->date(),
        'nama_lomba' => fake()->title(),
        'jumlah_pesrta' => fake()->randomDigit(),
        'batas_peserta' => fake()->numberBetween(10, 100),
        'persyaratan_lomba' => fake()->text(),
        'katekori_lomba_id' => Kategori_lomba::factory()
        ];
    }
}
