import { useEffect, Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCategory() {
  //token
  const token = localStorage.getItem("token");

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gambar: null,
  });
  const [error, setError] = useState(null);

  // Fetch data ketika komponen di-mount
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/category/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data); // Log respons API untuk debugging
        if (response.data.success) {
          const categoryData = response.data.data; // Sesuaikan dengan struktur API
          setFormData({
            name: categoryData.name || "", // Update state dengan nama category
            gambar: null, // File gambar diatur ke null
          });
        } else {
          setError("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log error
        setError("Error fetching data: " + error.message);
      }
    };
  
    fetchCategory();
  }, [id]);
  

  // Fungsi untuk menangani perubahan input teks
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani perubahan input file
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      gambar: e.target.files[0],
    }));
  };

  // Fungsi untuk mengirimkan data form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("_method", "PUT");
    formDataToSend.append("name", formData.name);

    if (formData.gambar) {
      formDataToSend.append("gambar", formData.gambar);
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/category/${id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        alert("Category updated successfully");
        navigate("/category");
      } else {
        alert("Failed to update category");
      }
    } catch (error) {
      alert("Error updating category: " + error.message);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">Category</h1>
          <nav className="text-sm font-medium text-gray-500 mt-2" aria-label="breadcrumb">
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

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">EDIT DATA CATEGORY</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama Category
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Category"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={formData.name} // Gunakan nilai dari formData
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">
              Gambar
            </label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              accept="image/*"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan Category
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default EditCategory;
