import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset pesan error sebelum login baru
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      if (response.status === 200 && response.data.success) {
        localStorage.setItem('token', response.data.token);
        alert('Login Berhasil');
        navigate('/frontend'); // Navigasi hanya pada kondisi sukses
      } else {
        setError(response.data.message || 'Login Failed');
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
        'Terjadi kesalahan pada server. Silakan coba lagi nanti.'
      );
      console.error(error); // Debug saat pengembangan
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Background Image */}
      <div
        className="hidden lg:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('public/image/photo1.jpg')" }}
      ></div>

      {/* Login Form */}
      <div
        className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8"
        style={{ backgroundColor: "#C6E7FF" }}
      >
        <div className="max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#2F3A9F" }}>
            LOGIN
          </h3>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Lupa Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-4">
              <a href="/register" className="text-sm text-blue-500 hover:underline">
                Belum Punya Akun? Daftar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;