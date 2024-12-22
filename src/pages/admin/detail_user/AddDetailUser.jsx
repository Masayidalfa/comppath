import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddDetailUser() {
  const [users, setUsers] = useState([]); // List of users for select options
  const [detailUser, setDetailUser] = useState({
    user_id: "",
    alamat: "",
    no_handphone: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    instansi: "",
    foto_profil: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users data for the select option
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        if (response.data.success) {
          setUsers(response.data.data); // Assuming the response contains user data
        }
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", detailUser.user_id);
    formData.append("alamat", detailUser.alamat);
    formData.append("no_handphone", detailUser.no_handphone);
    formData.append("tanggal_lahir", detailUser.tanggal_lahir);
    formData.append("jenis_kelamin", detailUser.jenis_kelamin);
    formData.append("instansi", detailUser.instansi);
    formData.append("foto_profil", detailUser.foto_profil);

    try {
      const response = await axios.post("http://localhost:8000/api/detail_user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        alert("Detail User Berhasil Ditambahkan");
        navigate("/detail-user"); // Redirect to the detail user page
      } else {
        alert("Detail User Gagal Ditambahkan");
      }
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi");
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        {/* Header */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">Detail User</h1>
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
              <li className="text-gray-800">Detail User</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">
          BUAT DETAIL USER
        </h1>

        <form onSubmit={handleSubmit}>
          {/* User ID (Select) */}
          <div className="mb-4">
            <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">User</label>
            <select
              id="user_id"
              name="user_id"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.user_id}
              onChange={(e) => setDetailUser({ ...detailUser, user_id: e.target.value })}
              required
            >
              <option value="">Pilih User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          {/* Alamat */}
          <div className="mb-4">
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              placeholder="Masukkan Alamat"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.alamat}
              onChange={(e) => setDetailUser({ ...detailUser, alamat: e.target.value })}
              required
            />
          </div>

          {/* No Handphone */}
          <div className="mb-4">
            <label htmlFor="no_handphone" className="block text-sm font-medium text-gray-700">No Handphone</label>
            <input
              type="text"
              id="no_handphone"
              name="no_handphone"
              placeholder="Masukkan No Handphone"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.no_handphone}
              onChange={(e) => setDetailUser({ ...detailUser, no_handphone: e.target.value })}
              required
            />
          </div>

          {/* Tanggal Lahir */}
          <div className="mb-4">
            <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
            <input
              type="date"
              id="tanggal_lahir"
              name="tanggal_lahir"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.tanggal_lahir}
              onChange={(e) => setDetailUser({ ...detailUser, tanggal_lahir: e.target.value })}
              required
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="mb-4">
            <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
            <select
              id="jenis_kelamin"
              name="jenis_kelamin"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.jenis_kelamin}
              onChange={(e) => setDetailUser({ ...detailUser, jenis_kelamin: e.target.value })}
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          {/* Instansi */}
          <div className="mb-4">
            <label htmlFor="instansi" className="block text-sm font-medium text-gray-700">Instansi</label>
            <input
              type="text"
              id="instansi"
              name="instansi"
              placeholder="Masukkan Instansi"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={detailUser.instansi}
              onChange={(e) => setDetailUser({ ...detailUser, instansi: e.target.value })}
              required
            />
          </div>

          {/* Foto Profil */}
          <div className="mb-4">
            <label htmlFor="foto_profil" className="block text-sm font-medium text-gray-700">Foto Profil</label>
            <input
              type="file"
              id="foto_profil"
              name="foto_profil"
              accept="image/*"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              onChange={(e) => setDetailUser({ ...detailUser, foto_profil: e.target.files[0] })}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buat Detail User
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AddDetailUser;
