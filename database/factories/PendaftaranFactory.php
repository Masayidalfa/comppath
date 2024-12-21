<?php

namespace Database\Factories;

use App\Models\Competition;
use App\Models\Detail_user;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registration>
 */
class RegistrationFactory extends Factory
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
        'tanggal_registration' => fake()->date(),
        'jenjang' => fake()->randomElement(['SD', 'SMP', 'SMA', 'SMK', 'Kuliah', 'Umum']),
        'status_registration' => fake()->randomElement(['Diterima', 'Ditolak']),
        'bukti_persyaratan' => fake()->imageUrl(200, 150, 'document', true),
        'competition_id' => Competition::factory(),
        'detail_user_id' => Detail_user::factory()
        ];
    }
}
