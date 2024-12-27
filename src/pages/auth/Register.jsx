
function Register () {
  return (
    <div className="min-h-screen flex">
      {/* Register Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8" style={{ backgroundColor: "#C6E7FF" }}>
        <div className="max-w-md w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ color: "#2F3A9F" }}>DAFTAR</h3>

          {/* Error Messages */}
          {/* Replace this section with your error handling logic if needed */}
          <div className="mb-4">
            {/* Example error messages */}
            {/* <div className="bg-red-100 text-red-800 p-4 rounded mb-4">
              <ul>
                <li>Error message here</li>
              </ul>
            </div> */}
          </div>

          <form action="#" method="POST" className="space-y-4">
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
              />
            </div>

            {/* Confirm Password Input */}
            <div>
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
            </div>

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
