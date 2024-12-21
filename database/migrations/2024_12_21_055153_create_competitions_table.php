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
        Schema::create('competitions', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama kompetisi/competition 
            $table->text('description'); // Deskripsi singkat tentang kompetisi/competition
            $table->string('image')->nullable(); // URL atau path untuk gambar kompetisi/competition
            $table->foreignId('category_id') // Foreign key ke tabel categories
            ->constrained('categories')
            ->onDelete('cascade');  
            $table->enum('jenjang', ['sd', 'smp', 'sma/smk', 'kuliah', 'umum'])->nullable(); // Jenjang kompetisi/competition
            $table->date('start_date'); // Tanggal mulai competition
            $table->date('end_date'); // Tanggal berakhir competition
            $table->foreignId('creator_id') // Foreign key ke tabel users
            ->constrained('users')
            ->onDelete('cascade'); 
            $table->string('fee')->default('Free Register'); // Biaya competition (default "Free Register")
            $table->enum('status', ['open', 'closed'])->default('open'); // Status pendaftaran
            $table->string('requirement')->nullable(); // Template dokumen persyaratan (path ke file PDF)
            $table->string('group_link')->nullable(); // Link grup sosial media untuk peserta
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competitions');
    }
};
