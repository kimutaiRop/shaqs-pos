<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSTKRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s_t_k_requests', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->string('Amount', 20);
            $table->string('CheckoutRequestID', 255);
            $table->string('MerchantRequestID', 255);
            $table->string('PhoneNumber', 15);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('s_t_k_requests');
    }
}
