<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateB2bApiResponseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('b2b_api_response', function (Blueprint $table) {
            $table->integer('b2bTransactionID', true);
            $table->string('TransactionID', 20);
            $table->string('InitiatorAccountCurrentBalance', 20);
            $table->string('DebitAccountCurrentBalance', 20);
            $table->string('Amount', 20);
            $table->string('DebitPartyAffectedAccountBalance', 20);
            $table->string('TransCompletedTime', 20);
            $table->string('DebitPartyCharges', 20);
            $table->string('ReceiverPartyPublicName', 50);
            $table->string('Currency', 20);
            $table->dateTime('UpdatedTime')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('b2b_api_response');
    }
}
