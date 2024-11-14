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
        Schema::create('pendaftaran', function (Blueprint $table) {
            $table->integer('id', true);
            $table->binary('bukti_pembayaran')->nullable();
            $table->date('tanggal_pendaftaran');
            $table->enum('jenjang', ['SD', 'SMP', 'SMA', 'SMK', 'Kuliah', 'Umum']);
            $table->enum('status_pendaftaran', ['Diterima', 'Ditolak']);
            $table->string('bukti_persyaratan', 45)->nullable();
            $table->integer('lomba_id')->index('fk_pendaftaran_lomba1_idx');
            $table->integer('detail_user_id')->index('fk_pendaftaran_detail_user1_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftaran');
    }
};
