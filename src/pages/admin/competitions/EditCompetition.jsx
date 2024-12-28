import { useEffect, Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCompetition() {
  //token
  const token = localStorage.getItem("token");

  const { id } = useParams();
  const navigate = useNavigate();
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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/competition/${id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        if (response.data.success) {
          const competitionData = response.data.data;
          setCompetition({
            name: competitionData.name || "",
            description: competitionData.description || "",
            image: null, // Keep null as we don't fetch file data
            category_id: competitionData.category_id || "",
            jenjang: competitionData.jenjang || "",
            start_date: competitionData.start_date || "",
            end_date: competitionData.end_date || "",
            creator_id: competitionData.creator_id || "",
            fee: competitionData.fee || "",
            requirement: null, // Keep null as we don't fetch file data
            group_link: competitionData.group_link || "",
          });
        } else {
          setError("Failed to fetch competition data");
        }
      } catch (error) {
        console.error("Error fetching competition data:", error);
        setError("Error fetching data: " + error.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/category", {
          headers: {
            Authorization: `Bearer ${token}`
          }
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

    fetchCompetition();
    fetchCategories();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompetition((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCompetition((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", competition.name);
    formData.append("description", competition.description);
    if (competition.image) formData.append("image", competition.image);
    formData.append("category_id", competition.category_id);
    formData.append("jenjang", competition.jenjang);
    formData.append("start_date", competition.start_date);
    formData.append("end_date", competition.end_date);
    formData.append("creator_id", competition.creator_id);
    formData.append("fee", competition.fee);
    if (competition.requirement)
      formData.append("requirement", competition.requirement);
    formData.append("group_link", competition.group_link);

    try {
      const response = await axios.post(
        `http://localhost:8000/api/competition/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        alert("Competition berhasil diperbarui");
        navigate("/competition");
      } else {
        alert("Gagal memperbarui competition: " + response.data.message);
      }
    } catch (error) {
      alert("Terjadi kesalahan saat memperbarui competition: " + error.message);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Edit Competition
          </h1>
          <nav
            className="text-sm font-medium text-gray-500 mt-2"
            aria-label="breadcrumb"
          >
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-800">Edit Competition</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">
          EDIT COMPETITION
        </h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Nama Competition */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Competition
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Competition"
              className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={competition.name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Gambar */}
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
              onChange={handleFileChange}
            />
          </div>

          {/* Kategori */}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            >
              <option value="">-- Pilih Jenjang --</option>
              <option value="sd">SD</option>
              <option value="smp">SMP</option>
              <option value="sma/smk">SMA/SMK</option>
              <option value="perguruan_tinggi">Perguruan Tinggi</option>
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Penyelenggara */}
          <div className="mb-4">
            <label
              htmlFor="creator_id"
              className="block text-sm font-medium text-gray-700"
            >
              Penyelenggara (User ID)
            </label>
            <input
              type="text"
              id="creator_id"
              name="creator_id"
              placeholder="Masukkan User ID Penyelenggara"
              className="mt-1 block w-full px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={competition.creator_id}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default EditCompetition;
