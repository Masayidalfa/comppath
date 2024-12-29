import 'react';
import SideBar from './SideBar';

function UserProfile() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Profile Content */}
      <div className="w-3/4 p-6 bg-white overflow-y-auto box-border">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">My Profile</h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* User Image */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-600 text-sm">100 x 100</span>
              </div>
              <h2 className="text-lg font-medium mt-4">Pengguna</h2>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded">
                Change Picture
              </button>
              <button className="px-4 py-2 bg-white text-red-500 border border-gray-300 rounded">
                Delete Picture
              </button>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-500 text-white border border-blue-500 rounded">
              Edit Profile
            </button>
          </div>

          {/* User Information Form */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-bold mb-1">
                Profile Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">No. HP</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Alamat</label>
              <textarea
                placeholder="Enter your address"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Usia</label>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Jenis Kelamin
              </label>
              <input
                type="text"
                placeholder="Enter your gender"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Instansi</label>
              <input
                type="text"
                placeholder="Enter your institution"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-500 text-white border border-blue-500 rounded">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default UserProfile;
