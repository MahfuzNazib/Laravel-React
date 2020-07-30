<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    public function index(){
        // $totalCost = DB::table('costs')->where('Type',' Housing')->get();
        $totalCost = DB::table('costs')
                        ->sum('Amount');
    
        $housingCost = DB::table('costs')
                        ->where('Type', 'Housing')
                        ->sum('Amount');

        $universityCost = DB::table('costs')
                            ->where('Type', 'University')
                            ->sum('Amount');
        
        $fathersCost = DB::table('costs')
                            ->where('Type', 'Father\'s')
                            ->sum('Amount');
        
        $otherCost = DB::table('costs')
                            ->where('Type', 'Others')
                            ->sum('Amount');

        return response()->json(array('totalCost'=>$totalCost, 'housingCost'=>$housingCost,'universityCost'=>$universityCost,'fathersCost'=>$fathersCost,'othersCost'=>$otherCost));
    }
}
