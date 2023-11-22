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
        //add payer_phone to mobile_payments
        Schema::table('payments', function (Blueprint $table) {
            $table->string('payer_phone')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // drop payer_phone from mobile_payments
        Schema::table('payments', function (Blueprint $table) {
            $table->dropColumn('payer_phone');
        });
    }
};
