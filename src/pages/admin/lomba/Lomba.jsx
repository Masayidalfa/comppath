import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function Lomba() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lomba, setLomba] = useState([]);
  // Pengambilan API Lomba dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchLomba = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/lomba");
        if (response.data.success) {
          setLomba(response.data.data);
        } else {
          setError("Failed to Fetch Data Lomba");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchLomba();
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
      <h1 className="mt-4">Lomba</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Lomba</li>
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
                <th>Nama</th>
                <th>Detail Lomba</th>
                <th>Gambar Lomba</th>
                <th>Kategori Lomba</th>
                <th>Persyaratan Lomba</th>
                <th>Batas Peserta</th>
                <th>Jumlah Peserta</th>
                <th>Tanggal Mulai</th>
                <th>Tanggal Akhir</th>
                <th>Biaya Pendaftaran</th>
                
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Detail Lomba</th>
              <th>Gambar Lomba</th>
              <th>Kategori Lomba</th>
              <th>Persyaratan Lomba</th>
              <th>Batas Peserta</th>
              <th>Jumlah Peserta</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Akhir</th>
              <th>Biaya Pendaftaran</th>
              
              </tr>
            </tfoot>
            <tbody>
                {lomba.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.nama_lomba}</td>
                    <td>{item.detail_lomba}</td>
                    <td>{item.gambar_lomba}</td>
                    <td>{item.katekori_lomba}</td>
                    <td>{item.persyaratan_lomba}</td>
                    <td>{item.batas_peserta}</td>
                    <td>{item.jumlah_peserta}</td>
                    <td>{item.tanggal_mulai}</td>
                    <td>{item.tanggal_akhir}</td>
                    <td>{item.biaya_pendaftaran}</td>
                </tr>
                ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Lomba;
