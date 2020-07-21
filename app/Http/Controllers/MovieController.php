<?php

namespace App\Http\Controllers;

use App\Movies;
use Illuminate\Http\Request;

class MovieController extends Controller
{

    public function index(){
        $movie = Movies::all();
        return $movie;
    }

    public function store(Request $req){
        $movie = new Movies();
        $movie->movieName = $req->movieName;
        $movie->price = $req->moviePrice;
        $movie->releaseDate = $req->releaseDate;

        $movie->save();

        $movieList = Movies::all();
        return $movieList;
    }
}
