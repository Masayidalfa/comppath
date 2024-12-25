import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";

function Pendaftaran() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pendaftaran, setPendaftaran] = useState([]);

  // Pengambilan data pendaftaran dengan axios
  useEffect(() => {
    const fetchPendaftaran = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/registration");
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
      const table = $(tableRef.current).DataTable();
      return () => {
        table.destroy(false);
      };
    }
  }, [loading, error]);

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Pendaftaran</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
        <li className="breadcrumb-item active">Pendaftaran</li>
      </ol>

      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1" />
          DataTable Example
        </div>
        <div className="card-body">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table ref={tableRef} className="display">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Lomba</th>
                  <th>Informasi User</th>
                  <th>Status Pendaftaran</th>
                  <th>Bukti Pembayaran</th>
                  <th>Bukti Persyaratan</th>
                  <th>Tanggal Pendaftaran</th>
                  <th>Jenjang</th>
                </tr>
              </thead>
              <tbody>
                {pendaftaran.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.nama_lomba}</td>
                    <td>
                      {item.alamat} <br />
                      {item.no_handphone} <br />
                      {item.usia} Tahun, {item.jenis_kelamin}
                    </td>
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
    </div>
  );
}

export default Pendaftaran;
