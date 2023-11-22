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
Route::middleware('auth:api')->get('/orders', 'App\Http\Controllers\OrderController@index');
Route::middleware('auth:api')->post('/orders', 'App\Http\Controllers\OrderController@store');
Route::middleware('auth:api')->put('/orders/{id}', 'App\Http\Controllers\OrderController@update');
Route::middleware('auth:api')->delete('/orders/{id}', 'App\Http\Controllers\OrderController@destroy');

// api route for payment
Route::middleware('auth:api')->get('/payments', 'App\Http\Controllers\PaymentsController@index');
Route::middleware('auth:api')->post('/payments', 'App\Http\Controllers\PaymentsController@store');
Route::middleware('auth:api')->post('/payments/{id}', 'App\Http\Controllers\PaymentsController@update');
Route::middleware('auth:api')->delete('/payments/{id}', 'App\Http\Controllers\PaymentsController@destroy');

// api route for menu
Route::middleware('auth:api')->get('/menu', 'App\Http\Controllers\MenuController@index');
Route::middleware('auth:api')->post('/menu', 'App\Http\Controllers\MenuController@store');
Route::middleware('auth:api')->put('/menu/{id}', 'App\Http\Controllers\MenuController@update');
Route::middleware('auth:api')->delete('/menu/{id}', 'App\Http\Controllers\MenuController@destroy');

// api route for user76
Route::middleware('auth:api')->get('/users', 'App\Http\Controllers\UserController@index');
Route::middleware('auth:api')->post('/users', 'App\Http\Controllers\UserController@store');
Route::middleware('auth:api')->put('/users/{id}', 'App\Http\Controllers\UserController@update');
Route::middleware('auth:api')->delete('/users/{id}', 'App\Http\Controllers\UserController@destroy');


// menu category
Route::middleware('auth:api')->get('/menu-category', 'App\Http\Controllers\MenuCategoryController@index');
Route::middleware('auth:api')->post('/menu-category', 'App\Http\Controllers\MenuCategoryController@store');
Route::middleware('auth:api')->put('/menu-category/{id}', 'App\Http\Controllers\MenuCategoryController@update');
Route::middleware('auth:api')->delete('/menu-category/{id}', 'App\Http\Controllers\MenuCategoryController@destroy');

#mpesa
Route::middleware('auth:api')->post('v1/stk/push',[MpesaController::class,'customerMpesaSTKPush']);

Route::middleware('auth:api')->post('v1/stk/push_call_back',[MpesaController::class,'customerMpesaSTKPushCallBack']);

Route::middleware('auth:api')->post('v1/validation',[MpesaController::class,'mpesaValidation']);

Route::middleware('auth:api')->post('v1/transaction/confirmation',[MpesaController::class,'mpesaConfirmation']);

Route::middleware('auth:api')->post('v1/simulateMpesa',[MpesaController::class,'simulateMpesa']);

Route::middleware('auth:api')->post('v1/register_url',[MpesaController::class,'registerURL']);

Route::middleware('auth:api')->post('v1/b2c/simulate',[MpesaController::class,'b2cSimulate']);

Route::middleware('auth:api')->post('v1/accountbalance',[MpesaController::class,'accountBalance']);

Route::middleware('auth:api')->post('/v1/transactionStatusCallBack',[MpesaController::class,'transactionStatusCallBack']);

Route::post('/api-login', 'App\Http\Controllers\Auth\LoginController@apiLogin');