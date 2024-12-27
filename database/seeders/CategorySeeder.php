<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        // Menambahkan kategori contoh
        Category::create(['name' => 'Sains', 'gambar' => null]);
        Category::create(['name' => 'Matematika', 'gambar' => null]);
        Category::create(['name' => 'Teknologi', 'gambar' => null]);
    }
}
