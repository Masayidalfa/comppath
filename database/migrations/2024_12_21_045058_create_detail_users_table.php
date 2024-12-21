<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Relasi dengan tabel users
            $table->string('alamat')->nullable(); // Alamat pengguna
            $table->string('no_handphone', 15)->nullable(); // Nomor handphone
            $table->date('tanggal_lahir')->nullable(); // Tanggal lahir untuk kalkulasi usia
            $table->enum('jenis_kelamin', ['laki-laki', 'perempuan'])->nullable(); // Jenis kelamin
            $table->string('instansi')->nullable(); // Nama instansi atau organisasi
            $table->string('foto_profil')->nullable(); // URL atau path untuk foto profil
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_users');
    }
};
