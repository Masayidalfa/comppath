/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DaftarLombaJenjang = () => {
  const { jenjang } = useParams(); // Ambil parameter jenjang dari URL
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const decodedJenjang = jenjang.replace("_", "/"); // Kembalikan "_" menjadi "/"

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/competition"
        ); // Ambil semua data lomba
        const filteredCompetitions = response.data.data.filter(
          (competition) => competition.jenjang === decodedJenjang
        ); // Filter berdasarkan jenjang
        setCompetitions(filteredCompetitions);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, [jenjang]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        Daftar Lomba Jenjang: {jenjang}
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : competitions.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={`http://127.0.0.1:8000/storage/${competition.image}`}
                alt={competition.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <h2 className="text-lg font-semibold mt-4">{competition.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {competition.description.length > 100
                  ? `${competition.description.slice(0, 100)}...`
                  : competition.description}
              </p>
              <span className="text-teal-500 font-bold block mt-2">
                Jenjang: {competition.jenjang}
              </span>
              <a
                href={`/detail_lomba/${competition.id}`}
                className="block text-blue-600 mt-4 font-bold hover:underline"
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Tidak ada lomba untuk jenjang ini.</p>
      )}
    </div>
  );
};

export default DaftarLombaJenjang;
