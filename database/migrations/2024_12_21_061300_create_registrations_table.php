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
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id') // Foreign key ke tabel users
            ->constrained('users')
            ->onDelete('cascade');
            $table->foreignId('competition_id') // Foreign key ke tabel competitions
                ->constrained('competitions')
                ->onDelete('cascade');
            $table->date('registration_date'); // Tanggal registration
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending'); // Status registration
            $table->string('requirements_file')->nullable(); // File persyaratan registration (path atau URL)
            $table->string('payment_proof')->nullable(); // Bukti pembayaran (path atau URL)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
