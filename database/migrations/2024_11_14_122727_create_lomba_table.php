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
        Schema::create('lomba', function (Blueprint $table) {
            $table->integer('id', true);
            $table->longText('detail_lomba');
            $table->binary('gambar_lomba');
            $table->decimal('biaya_pendaftaran', 10)->nullable();
            $table->date('tanggal_mulai');
            $table->date('tanggal_akhir');
            $table->string('nama_lomba', 100);
            $table->integer('jumlah_pesrta');
            $table->integer('batas_peserta');
            $table->text('persyaratan_lomba')->nullable();
            $table->integer('katekori_lomba_id')->index('fk_lomba_katekori_lomba1_idx');

            $table->primary(['id', 'katekori_lomba_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lomba');
    }
};
