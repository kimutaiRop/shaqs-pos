<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLnmoApiResponseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lnmo_api_response', function (Blueprint $table) {
            $table->integer('lnmoID', true);
            $table->integer('user_id')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->string('Amount', 20);
            $table->string('MpesaReceiptNumber', 20);
            $table->string('CheckoutRequestID', 20);
            $table->string('MerchantRequestID', 20);
            $table->string('TransactionDate', 20);
            $table->string('PhoneNumber', 15);
            $table->dateTime('updateTime')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lnmo_api_response');
    }
}
