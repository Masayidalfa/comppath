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
  // Pengambilan API Registration dengan axios dan Asyncronus Async/Await
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
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchRegistration();
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
    <div className="container-fluid px-4">
      <h1 className="mt-4">Registration</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Registration</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          <a target="_blank" href="https://datatables.net/">
            official DataTables documentation
          </a>
          .
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1" />
          DataTable Example
        </div>
      </div>

      <div className="card-body">
        {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>error anjay</p>
        ) : (
          <table ref={tableRef}>
            <thead>
              <tr>
                <th>No</th>
                <th>Id Penyelenggara</th>
                <th>Id Lomba</th>
                <th>Tanggal Pendaftaran</th>
                <th>Status Lomba</th>
                <th>Bukti Persyaratan</th>
                <th>Bukti Pembayaran</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>Id Penyelenggara</th>
              <th>Id Lomba</th>
              <th>Tanggal Pendaftaran</th>
              <th>Status Lomba</th>
              <th>Bukti Persyaratan</th>
              <th>Bukti Pembayaran</th>
              </tr>
            </tfoot>
            <tbody>
                {registration.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.user_id}</td>
                    <td>{item.competition_id}</td>
                    <td>{item.registration_date}</td>
                    <td>{item.status}</td>
                    <td>{item.required_file}</td>
                    <td>{item.payment_proof}</td>
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
