<?php

namespace App\Http\Controllers;

use App\Movies;
use Illuminate\Http\Request;

class MovieController extends Controller
{

    public function index(){
        $movie = Movies::orderBy('id','DESC')->get();
        return $movie;
    }

    public function store(Request $req){
        $movie = new Movies();
        $movie->movieName = $req->movieName;
        $movie->price = $req->moviePrice;
        $movie->releaseDate = $req->releaseDate;

        $movie->save();

        $movieList = Movies::orderBy('id','DESC')->get();
        return $movieList;
    }

    public function destroy($id){
        $movie = Movies::find($id)->delete();
        $movieList = Movies::orderBy('id','DESC')->get();
        return $movieList;
    }

    public function edit($id){
        $movie = Movies::find($id);
        return $movie;
    }

    public function update($id, Request $req){
        $movie = Movies::find($id);

        $movie->movieName = $req->movieName;
        $movie->price = $req->moviePrice;
        $movie->releaseDate = $req->releaseDate;
        $movie->update();

        error_log ('Updated Values : '.$movie['movieName']);

        // return $movie;

        $movieList = Movies::orderBy('id','DESC')->get();
        return $movieList;
    }
}
