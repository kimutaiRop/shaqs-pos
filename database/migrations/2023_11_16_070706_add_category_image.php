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
        //add image column to menu_categories table
        Schema::table('menu_categories', function (Blueprint $table) {
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //drop image column from menu_categories table
        Schema::table('menu_categories', function (Blueprint $table) {
            $table->dropColumn('image');
        });
    }
};
