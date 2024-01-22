<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMenuCategoryRequest;
use App\Http\Requests\UpdateMenuCategoryRequest;
use App\Models\MenuCategory;
use Datetime;

class MenuCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menuCategories = MenuCategory::all();
        return response()->json([
            'status' => 'success',
            'data' => $menuCategories
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(StoreMenuCategoryRequest $request)
    {
        $path = 'uploads/categories';
        $name = $request->input('name');
        $file = $request->file('image');
        $filename='';

        if ($request->hasFile('image'))
        {
            $filename = str_replace(' ', '', $file->getClientOriginalName());
        }
        
        $timestamp = new Datetime();
        $new_timestamp = $timestamp->format('Y-m-d H:i:s');
        $image_main_temp = $new_timestamp.'image'.$filename;
        $image = str_replace(' ', '',$image_main_temp);
        $file->move($path, $image);

        $public_url = $path.'/'.$image;
        $menuCategory = new MenuCategory();
        $menuCategory->name = $name;
        $menuCategory->image = $public_url;
        $menuCategory->save();
        return response()->json([
            'status' => 'success',
            'data' => $menuCategory
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuCategory $menuCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MenuCategory $menuCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuCategoryRequest $request, MenuCategory $menuCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuCategory $menuCategory)
    {
        //
    }
}
