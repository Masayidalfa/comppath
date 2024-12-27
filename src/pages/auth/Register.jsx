import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            if (response.data.success) {
                alert('Register Berhasil');
                navigate('/login');
            } else {
                setError(response.data.message || 'Register Gagal');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi');
            console.error(error);
        }
    };
    

  return (
    <div className="min-h-screen flex">
      {/* Register Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8" style={{ backgroundColor: "#C6E7FF" }}>
        <div className="max-w-md w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "#2F3A9F" }}>DAFTAR</h3>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your username"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Confirm Password Input */}
            {/* <div>
              <label htmlFor="password_confirm" className="block text-gray-700 font-medium mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="password_confirm"
                name="password_confirm"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Confirm your password"
              />
            </div> */}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Daftar
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-4">
              <a href="/login" className="text-sm text-blue-500 hover:underline">
                Sudah Punya Akun? Login
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('public/image/photo1.jpg')" }}
      ></div>
    </div>
  );
};

export default Register;
