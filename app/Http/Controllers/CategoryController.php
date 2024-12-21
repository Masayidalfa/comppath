<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Resources\ResponsResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    // Fungsi index (tampilkan data)
    public function index()
    {
        // Get all categories
        $categories = Category::all();

        // Return collection of categories as a resource
        return new ResponsResource(true, 'List Data Categories', $categories);
    }

    // Fungsi store (untuk menambah data category)
    public function store(Request $request)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048' // Validasi gambar
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Upload gambar jika ada
        $imagePath = null;
        if ($request->hasFile('gambar')) {
            $imagePath = $request->file('gambar')->store('categories_images', 'public');
        }

        // Create data
        $category = Category::create([
            'name' => $request->name,
            'gambar' => $imagePath // Menyimpan path gambar yang di-upload
        ]);

        // Return response
        return new ResponsResource(true, 'Data Berhasil Ditambahkan!', $category);
    }

    // Fungsi show detail (menampilkan detail category)
    public function show($id)
    {
        // Find category by ID
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Return single category as a resource
        return new ResponsResource(true, 'Detail Data Category!', $category);
    }

    // Fungsi update (untuk mengupdate data category)
    public function update(Request $request, $id)
    {
        // Validasi data
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048' // Validasi gambar
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Find category by ID
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Upload gambar jika ada
        $imagePath = $category->gambar;
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama jika ada
            if ($category->gambar) {
                Storage::delete('public/' . $category->gambar);
            }
            // Simpan gambar yang baru
            $imagePath = $request->file('gambar')->store('categories_images', 'public');
        }

        // Update data category
        $category->update([
            'name' => $request->name,
            'gambar' => $imagePath // Menyimpan gambar yang baru
        ]);

        // Return response
        return new ResponsResource(true, 'Data Berhasil Diupdate!', $category);
    }

    // Fungsi destroy (menghapus data category)
    public function destroy($id)
    {
        // Find category by ID
        $category = Category::find($id);

        if (!$category) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        // Hapus gambar jika ada
        if ($category->gambar) {
            Storage::delete('public/' . $category->gambar);
        }

        // Delete data category
        $category->delete();

        // Return response
        return new ResponsResource(true, 'Data Berhasil Dihapus!', null);
    }
}
