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
        Schema::create('kelola_lomba', function (Blueprint $table) {
            $table->integer('id', true);
            $table->enum('role', ['kontributor', 'admin']);
            $table->integer('lomba_id');
            $table->integer('lomba_katekori_lomba_id');
            $table->integer('detail_user_id')->index('fk_kelola_lomba_detail_user1_idx');

            $table->index(['lomba_id', 'lomba_katekori_lomba_id'], 'fk_kelola_lomba_lomba1_idx');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kelola_lomba');
    }
};
