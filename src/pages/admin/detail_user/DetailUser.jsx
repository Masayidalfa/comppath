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
        const response = await axios.get("http://localhost:8000/api/detail_user");
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
    <div className="container-fluid px-4">
      <h1 className="mt-4">DetailUser</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">DetailUser</li>
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
                <th>User Id</th>
                <th>Alamat</th>
                <th>No Handphone</th>
                <th>Tanggal Lahir</th>
                <th>Jenis Kelamin</th>
                <th>Instansi</th>
                <th>Foto Profil</th>
                
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>User Id</th>
              <th>Alamat</th>
              <th>No Handphone</th>
              <th>Tanggal Lahir</th>
              <th>Jenis Kelamin</th>
              <th>Instansi</th>
              <th>Foto Profil</th>
              
              </tr>
            </tfoot>
            <tbody>
                {detailUser.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.user_id}</td>
                    <td>{item.alamat}</td>
                    <td>{item.no_handphone}</td>
                    <td>{item.tanggal_lahir}</td>
                    <td>{item.jenis_kelamin}</td>
                    <td>{item.instansi}</td>
                    <td>{item.foto_profil}</td>
                </tr>
                ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default DetailUser;
