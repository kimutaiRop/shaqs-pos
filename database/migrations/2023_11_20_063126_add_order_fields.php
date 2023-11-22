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
        //add order fields
        Schema::table('orders', function (Blueprint $table) {
            $table->string('method')->nullable();
            $table->decimal('cash_amount', 8, 2)->nullable();
            $table->decimal('menu_amount', 8, 2)->nullable();
            $table->unsignedBigInteger('payment_id')->nullable();
            $table->string('order_id')->nullable();
            $table->foreign('payment_id')->references('id')->on('payments');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // drop order fields
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('method');
            $table->dropColumn('cash_amount');
            $table->dropColumn('menu_amount');
            $table->dropColumn('payment_id');
            $table->dropColumn('order_id');
        });
    }
};
