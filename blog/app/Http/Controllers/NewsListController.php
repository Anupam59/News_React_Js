<?php

namespace App\Http\Controllers;

use App\Models\NewsListModel;
use Illuminate\Http\Request;

class NewsListController extends Controller
{
    function NewsListIndex(){
        return view('Home');
    }

    function getNewsListData(){
        $result = json_encode(NewsListModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function NewsListDelete(Request $result){
        $id = $result->input('id');
        $result = NewsListModel::where('id','=',$id)->delete();
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }

    function getNewsListDetails(Request $result){
        $id = $result->input('id');
        $result = json_encode(NewsListModel::where('id','=',$id)->get());
        return $result;
    }

    function NewsListUpdate(Request $request){
        $id = $request->input('id');
        $title = $request->input('title');
        $sort_details = $request->input('sort_details');
        $details = $request->input('details');
        $image = $request->input('image');
        $category = $request->input('category');

        $result = NewsListModel::where('id','=',$id)->update([
            'title'=>$title,
            'sort_details'=>$sort_details,
            'details'=>$details,
            'image'=>$image,
            'category'=>$category,
            'time'=>date("H:i:s"),
            'date'=>date('Y-m-d', time())
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function AddNewsList(Request $request){
        $title = $request->input('title');
        $sort_details = $request->input('sort_details');
        $details = $request->input('details');
        $image = $request->input('image');
        $category = $request->input('category');

        $result = NewsListModel::insert([
            'title'=>$title,
            'sort_details'=>$sort_details,
            'details'=>$details,
            'image'=>$image,
            'category'=>$category,
            'time'=>date("H:i:s"),
            'date'=>date('Y-m-d', time())
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }
}
