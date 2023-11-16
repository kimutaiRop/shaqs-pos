<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('index');
// });

// Route::get('/menu', function () {
//     return view('menu');
// });

// Route::get('/orders', function () {
//     return view('orders');
// });

// Route::get('/payments', function () {
//     return view('payments');
// });


// Route::inertia('/example', 'Example');

Route::get("/", function(){
    return Inertia::render("Home");
});

Route::get("/payments", function(){
    return Inertia::render("Payments");
});
Route::get("/menu", function(){
    return Inertia::render("Menu");
});
Route::get("/orders", function(){
    return Inertia::render("Orders");
});
Route::get("/login", function(){
    return Inertia::render("Login");
});