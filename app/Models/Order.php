<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function menus()
    {
        return $this->belongsToMany(Menu::class)->withPivot('quantity');
    }
}
