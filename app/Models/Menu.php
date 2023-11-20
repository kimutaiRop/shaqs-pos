<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        "image",
        "price",
        "category_id",
        "description"
    ];


    public function orders()
    {
        return $this->belongsToMany(Order::class)->withPivot('quantity');
    }

    public function category()
    {
        return $this->belongsTo(MenuCategory::class);
    }
}