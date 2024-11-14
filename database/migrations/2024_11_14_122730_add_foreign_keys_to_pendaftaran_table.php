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
        Schema::table('pendaftaran', function (Blueprint $table) {
            $table->foreign(['detail_user_id'], 'fk_pendaftaran_detail_user1')->references(['id'])->on('detail_user')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['lomba_id'], 'fk_pendaftaran_lomba1')->references(['id'])->on('lomba')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pendaftaran', function (Blueprint $table) {
            $table->dropForeign('fk_pendaftaran_detail_user1');
            $table->dropForeign('fk_pendaftaran_lomba1');
        });
    }
};
