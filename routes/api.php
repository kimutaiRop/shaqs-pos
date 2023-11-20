<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MpesaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// api route for order
Route::get('/orders', 'App\Http\Controllers\OrderController@index');
Route::post('/orders', 'App\Http\Controllers\OrderController@store');
Route::put('/orders/{id}', 'App\Http\Controllers\OrderController@update');
Route::delete('/orders/{id}', 'App\Http\Controllers\OrderController@destroy');

// api route for payment
Route::get('/payments', 'App\Http\Controllers\PaymentController@index');
Route::post('/payments', 'App\Http\Controllers\PaymentController@store');
Route::put('/payments/{id}', 'App\Http\Controllers\PaymentController@update');
Route::delete('/payments/{id}', 'App\Http\Controllers\PaymentController@destroy');

// api route for menu
Route::get('/menu', 'App\Http\Controllers\MenuController@index');
Route::post('/menu', 'App\Http\Controllers\MenuController@store');
Route::put('/menu/{id}', 'App\Http\Controllers\MenuController@update');
Route::delete('/menu/{id}', 'App\Http\Controllers\MenuController@destroy');

// api route for user76
Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::post('/users', 'App\Http\Controllers\UserController@store');
Route::put('/users/{id}', 'App\Http\Controllers\UserController@update');
Route::delete('/users/{id}', 'App\Http\Controllers\UserController@destroy');


// menu category
Route::get('/menu-category', 'App\Http\Controllers\MenuCategoryController@index');
Route::post('/menu-category', 'App\Http\Controllers\MenuCategoryController@store');
Route::put('/menu-category/{id}', 'App\Http\Controllers\MenuCategoryController@update');
Route::delete('/menu-category/{id}', 'App\Http\Controllers\MenuCategoryController@destroy');

#mpesa
Route::post('v1/stk/push',[MpesaController::class,'customerMpesaSTKPush']);

Route::post('v1/stk/push_call_back',[MpesaController::class,'customerMpesaSTKPushCallBack']);

Route::post('v1/validation',[MpesaController::class,'mpesaValidation']);

Route::post('v1/transaction/confirmation',[MpesaController::class,'mpesaConfirmation']);

Route::post('v1/simulateMpesa',[MpesaController::class,'simulateMpesa']);

Route::post('v1/register_url',[MpesaController::class,'registerURL']);

Route::post('v1/b2c/simulate',[MpesaController::class,'b2cSimulate']);

Route::post('v1/accountbalance',[MpesaController::class,'accountBalance']);

Route::post('/v1/transactionStatusCallBack',[MpesaController::class,'transactionStatusCallBack']);