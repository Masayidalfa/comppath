/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function User() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  // Pengambilan API User dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        if (response.data.success) {
          setUser(response.data.data);
        } else {
          setError("Failed to Fetch Data User");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
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
        <h1 className="text-2xl font-semibold text-gray-800">User</h1>
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
            <li className="text-gray-800">User</li>
          </ol>
        </nav>
        <a href="/user/create" className="mr-auto min-w-min py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Tambah User + </a>
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
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    No
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Role
                  </th>
                </tr>
              </thead>
              <tfoot className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    No
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600">
                    Role
                  </th>
                </tr>
              </tfoot>
              <tbody className="divide-y divide-gray-200">
                {user.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-6 py-2">{index + 1}</td>
                    <td className="px-6 py-2">{item.name}</td>
                    <td className="px-6 py-2">{item.email}</td>
                    <td className="px-6 py-2">{item.role}</td>
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
export default User;
