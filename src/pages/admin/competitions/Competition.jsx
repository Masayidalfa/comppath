/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";
import Swal from "sweetalert2";

function Competition() {
  //token
  const token = localStorage.getItem("token");

  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [competition, setCompetition] = useState([]);

  // Pengambilan API Competition dengan axios dan Asynchronous Async/Await
  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/competition", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        if (response.data.success) {
          setCompetition(response.data.data);
        } else {
          setError("Failed to Fetch Data Competition");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCompetition();
  }, []);

  // fungsi Delete
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
          .delete(`http://localhost:8000/api/competition/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => {
            if (response.data.success) {
              Swal.fire(
                "Deleted!",
                "Your competition has been deleted.",
                "success"
              );
              setCompetition(competition.filter((r) => r.id !== id));
            } else {
              Swal.fire("Error!", "Failed to delete the competition.", "error");
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "An error occurred while deleting.", "error");
          });
      }
    });
  };

  useEffect(() => {
    if (!loading && !error) {
      // Inisiasi dataTable tanpa 'data' dan 'columns'
      const table = $(tableRef.current).DataTable();
      // Membersihkan dataTables saat komponen unmount
      return () => {
        table.destroy(false);
      };
    }
  }, [loading, error]);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-800">Competition</h1>
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
            <li className="text-gray-800">Competition</li>
          </ol>
        </nav>
        <a
          href="/competition/create"
          className="mr-auto min-w-min py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Tambah Competition +{" "}
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mt-6">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto px-4">
            <table
              ref={tableRef}
              className="min-w-full table-auto border-collapse border border-gray-300"
            >
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "No",
                    "Nama Competition",
                    "Detail Competition",
                    "Gambar Competition",
                    "Category Competition",
                    "Jenjang Competition",
                    "Tanggal Mulai",
                    "Tanggal Akhir",
                    "Penyelenggara Id",
                    "Biaya Registration",
                    "Status",
                    "Persyaratan Competition",
                    "Link Group",
                    "Action",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  {[
                    "No",
                    "Nama Competition",
                    "Detail Competition",
                    "Gambar Competition",
                    "Category Competition",
                    "Jenjang Competition",
                    "Tanggal Mulai",
                    "Tanggal Akhir",
                    "Penyelenggara Id",
                    "Biaya Registration",
                    "Status",
                    "Persyaratan Competition",
                    "Link Group",
                    "Action",
                  ].map((footer, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-700"
                    >
                      {footer}
                    </th>
                  ))}
                </tr>
              </tfoot>
              <tbody>
                {competition.map((item, index) => (
                  <tr key={item.id} className="text-gray-800 text-center">
                    <td className="px-4 py-2 border border-gray-300">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <img
                        src={`http://localhost:8000/storage/${item.image}`}
                        alt="Competition"
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.category_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.jenjang}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.start_date}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.end_date}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.creator_id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.fee}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.status}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <a
                        href={`http://localhost:8000/storage/${item.requirement}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View PDF
                      </a>
                    </td>

                    <td className="px-4 py-2 border border-gray-300">
                      <a
                        href={item.group_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {/* edit */}
                      <a
                        href={"/competition/edit/" + item.id + ""}
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

export default Competition;
