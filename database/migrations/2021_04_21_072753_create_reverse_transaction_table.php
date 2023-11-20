<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReverseTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reverse_transaction', function (Blueprint $table) {
            $table->integer('transactionstatusID', true);
            $table->string('DebitAccountBalance');
            $table->string('Amount', 20);
            $table->string('TransCompletedTime', 25);
            $table->string('OriginalTransactionID', 20);
            $table->string('Charge', 20);
            $table->string('CreditPartyPublicName', 50);
            $table->string('DebitPartyPublicName', 50);
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
        Schema::dropIfExists('reverse_transaction');
    }
}
