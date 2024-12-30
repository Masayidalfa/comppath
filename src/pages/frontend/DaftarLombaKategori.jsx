/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DaftarLombaKategori = () => {
  const { id } = useParams(); // Mengambil ID kategori dari URL
  const [competition, setCompetition] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [filteredCompetition, setFilteredCompetition] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/competition"
        );
        console.log("Respons API Competition:", response.data);
        setCompetition(response.data.data); // Ambil semua data competition
      } catch (err) {
        console.error("Error fetching competition:", err);
        setCompetition([]);
        setError("Failed to fetch competitions");
      } finally {
        setLoading(false);
      }
    };

    fetchCompetition();
  }, []);

  useEffect(() => {
    const fetchCategoryName = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/category/${id}`
        );
        setCategoryName(response.data.data.name);
      } catch (error) {
        console.error("Error fetching category name:", error);
        setCategoryName("Unknown Category"); // Fallback jika terjadi error
      }
    };

    fetchCategoryName();
  }, [id]);

  useEffect(() => {
    // Filter competition berdasarkan kategori ID
    if (competition.length > 0) {
      const filtered = competition.filter(
        (competition) => competition.category_id === parseInt(id)
      );
      setFilteredCompetition(filtered);
    }
  }, [competition, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Competitions in Category: {categoryName || "Loading..."}
      </h1>

      {filteredCompetition.length === 0 ? (
        <p className="text-center text-gray-600">
          No competitions available for this category.
        </p>
      ) : (
        <div className="space-y-6">
          {filteredCompetition.map((competition) => (
            <div
              key={competition.id}
              className="flex border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gambar */}
              <div className="w-1/3 h-auto overflow-hidden">
                <img
                  src={`http://127.0.0.1:8000/storage/${competition.image}`}
                  alt={competition.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Konten */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  {/* Status dan Jenjang */}
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-sm font-medium">
                      {competition.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-sm font-medium">
                      {competition.jenjang}
                    </span>
                  </div>

                  {/* Nama Competition */}
                  <h2 className="text-xl font-semibold mb-4">
                    {competition.name}
                  </h2>

                  {/* Deskripsi */}
                  <p className="text-gray-600 text-sm mb-4">
                    {competition.description.length > 100
                      ? `${competition.description.slice(0, 100)}...`
                      : competition.description}
                  </p>

                  {/* Tanggal */}
                  <div className="text-gray-600 text-sm flex items-center space-x-2">
                    <span className="material-icons">calendar_today</span>
                    <p>
                      {new Date(competition.start_date).toLocaleDateString()} -{" "}
                      {new Date(competition.end_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Tombol */}
                <div className="mt-4">
                  <Link
                    as={Link}
                    to={`/detail_lomba/${competition.id}`}
                    className="inline-block px-4 py-2 text-white rounded-lg"
                    style={{ backgroundColor: "#2F3A9F" }}
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DaftarLombaKategori;
