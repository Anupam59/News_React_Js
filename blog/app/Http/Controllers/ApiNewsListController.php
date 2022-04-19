<?php

namespace App\Http\Controllers;

use App\Models\NewsListModel;
use Illuminate\Http\Request;

class ApiNewsListController extends Controller
{

    function TopLatestNews(){
        $NewsList = NewsListModel::orderBy('id','desc')->limit(2)->get();
        return $NewsList;
    }



    function LatestNews(){
        $NewsList = NewsListModel::orderBy('id','desc')->skip(2)->take(8)->get();
        return $NewsList;
    }

    function NewsListCategoryAll(Request $request){
        $category = urldecode($request->category);
        $NewsList = NewsListModel::Where('category',$category)->orderBy('id','desc')->get();
        return $NewsList;
    }


    function NewsListCategory(Request $request){
        $category = urldecode($request->category);
        $NewsList = NewsListModel::Where('category',$category)->orderBy('id','desc')->take(12)->get();
        return $NewsList;
    }

    function NewsListCategoryId(Request $request){
        $category = urldecode($request->category);
        $id=urldecode($request->id);
        $NewsList = NewsListModel::Where('category',$category)->orderBy('id','desc')->skip($id)->take(5)->get();
        return $NewsList;
    }

    function NewsListCategoryLength(Request $request){
        $category = urldecode($request->category);
        $length=urldecode($request->length);
        $NewsList = NewsListModel::Where('category',$category)->orderBy('id','desc')->skip($length)->take(12)->get();
        return $NewsList;
    }


    function NewsListCategoryEight(Request $request){
        $category = urldecode($request->category);
        $NewsList = NewsListModel::Where('category',$category)->orderBy('id','desc')->limit(8)->get();
        return $NewsList;
    }


    function NewsDetails(Request $request){
        $id = urldecode($request->newsid);
        $result = NewsListModel::where(['id'=>$id])->get();
        return $result;
    }

    function NewsDetailsLoad(Request $request){
        $id = urldecode($request->newsid);
        $IdPlus = $id+5;
        $result = NewsListModel::where('id','>=',$id)->where('id','<=',$IdPlus)->get();
        return $result;
    }

}
