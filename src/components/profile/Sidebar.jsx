/* eslint-disable no-unused-vars */
import React from "react";

function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center p-6 bg-blue-500">
        <span className="text-white text-xl font-bold">Settings</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6">
        <ul className="space-y-4">
          {[
            { icon: "fa-user", label: "Profil" },
            { icon: "fa-calendar-alt", label: "Kegiatan" },
            { icon: "fa-trophy", label: "Lomba" },
            { icon: "fa-cog", label: "Account" },
            { icon: "fa-bell", label: "Notification" },
          ].map((menu, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-500"
              >
                <i className={`fas ${menu.icon}`}></i>
                <span className="font-medium">{menu.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
