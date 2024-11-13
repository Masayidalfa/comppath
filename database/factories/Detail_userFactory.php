<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Detail_user>
 */
class Detail_userFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'alamat' => fake()->address(),
        'no_handphone' => fake()->phoneNumber(),
        'usia' => fake()->numberBetween(20, 50),
        'jenis_kelamin' => fake()->randomElement(['Laki-laki', 'Perempuan']),
        'role' => fake()->randomElement(['admin', 'kontributor', 'peserta']),
        'instansi' =>fake()->company(),
        'user_id' => User::factory(),
        ];
    }
}
