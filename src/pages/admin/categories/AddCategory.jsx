import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCategory() {
  const [category, setCategory] = useState({ name: "", gambar: null });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("gambar", category.gambar);

    try {
      const response = await axios.post("http://localhost:8000/api/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        alert("Category Berhasil Ditambahkan");
        navigate("/category"); // Redirect to category page
      } else {
        alert("Category Gagal Ditambahkan");
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi");
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        {/* Header */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">Category</h1>
          <nav
            className="text-sm font-medium text-gray-500 mt-2"
            aria-label="breadcrumb"
          >
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-800">Category</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">
          BUAT CATEGORY
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Nama Category */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Category</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Category"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={category.name}
              onChange={(e) => setCategory({ ...category, name: e.target.value })}
              required
            />
          </div>

          {/* Gambar */}
          <div className="mb-4">
            <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">Gambar</label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              accept="image/*"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              onChange={(e) => setCategory({ ...category, gambar: e.target.files[0] })}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buat Category
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddCategory;
