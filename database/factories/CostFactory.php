<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Cost;
use Faker\Generator as Faker;

$factory->define(Cost::class, function (Faker $faker) {
    return [
        'TransectionDate' => $faker->date,
        'Type' => $faker->name,
        'Description' => $faker->company,
        'Amount' => $faker->name
    ];
});
