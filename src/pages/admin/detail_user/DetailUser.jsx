/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function DetailUser() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailUser, setDetailUser] = useState([]);
  // Pengambilan API DetailUser dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/detail_user"
        );
        if (response.data.success) {
          setDetailUser(response.data.data);
        } else {
          setError("Failed to Fetch Data DetailUser");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchDetailUser();
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
        <h1 className="text-2xl font-semibold text-gray-800">Detail User</h1>
        <nav
          className="text-sm font-medium text-gray-500 mt-2"
          aria-label="breadcrumb"
        >
          <ol className="flex space-x-2">
            <li>
              <a href="index.html" className="text-blue-500 hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-gray-800">Detail User</li>
          </ol>
        </nav>
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
