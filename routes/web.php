<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Home Route
Route::get('/', function () {
    return view('index');
});

// Route::get('/', 'HomeController@index');

Route::get('/cc','HomeController@index');


//Accounts Route
Route::get('/accounts','CostController@index')->name('accounts');
Route::post('/accounts/store','CostController@store')->name('accounts.store');
Route::get('/accounts/edit/{id}','CostController@edit')->name('accounts.edit');
Route::post('/accounts/edit/{id}','CostController@update')->name('accounts.update');
Route::get('/accounts/delete/{id}','CostController@destroy')->name('accounts.destroy');


