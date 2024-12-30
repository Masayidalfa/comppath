/* eslint-disable no-unused-vars */
import React from "react";

function Profile() {
  return (
      <div className="space-y-8">
        {/* Profile Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <button className="px-6 py-2 bg-blue-500 text-white border border-blue-500 rounded">
            Edit Profile
          </button>
        </header>

        {/* Profile Section */}
        <section className="bg-white p-6 shadow rounded-lg">
          {/* User Image and Action Buttons */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-sm">100x100</span>
            </div>
            <div>
              <h2 className="text-lg font-medium">Pengguna</h2>
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Change Picture
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">
                  Delete Picture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white p-6 shadow rounded-lg">
          <form className="space-y-6">
            {[
              { label: "Profile Name", type: "text", placeholder: "Enter your name" },
              { label: "Email", type: "email", placeholder: "Enter your email" },
              { label: "No. HP", type: "text", placeholder: "Enter your phone number" },
              { label: "Alamat", type: "textarea", placeholder: "Enter your address" },
              { label: "Usia", type: "number", placeholder: "Enter your age" },
              { label: "Jenis Kelamin", type: "text", placeholder: "Enter your gender" },
              { label: "Instansi", type: "text", placeholder: "Enter your institution" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-bold mb-1">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded">
                Simpan
              </button>
            </div>
          </form>
        </section>
      </div>
  );
}

export default Profile;
