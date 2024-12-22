/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";

function Competition() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [competition, setCompetition] = useState([]);
  // Pengambilan API Competition dengan axios dan Asyncronus Async/Await
  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/competition");
        if (response.data.success) {
          setCompetition(response.data.data);
        } else {
          setError("Failed to Fetch Data Competition");
        }
      } catch (err) {
        setError(err.message || "An error Occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCompetition();
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
      <h1 className="mt-4">Competition</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Competition</li>
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
                <th>Nama Competition</th>
                <th>Detail Competition</th>
                <th>Gambar Competition</th>
                <th>Category Competition</th>
                <th>Jenjang Competition</th>
                <th>Tanggal Mulai</th>
                <th>Tanggal Akhir</th>
                <th>Penyelenggara Id</th>
                <th>Biaya Registration</th>
                <th>Persyaratan Competition</th>
                <th>Link Group</th>
                
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>Nama Competition</th>
              <th>Detail Competition</th>
              <th>Gambar Competition</th>
              <th>Category Competition</th>
              <th>Jenjang Competition</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Akhir</th>
              <th>Penyelenggara Id</th>
              <th>Biaya Registration</th>
              <th>Persyaratan Competition</th>
              <th>Link Group</th>
              
              </tr>
            </tfoot>
            <tbody>
                {competition.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.image}</td>
                    <td>{item.category_id}</td>
                    <td>{item.jenjang}</td>
                    <td>{item.start_date}</td>
                    <td>{item.end_date}</td>
                    <td>{item.creator_id}</td>
                    <td>{item.fee}</td>
                    <td>{item.requirement}</td>
                    <td>{item.group_link}</td>
                </tr>
                ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Competition;
