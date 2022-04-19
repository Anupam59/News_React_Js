<?php

use App\Http\Controllers\ApiNewsListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/TopLatestNews', [ApiNewsListController::class,'TopLatestNews']);
Route::get('/LatestNews', [ApiNewsListController::class,'LatestNews']);
Route::get('/NewsListCategoryAll/{category}', [ApiNewsListController::class,'NewsListCategoryAll']);
Route::get('/NewsListCategory/{category}', [ApiNewsListController::class,'NewsListCategory']);
Route::get('/NewsListCategoryLength/{category}/{length}', [ApiNewsListController::class,'NewsListCategoryLength']);


Route::get('/NewsListCategoryId/{category}/{id}', [ApiNewsListController::class,'NewsListCategoryId']);


Route::get('/NewsListCategoryEight/{category}', [ApiNewsListController::class,'NewsListCategoryEight']);
Route::get('/NewsDetails/{newsid}', [ApiNewsListController::class,'NewsDetails']);

Route::get('/NewsDetailsLoad/{newsid}', [ApiNewsListController::class,'NewsDetailsLoad']);

