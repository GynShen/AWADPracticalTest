<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Participant;

class Student2205781Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            Participant::create([
                'name' => Str::random(10),
                'email' => Str::random(10) . '@example.com',
                'password' => $i,
            ]);
        }
    }
}
