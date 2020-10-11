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

// Home
Route::get('/', 'HomeController@get_home_web');

Route::get('/posts/{slug}', 'PostController@get_post_web');

//
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
