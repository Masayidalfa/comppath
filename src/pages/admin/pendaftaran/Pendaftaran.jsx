import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function Pendaftaran() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pendaftaran, setPendaftaran] = useState([]);
  // Pengambilan API Pendaftaran dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchPendaftaran = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/pendaftaran");
        if (response.data.success) {
          setPendaftaran(response.data.data);
        } else {
          setError("Failed to Fetch Data Pendaftaran");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchPendaftaran();
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
      <h1 className="mt-4">Pendaftaran</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Pendaftaran</li>
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
                <th>Lomba Id</th>
                <th>Detail User ID `peserta` </th>
                <th>Status</th>
                <th>Bukti Pembayaran</th>
                <th>Bukti Persyaratan</th>
                <th>Tanggal Pendaftaran</th>
                <th>Jenjang</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>Lomba Id</th>
              <th>Detail User ID `peserta` </th>
              <th>Status</th>
              <th>Bukti Pembayaran</th>
              <th>Bukti Persyaratan</th>
              <th>Tanggal Pendaftaran</th>
              <th>Jenjang</th>
              </tr>
            </tfoot>
            <tbody>
                {pendaftaran.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.lomba_id}</td>
                    <td>{item.detail_user_id}</td>
                    <td>{item.status_pendaftaran}</td>
                    <td>{item.bukti_pembayaran}</td>
                    <td>{item.bukti_persyaratan}</td>
                    <td>{item.tanggal_pendaftaran}</td>
                    <td>{item.jenjang}</td>
                </tr>
                ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Pendaftaran;
