<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Menambahkan pengguna Admin
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'role' => 'admin',
            'password' => bcrypt('password123'),
        ]);

        // Menambahkan pengguna Kontributor
        User::create([
            'name' => 'Contributor User',
            'email' => 'contributor@example.com',
            'role' => 'kontributor',
            'password' => bcrypt('password123'),
        ]);

        // Menambahkan pengguna biasa
        User::create([
            'name' => 'Regular User',
            'email' => 'user@example.com',
            'role' => 'user',
            'password' => bcrypt('password123'),
        ]);
    }
}
