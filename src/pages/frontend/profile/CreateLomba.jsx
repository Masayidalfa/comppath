/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateLomba = () => {
    //token
    const token = localStorage.getItem("token");

    const [competition, setCompetition] = useState({
      name: "",
      description: "",
      image: null,
      category_id: "",
      jenjang: "",
      start_date: "",
      end_date: "",
      creator_id: "",
      fee: "",
      requirement: null,
      group_link: "",
    });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
  
      useEffect(() => {
        // Ambil user_id dari localStorage
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        if (storedUserData) {
          setCompetition((prevData) => ({
            ...prevData,
            creator_id: storedUserData.id,
          }));
        } else {
          console.error("User data tidak ditemukan di localStorage");
        }
      }, []);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/category", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.success) {
            setCategories(response.data.data);
          } else {
            alert("Gagal mengambil data kategori");
          }
        } catch (error) {
          console.error("Error fetching categories:", error);
          alert("Terjadi kesalahan saat mengambil data kategori");
        }
      };
      fetchCategories();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("name", competition.name);
      formData.append("description", competition.description);
      formData.append("image", competition.image);
      formData.append("category_id", competition.category_id);
      formData.append("jenjang", competition.jenjang);
      formData.append("start_date", competition.start_date);
      formData.append("end_date", competition.end_date);
      formData.append("creator_id", competition.creator_id);
      formData.append("fee", competition.fee);
      formData.append("requirement", competition.requirement);
      formData.append("group_link", competition.group_link);
  
      try {
        console.log("Form Data:", Object.fromEntries(formData.entries())); // Debugging
  
        console.log("Data yang dikirim:", [...formData.entries()]);
        const response = await axios.post(
          "http://localhost:8000/api/competition",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.data.success) {
          alert("Competition Berhasil Ditambahkan");
          navigate("/daftar-lomba-kontributor"); // Redirect ke halaman daftar lomba
        } else {
          alert(`Competition Gagal Ditambahkan: ${response.data.message}`);
        }
      } catch (error) {
        alert("Terjadi kesalahan. Silakan coba lagi");
        console.error("Error:", error);
      }
    };
  
    return (
      <Fragment>
        <div className="mt-10 bg-white p-10 shadow-md rounded-md">
          {/* Header */}
          <div className="mt-4">
            <h1 className="text-2xl font-semibold text-gray-800">Lomba</h1>
            <nav
              className="text-sm font-medium text-gray-500 mt-2"
              aria-label="breadcrumb"
            >
              <ol className="flex space-x-2">
                <li>
                  <a href="/profile" className="text-blue-500 hover:underline">
                    Profile
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-800">Lomba</li>
              </ol>
            </nav>
          </div>
  
          <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">
            BUAT LOMBA
          </h1>
  
          <form onSubmit={handleSubmit}>
            {/* Nama Competition */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lomba
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan Nama Lomba"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.name}
                onChange={(e) =>
                  setCompetition({ ...competition, name: e.target.value })
                }
                required
              />
            </div>
  
            {/* Deskripsi */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Masukkan Deskripsi"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.description}
                onChange={(e) =>
                  setCompetition({ ...competition, description: e.target.value })
                }
                required
              />
            </div>
  
            {/* Image */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                onChange={(e) =>
                  setCompetition({ ...competition, image: e.target.files[0] })
                }
                required
              />
            </div>
  
            {/* Category Id */}
            <div className="mb-4">
              <label
                htmlFor="category_id"
                className="block text-sm font-medium text-gray-700"
              >
                Kategori
              </label>
              <select
                id="category_id"
                name="category_id"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.category_id}
                onChange={(e) =>
                  setCompetition({ ...competition, category_id: e.target.value })
                }
                required
              >
                <option value="">-- Pilih Kategori --</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
  
            {/* Jenjang */}
            <div className="mb-4">
              <label
                htmlFor="jenjang"
                className="block text-sm font-medium text-gray-700"
              >
                Jenjang
              </label>
              <select
                id="jenjang"
                name="jenjang"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.jenjang}
                onChange={(e) =>
                  setCompetition({ ...competition, jenjang: e.target.value })
                }
                required
              >
                <option value="">-- Pilih Jenjang --</option>
                <option value="sd">SD</option>
                <option value="smp">SMP</option>
                <option value="sma/smk">SMA/SMK</option>
                <option value="kuliah">Perguruan Tinggi</option>
                <option value="umum">Umum</option>
              </select>
            </div>
  
            {/* Tanggal Mulai/Start Date */}
            <div className="mb-4">
              <label
                htmlFor="start_date"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal Mulai
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.start_date}
                onChange={(e) =>
                  setCompetition({ ...competition, start_date: e.target.value })
                }
                required
              />
            </div>
  
            {/* Tanggal Selesai/End Date */}
            <div className="mb-4">
              <label
                htmlFor="end_date"
                className="block text-sm font-medium text-gray-700"
              >
                Tanggal Selesai
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.end_date}
                onChange={(e) =>
                  setCompetition({ ...competition, end_date: e.target.value })
                }
                required
              />
            </div>

            {/* Biaya Pendaftaran */}
            <div className="mb-4">
              <label
                htmlFor="fee"
                className="block text-sm font-medium text-gray-700"
              >
                Biaya Pendaftaran
              </label>
              <input
                type="text"
                id="fee"
                name="fee"
                placeholder="Masukkan biaya pendaftaran dalam rupiah"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.fee}
                onChange={(e) =>
                  setCompetition({ ...competition, fee: e.target.value })
                }
                required
              />
            </div>
  
            {/* Upload File Persyaratan */}
            <div className="mb-4">
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-gray-700"
              >
                Upload File Persyaratan (PDF)
              </label>
              <input
                type="file"
                id="requirement"
                name="requirement"
                accept=".pdf"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                onChange={(e) =>
                  setCompetition({
                    ...competition,
                    requirement: e.target.files[0],
                  })
                }
                required
              />
            </div>
  
            {/* Group Link */}
            <div className="mb-4">
              <label
                htmlFor="group_link"
                className="block text-sm font-medium text-gray-700"
              >
                Group Link (WhatsApp/Telegram)
              </label>
              <input
                type="text"
                id="group_link"
                name="group_link"
                placeholder="Masukkan link group WhatsApp/Telegram"
                className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
                value={competition.group_link}
                onChange={(e) =>
                  setCompetition({ ...competition, group_link: e.target.value })
                }
                required
              />
            </div>
  
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Buat Competition
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
};
export default CreateLomba;
