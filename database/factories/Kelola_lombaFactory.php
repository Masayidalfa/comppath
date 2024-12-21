<?php

namespace Database\Factories;

use App\Models\Competition;
use App\Models\Detail_user;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kelola_competition>
 */
class Kelola_competitionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'competition_id' => Competition::factory(),
        'competition_katekori_competition_id' => Category::factory(),
        'detail_user_id' => Detail_user::factory()
        ];
    }
}
