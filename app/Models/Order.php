<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'method',
        'cash_amount',
        'payment_id'
    ];

    public function menus()
    {
        // use order_menu table to get the menus
        return $this->belongsToMany(Menu::class, 'order_menus', 'order_id', 'menu_id')->withPivot('quantity');
    }

    // function to create order_id per day
    public static function generateOrderID()
    {
        $order = Order::whereDate('created_at', today())->latest()->first();
        if (!$order) {
            return '0001';
        }
        // add +1
        
        $current_order_id = $order->order_id;
        // convert to integer
        $current_order_id = intval($current_order_id);
        $order_id = $current_order_id+ 1;
        // add 0 in front of the number
        return str_pad($order_id, 4, '0', STR_PAD_LEFT);

        
    }
}
