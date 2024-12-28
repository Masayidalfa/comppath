/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";
import Swal from "sweetalert2";

function DetailUser() {
  //token
  const token = localStorage.getItem('token');

  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailUser, setDetailUser] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/detail_user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success) {
          setDetailUser(response.data.data);
        } else {
          setError("Failed to fetch detail user data");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchDetailUser();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      const table = $(tableRef.current).DataTable();
      return () => {
        table.destroy(false);
      };
    }
  }, [loading, error]);

  const handleEdit = (id) => {
    window.location.href = `/detail-user/edit/${id}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/detail_user/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success) {
          setDetailUser(detailUser.filter((user) => user.id !== id));
          Swal.fire("Deleted!", "Detail User has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete Detail user.", "error");
        }
      } catch (err) {
        Swal.fire("Error!", err.message || "An error occurred.", "error");
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-800">Detail User</h1>
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
            <li className="text-gray-800">Detail User</li>
          </ol>
        </nav>
        <a
          href="/detail-user/create"
          className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Tambah Detail User +
        </a>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table
              ref={tableRef}
              className="min-w-full divide-y divide-gray-200 text-sm text-gray-700"
            >
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    No
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    User ID
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Alamat
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    No Handphone
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Tanggal Lahir
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Jenis Kelamin
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Instansi
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Foto Profil
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tfoot className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    No
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    User ID
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Alamat
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    No Handphone
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Tanggal Lahir
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Jenis Kelamin
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Instansi
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Foto Profil
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </tfoot>
              <tbody className="divide-y divide-gray-200">
                {detailUser.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.user_id}</td>
                    <td className="px-4 py-2">{item.alamat}</td>
                    <td className="px-4 py-2">{item.no_handphone}</td>
                    <td className="px-4 py-2">{item.tanggal_lahir}</td>
                    <td className="px-4 py-2">{item.jenis_kelamin}</td>
                    <td className="px-4 py-2">{item.instansi}</td>
                    <td className="px-4 py-2">
                      <img
                        src={`http://localhost:8000/storage/${item.foto_profil}`}
                        alt="Foto Profil"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="py-1 px-2 mr-2 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="py-1 px-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailUser;
