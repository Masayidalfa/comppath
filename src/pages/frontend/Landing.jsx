/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import About from "./About";

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const jenjangOptions = ["sd", "smp", "sma/smk", "kuliah", "umum"];

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/category");
        setCategories(response.data.data.slice(0, 6)); // Ambil 6 kategori teratas
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch competitions
    const fetchCompetitions = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/competition"
        );
        setCompetitions(response.data.data.slice(0, 3)); // Ambil 3 lomba teratas
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    };

    fetchCategories();
    fetchCompetitions();
  }, []);

  return (
    <div>
      {/* content 1 */}
      <About />

      {/* Content Jenjang */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 m-10 border border-gray-200">
        <h2 className="text-blue-600 text-3xl font-bold mb-4">
          Pilih Jenjang Perlombaan
        </h2>
        <p className="text-gray-600 text-center text-lg mb-6">
          Hai Comppathitor, temukan berbagai perlombaan yang menarik sesuai
          jenjangmu
        </p>

        <div className="flex flex-wrap justify-center gap-6 bg-blue-50 p-6 rounded-lg shadow-md">
          {jenjangOptions.map((jenjang) => {
            const formattedJenjang = jenjang.replace("/", "_"); // Format jenjang untuk nama gambar
            return (
              <Link
                to={`/daftar_lomba/${jenjang.replace("/", "_")}`}
                key={jenjang}
                className="flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={`/image/${formattedJenjang}.jpg`}
                  alt={jenjang}
                  className="w-36 h-36 object-cover rounded-full shadow-lg"
                />
                <p className="text-sm text-blue-600 font-medium mt-2 capitalize">
                  {jenjang}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Content Kategori */}
      <div className="bg-blue-300 flex flex-row gap-x-4 m-10">
        {/* Bagian Kiri */}
        <div className="m-12">
          <h2 className="text-blue-600 text-2xl font-bold">
            Kategori Lomba Populer
          </h2>
          <p>Hai Comppathitor, Berikut 6 kategori lomba populer saat ini</p>
          <img
            src="/image/photo7.png"
            alt="Kategori Populer"
            className="md:w-10/12 m-4"
          />
        </div>

        {/* Bagian Kanan */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-right mb-4">
            <a
              href="/daftar-kategori"
              className="text-blue-600 hover:underline font-bold"
            >
              Selengkapnya
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-2 m-16">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/daftar_lomba_kategori/${category.id}`}
                className="bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded"
                style={{ textDecoration: "none" }} // Menghapus underline bawaan
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content Lomba */}
      <div className="container mx-auto px-4 border-b border-gray-500 m-5">
        <h2 className="text-3xl font-bold">Lomba</h2>
        <a href="/daftar_lomba" className="text-sm text-blue-500 float-right">
          Tampilkan Semua
        </a>
      </div>
      <div className="flex flex-col gap-y-6 m-10">
        {competitions.map((competition) => (
          <div
            key={competition.id}
            className="flex flex-row gap-x-4 shadow-md rounded-lg overflow-hidden"
          >
            <div className="m-4">
              <img
                src={`http://127.0.0.1:8000/storage/${competition.image}`}
                alt={competition.name}
                className="object-cover sm:max-w-56 rounded-2xl"
              />
            </div>
            <div className="container mx-auto shadow-md rounded px-4 py-2">
              <div className="flex gap-4 mb-2">
                <a
                  href="#"
                  className="bg-teal-500 text-white px-6 py-1 rounded shadow"
                >
                  {competition.status}
                </a>
                <a
                  href="#"
                  className="bg-teal-500 text-white px-6 py-1 rounded shadow"
                >
                  {competition.jenjang}
                </a>
              </div>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{competition.name}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {competition.description.length > 100
                      ? `${competition.description.slice(0, 100)}...`
                      : competition.description}
                  </p>
                </div>
              </div>
              <a
                href={`/detail_lomba/${competition.id}`}
                className="bg-blue-700 text-white hover:underline px-6 py-1 rounded"
              >
                Lihat Detail
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
