<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Models\Menu;
use Datetime;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get menu together with the category
        // filter by category if category_id is present in the request
        if (request()->has('category_id')) {
            $menus = Menu::where('category_id', request()->category_id)->with('category')->get();
            return response()->json([
                'status' => 'success',
                'data' => $menus
            ], 200);
        }else{
            $menus = Menu::with('category')->get();
            return response()->json([
                'status' => 'success',
                'data' => $menus
            ], 200);
        }
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //create menu

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuRequest $request)
    {
        //add menu
        $path = 'uploads/menus';
        $file = $request->file('image');
        $filename = str_replace(' ', '', $file->getClientOriginalName());
        $timestamp = new Datetime();
        $new_timestamp = $timestamp->format('Y-m-d H:i:s');
        $image_main_temp = $new_timestamp.'image'.$filename;
        $image = str_replace(' ', '',$image_main_temp);
        $file->move($path, $image);

        $public_url = $path.'/'.$image;
        $menu = Menu::create([
            'name' => $request->name,
            'price' => $request->price,
            'category_id' => $request->category_id,
            "description" => $request->description,
            "image" => $public_url
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $menu
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //get menu together with the category
        $menu = Menu::with('category')->find($menu->id);
        return response()->json([
            'status' => 'success',
            'data' => $menu
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, $id)
    {
        $path = 'uploads/menus';
        $file = $request->file('image');
        
        $name = $request->name;
        $price = $request->price;
        $category_id = $request->category_id;
        $description = $request->description;
        $public_url = Menu::find($id)->image;

        // if file is present
        if(isset($file)){
            $filename = str_replace(' ', '', $file->getClientOriginalName());
            $timestamp = new Datetime();
            $new_timestamp = $timestamp->format('Y-m-d H:i:s');
            $image_main_temp = $new_timestamp.'image'.$filename;
            $image = str_replace(' ', '',$image_main_temp);
            $file->move($path, $image);
    
            $public_url = $path.'/'.$image;
        }
        $data = [
            'name' => $name,
            'price' => $price,
            'category_id' => $category_id,
            "description" => $description,
            "image" => $public_url
        ];

        Menu::where('id', $id)->update($data);
        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu, $id)
    {
        $menu = Menu::find($id);

        $menu->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Menu deleted successfully'
        ], 200);
    }
}
