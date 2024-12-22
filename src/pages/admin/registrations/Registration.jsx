/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function Registration() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registration, setRegistration] = useState([]);

  // Fetching API Registration
  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/registration");
        if (response.data.success) {
          setRegistration(response.data.data);
        } else {
          setError("Failed to Fetch Data Registration");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchRegistration();
  }, []);

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
      <h1 className="text-2xl font-bold mt-6">Registration</h1>
      <ol className="breadcrumb flex gap-2 text-sm text-gray-600 mt-2">
        <li>
          <a href="index.html" className="text-blue-500 hover:underline">Dashboard</a>
        </li>
        <li className="text-gray-500">/ Registration</li>
      </ol>

      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">An error occurred: {error}</p>
        ) : (
          <table
            ref={tableRef}
            className="min-w-full border-collapse border border-gray-200 table-auto text-left text-sm"
          >
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">No</th>
                <th className="border border-gray-200 px-4 py-2">Id Penyelenggara</th>
                <th className="border border-gray-200 px-4 py-2">Id Lomba</th>
                <th className="border border-gray-200 px-4 py-2">Tanggal Pendaftaran</th>
                <th className="border border-gray-200 px-4 py-2">Status Lomba</th>
                <th className="border border-gray-200 px-4 py-2">Bukti Persyaratan</th>
                <th className="border border-gray-200 px-4 py-2">Bukti Pembayaran</th>
              </tr>
            </thead>
            <tfoot>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">No</th>
                <th className="border border-gray-200 px-4 py-2">Id Penyelenggara</th>
                <th className="border border-gray-200 px-4 py-2">Id Lomba</th>
                <th className="border border-gray-200 px-4 py-2">Tanggal Pendaftaran</th>
                <th className="border border-gray-200 px-4 py-2">Status Lomba</th>
                <th className="border border-gray-200 px-4 py-2">Bukti Persyaratan</th>
                <th className="border border-gray-200 px-4 py-2">Bukti Pembayaran</th>
              </tr>
            </tfoot>
            <tbody>
              {registration.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 even:bg-gray-50 odd:bg-white"
                >
                  <td className="border border-gray-200 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.user_id}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.competition_id}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.registration_date}</td>
                  <td className="border border-gray-200 px-4 py-2">{item.status}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <a
                      href={`http://localhost:8000/storage/requirements/${item.required_file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View File
                    </a>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <a
                      href={`http://localhost:8000/storage/payments_proofs/${item.payment_proof}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Proof
                    </a>
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

export default Registration;
