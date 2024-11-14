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
        Schema::table('kelola_lomba', function (Blueprint $table) {
            $table->foreign(['detail_user_id'], 'fk_kelola_lomba_detail_user1')->references(['id'])->on('detail_user')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['lomba_id', 'lomba_katekori_lomba_id'], 'fk_kelola_lomba_lomba1')->references(['id', 'katekori_lomba_id'])->on('lomba')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('kelola_lomba', function (Blueprint $table) {
            $table->dropForeign('fk_kelola_lomba_detail_user1');
            $table->dropForeign('fk_kelola_lomba_lomba1');
        });
    }
};
