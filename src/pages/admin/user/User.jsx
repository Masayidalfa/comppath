import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axios from "axios";
import Swal from 'sweetalert2'

function User() {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8000/api/user/${id}`)
        .then((response) => {
          if(response.data.success){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          } else{
            Swal.fire({
              title: "Error!",
              text: "Your file has been deleted.",
              icon: "Failed"
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Error!",
            text: "An Error Occured While Deleting The Data",
            icon: "Error"
          });
          console.error("Deleting Error", error)
        })
      }
    });
  }

  useEffect(() => {
    if (!loading && !error) {
      // Initialize DataTable
      const table = $(tableRef.current).DataTable();
      return () => {
        table.destroy(false);
      };
    }
  }, [loading, error]);

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">User</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">User</li>
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
                <th>User</th>
                <th>User</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>No</th>
              <th>User</th>
              <th>User</th>
              </tr>
            </tfoot>
            <tbody>
                {user.map((item, index) => (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
                ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default User;
