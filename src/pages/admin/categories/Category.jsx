/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function Category() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);
  
  // Pengambilan API Category dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/category");
        if (response.data.success) {
          setCategory(response.data.data);
        } else {
          setError("Failed to Fetch Data Category");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      // inisiasi dataTable tanpa 'data' dan 'columns'
      const table = $(tableRef.current).DataTable();
      // membersihkan dataTables saat komponen unmount
      return () => {
        table.destroy(false);
      };
    }
  }, [loading, error]);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-800">Category</h1>
        <nav
          className="text-sm font-medium text-gray-500 mt-2 mb-4"
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
        <a href="/category/create" className="mr-auto min-w-min py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Tambah Kategori + </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-6">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table
            ref={tableRef}
            className="min-w-full table-auto border-collapse border border-gray-300"
          >
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">No</th>
                <th className="px-4 py-2 border border-gray-300">Category</th>
                <th className="px-4 py-2 border border-gray-300">Gambar</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="px-4 py-2 border border-gray-300">No</th>
                <th className="px-4 py-2 border border-gray-300">Category</th>
                <th className="px-4 py-2 border border-gray-300">Gambar</th>
              </tr>
            </tfoot>
            <tbody>
              {category.map((item, index) => (
                <tr key={item.id} className="text-gray-800">
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={`http://localhost:8000/storage/${item.gambar}`}
                      alt="Category"
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Category;
