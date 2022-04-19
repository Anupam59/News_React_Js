<?php

use App\Http\Controllers\NewsListController;
use Illuminate\Support\Facades\Route;



//Admin Panel Slider Management
Route::get('/', [NewsListController::class, 'NewsListIndex']);
Route::get('/getNewsListData', [NewsListController::class, 'getNewsListData']);
Route::post('/NewsListDelete', [NewsListController::class, 'NewsListDelete']);
Route::post('/getNewsListDetails', [NewsListController::class, 'getNewsListDetails']);
Route::post('/NewsListUpdate', [NewsListController::class, 'NewsListUpdate']);
Route::post('/AddNewsList', [NewsListController::class, 'AddNewsList']);
