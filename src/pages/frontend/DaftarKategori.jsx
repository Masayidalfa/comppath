/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DaftarKategori = () => {
  const token = localStorage.getItem("token");
  const [category, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/category", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Respons API:", response.data);
        setCategories(response.data.data); // Memastikan data diambil dari response.data.data
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.map((category) => (
          <div
            key={category.id}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={`http://127.0.0.1:8000/storage/${category.gambar}`}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
              <Link
                to={`/daftar_lomba_kategori/${category.id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Filter Lomba
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarKategori;
