<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use App\Models\Menu;
use App\Models\OrderMenu;
use App\Models\Payments;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get order together with the menus
        $date = request()->date;

        // filter by date if date is present in the request
        if (request()->has('date')) {
            $orders = Order::whereDate('created_at', $date)->with('menus')->get();
            return response()->json([
                'status' => 'success',
                'data' => $orders
            ], 200);
        }else{
            $orders = Order::with('menus')->get();
        }
        return response()->json([
            'status' => 'success',
            'data' => $orders
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        //create order
        $menus = $request->menus;
        $method = $request->method;
        $cash_amount = $request->cashAmount;
        $payment_id = $request->paymentId;
        $menu_amount = 0;
        $order_id = Order::generateOrderID();
        foreach ($menus as $menu_item) {
            // get menu with id
            $menu = Menu::where('id', $menu_item['id'])->first();
            $menu_amount += $menu->price * $menu_item['quantity'];
        }
        if ($method == 'CASH') {
            if (!$cash_amount){
            return response()->json([
                'status' => 'error',
                'message' => 'Please provide cash amount'
            ], 400);}
            if ($cash_amount < $menu_amount) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Cash amount should be greater than menu amount'
                ], 400);
            }
            
            // create order
            $order = new Order();
            $order->method = $method;
            $order->cash_amount = $cash_amount;
            $order->menu_amount = $menu_amount;
            $order->order_id = $order_id;
            $order->save();

            // create payment
            $payment = new Payments();
            $payment->order_id = $order->id;
            $payment->total = $cash_amount;
            $payment->status = 1;
            $payment->method = $method;
            $payment->save();
            
            // update payment id
            $order->update([
                'payment_id' => $payment->id,
            ]);

            // create order menu
            foreach ($menus as $menu_item) {
                $order_menu = new OrderMenu();
                $order_menu->order_id = $order->id;
                $order_menu->menu_id = $menu_item['id'];
                $order_menu->quantity = $menu_item['quantity'];
                $order_menu->save();

            }

        }

        if ($method == 'MPESA' ) {
            if (!$payment_id){
            return response()->json([
                'status' => 'error',
                'message' => 'Please provide payment id'
            ], 400);
        }
            $payment = Payments::where('id', $payment_id)->first();
            if (!$payment) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Payment id does not exist'
                ], 400);
            }

            if ($payment->amount >= $menu_amount) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Payment amount should be greater than menu amount'
                ], 400);
            }
            // create order
            $order = new Order();
            $order->method = $method;
            $order->cash_amount = $payment->amount;
            $order->menu_amount = $menu_amount;
            $order->order_id = $order_id;
            $order -> payment_id = $payment_id;
            $order->save();

            // update payment
            $payment->update([
                'status' => 1,
                'order_id' => $order->id,
            ]);

            // create order menu
            foreach ($menus as $menu_item) {
                $order_menu = new OrderMenu();
                $order_menu->order_id = $order->id;
                $order_menu->menu_id = $menu_item['id'];
                $order_menu->quantity = $menu_item['quantity'];
                $order_menu->save();
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Order created successfully'
        ], 201);



    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
