/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DaftarPeserta() {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetchParticipants = async () => {
        const token = localStorage.getItem("token");
  
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/competition/${id}/participants`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          setParticipants(response.data.data);
          setLoading(false);
        } catch (err) {
          setError(err.response?.data?.message || "Failed to fetch participants.");
          setLoading(false);
        }
      };
  
      fetchParticipants();
    }, [id]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Requirements</th>
              <th className="px-4 py-2 border">Payment Proof</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={participant.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{participant.user?.name || "N/A"}</td>
                <td className="px-4 py-2 border">{participant.user?.email || "N/A"}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={`http://127.0.0.1:8000/storage/${participant.requirements_file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Requirements
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={`http://127.0.0.1:8000/storage/${participant.payment_proof}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Payment Proof
                  </a>
                </td>
                <td className="px-4 py-2 border">{participant.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default DaftarPeserta;
