<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant;

class Student2205781Controller extends Controller
{
    public function addUser(Request $req){
        $data = $req->all();
        Participant::create($data);
        return ("Add successful");
    }
}
