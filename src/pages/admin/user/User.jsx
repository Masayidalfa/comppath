/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";
import Swal from "sweetalert2";

function User() {

  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);


  // Fetch data from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success) {
          setUser(response.data.data);
        } else {
          setError("Failed to fetch user data");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  //Fungsi untuk delete data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setUser(user.filter((u) => u.id !== id));
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the data.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the data.",
              icon: "error",
            });
            console.error("Deleting Error", error);
          });
      }
    });
  };

  useEffect(() => {
    if (!loading && !error) {
      const table = $(tableRef.current).DataTable();
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
        <a
          href="/user/create"
          className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Tambah User +
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
                    Name
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Role
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
                    Name
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Role
                  </th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </tfoot>
              <tbody className="divide-y divide-gray-200">
                {user.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.email}</td>
                    <td className="px-4 py-2">{item.role}</td>
                    <td className="px-4 py-2">
                      {/* edit */}
                      <a
                        href={"/user/edit/" + item.id + ""}
                        className="py-1 px-2 text-sm font-medium rounded-md text-white bg-amber-300 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </a>
                      {/* delete */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="py-1 px-2 m-1 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

export default User;
