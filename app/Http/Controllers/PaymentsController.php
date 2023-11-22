<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePaymentsRequest;
use App\Http\Requests\UpdatePaymentsRequest;
use App\Models\Payments;

class PaymentsController extends Controller
{
    public function index()
{
    // Get filter parameters from the request
    $date = request()->date;
    $method = request()->method;
    $status = request()->status;

    // Start with a base query to get all payments
    $paymentsQuery = Payments::query();

    // Filter by date if date is present in the request
    if (!empty($date)) {
        $paymentsQuery->whereDate('created_at', $date);
    }

    // Add more filters based on other parameters if they are present
    if (isset($method)) {
        $paymentsQuery->where('method', $method);
    }

    if (isset($status)) {
        $paymentsQuery->where('status', $status);
    }

    // Execute the final query
    $payments = $paymentsQuery->get();

    return response()->json([
        'status' => 'success',
        'data' => $payments
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
    public function store(StorePaymentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Payments $payments)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payments $payments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        try {

            $status = array('status' => 1);
            $payment = Payments::where('id', $id)->update($status);

            return response()->json([
                'status' => 'success',
                'message' => 'Payment updated successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error updating payment: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payments $payments)
    {
        //
    }
}
