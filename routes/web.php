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

Route::get('/', function () {
    return view('index');
});

Route::get('/accounts','CostController@index')->name('accounts');
Route::post('/accounts/store','CostController@store');

// Movies Route
Route::get('/movieList','MovieController@index');
Route::post('/movieList/store','MovieController@store');

//Delete a specific Movie 
Route::get('/movieList/delete/{id}','MovieController@destroy');
//Edit Movie
Route::get('/movieList/edit/{id}','MovieController@edit');
Route::post('/movieList/edit/{id}','MovieController@update');
