<?php

namespace Database\Factories;

use App\Models\Lomba;
use App\Models\Detail_user;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pendaftaran>
 */
class PendaftaranFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'bukti_pembayaran' => fake()->imageUrl(200, 150, 'payment', true),
        'tanggal_pendaftaran' => fake()->date(),
        'jenjang' => fake()->randomElement(['SD', 'SMP', 'SMA', 'SMK', 'Kuliah', 'Umum']),
        'status_pendaftaran' => fake()->randomElement(['Diterima', 'Ditolak']),
        'bukti_persyaratan' => fake()->imageUrl(200, 150, 'document', true),
        'lomba_id' => Lomba::factory(),
        'detail_user_id' => Detail_user::factory()
        ];
    }
}
