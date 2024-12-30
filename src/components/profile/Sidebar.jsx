/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  // Mengambil data user dari localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserRole(userData.role); // Menyimpan role user
      setUserId(userData.id); // Menyimpan id user
    }
  }, []); // Efek hanya dijalankan sekali setelah komponen dimuat

  return (
    <div className="w-1/4 bg-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center p-6 bg-gray-200">
        <span className="text-gray-700 text-xl font-bold">Settings</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6">
        <ul className="space-y-4">
          {[
            { icon: "fa-user", label: "Profil", link: `/profile/${userId}` },
            { icon: "fa-calendar-alt", label: "Kegiatan", link: "/kegiatan" },
            ...(userRole === "kontributor"
              ? [
                  {
                    icon: "fa-trophy",
                    label: "Lomba",
                    link: "/daftar-lomba-kontributor",
                  },
                ]
              : []),
          ].map((menu, idx) => (
            <li key={idx}>
              <Link
                to={menu.link}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
              >
                <i className={`fas ${menu.icon}`}></i>
                <span className="font-medium">{menu.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
