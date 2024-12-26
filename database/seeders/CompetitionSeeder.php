<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Competition;

class CompetitionSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan kompetisi contoh
        Competition::create([
            'name' => 'Kompetisi Sains Nasional',
            'description' => 'Kompetisi Sains tingkat nasional untuk pelajar.',
            'category_id' => 1, // ID kategori Sains
            'jenjang' => 'smp',
            'start_date' => '2024-01-01',
            'end_date' => '2024-01-15',
            'creator_id' => 1, // ID admin
            'fee' => 'Free Register',
            'status' => 'open',
            'requirement' => null,
            'group_link' => null,
        ]);
    }
}
