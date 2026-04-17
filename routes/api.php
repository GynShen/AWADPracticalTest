<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Student2205781Controller;

Route::post('/participant', [Student2205781Controller::class, 'addUser']);
