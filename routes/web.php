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
Auth::routes();
Route::get("/", function(){
    return Inertia::render("Home");
});

Auth::routes();
Route::get("/payments", function(){
    return Inertia::render("Payments");
});

Auth::routes();
Route::get("/menu", function(){
    return Inertia::render("Menu");
});

Auth::routes();
Route::get("/orders", function(){
    return Inertia::render("Orders");
});

Auth::routes();
Route::get("/login", function(){
    return Inertia::render("Login");
});

Auth::routes();
Route::get("/customer-menu", function(){
    return Inertia::render("CustomerMenu");
});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
