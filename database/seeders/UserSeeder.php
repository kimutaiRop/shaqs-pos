<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //add user 
        $user = [
            [
                'name' => 'Admin',
                'email'=>'admin@shaqshouse.co.ke',
                'password'=> bcrypt('123456'),
            ],

        ];
        foreach ($user as $key => $value) {
            User::create($value);
        }

    }
}
