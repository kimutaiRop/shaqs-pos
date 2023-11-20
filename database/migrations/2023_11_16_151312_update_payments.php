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
        //add  order_id
        // total
        // status
        // transaction_id

        Schema::table('payments', function (Blueprint $table) {
            $table->string('order_id', 255)->nullable();
            $table->string('total', 255)->nullable();
            $table->string('status', 255)->nullable();
            $table->string('transaction_id', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
