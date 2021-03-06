<?php

namespace App\Http\Controllers;

use App\Cost;
use Illuminate\Http\Request;

class CostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cost = Cost::orderBy('id','DESC')->get();
        return $cost;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cost = new Cost();
        $cost->TransectionDate = $request->transectionDate;
        $cost->Type = $request->type;
        $cost->Description = $request->description;
        $cost->Amount = $request->amount;

        $cost->save();

        $costList = Cost::orderBy('id','DESC')->get();
        return $costList;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cost = Cost::find($id);
        return $cost;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cost = Cost::find($id);

        $cost->TransectionDate = $request->transectionDate;
        $cost->Type = $request->type;
        $cost->Description = $request->description;
        $cost->Amount = $request->amount;

        $cost->update();

        $costList = Cost::orderBy('id','DESC')->get();
        return $costList;
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cost = Cost::find($id);
        $cost->delete();

        $costList = Cost::orderBy('id','DESC')->get();
        return $costList;
    }

    public function transectionList(){
        $cost = Cost::all();
        return $cost;
    }
}
