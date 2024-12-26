import { useEffect, Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [error, setError] = useState(null);

  // Fetch data ketika komponen di-mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/${id}`);
        if (response.data.success) {
          const userData = response.data.data; // Sesuaikan dengan struktur API
          setFormData({
            name: userData.name || "", // Update state dengan nama user
            email: userData.email || "", // Update state dengan email user
            role: userData.role || "", // Update state dengan role user
          });
        } else {
          setError("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching data:", error); // Log error
        setError("Error fetching data: " + error.message);
      }
    };

    fetchUser();
  }, [id]);

  // Fungsi untuk menangani perubahan input teks
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirimkan data form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("_method", "PUT");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("role", formData.role);

    try {
      const response = await axios.post(`http://localhost:8000/api/user/${id}`, formDataToSend);

      if (response.data.success) {
        alert("User updated successfully");
        navigate("/user");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      alert("Error updating user: " + error.message);
    }
  };

  return (
    <Fragment>
      <div className="mt-10 bg-white p-10 shadow-md rounded-md">
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">User</h1>
          <nav className="text-sm font-medium text-gray-500 mt-2" aria-label="breadcrumb">
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="text-blue-500 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-800">User</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-2xl font-bold text-blue-600 mb-6 mt-4 text-left">EDIT DATA USER</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama User
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama User"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={formData.name} // Gunakan nilai dari formData
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email User
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email User"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role User
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 block w-1/2 px-3 py-2 border-gray-800 pb-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ring-2 ring-transparent sm:text-sm border-b-2"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="kontributor">Kontributor</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan User
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default EditUser;
