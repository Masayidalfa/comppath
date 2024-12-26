<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Registration;

class RegistrationSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan registrasi contoh
        Registration::create([
            'user_id' => 1, // ID admin
            'competition_id' => 1, // ID kompetisi
            'registration_date' => now(),
            'status' => 'accepted',
            'requirements_file' => null,
            'payment_proof' => null,
        ]);
    }
}
