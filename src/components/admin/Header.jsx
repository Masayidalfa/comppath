/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ toggleSidebar, isSidebarOpen }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`text-gray-300 px-4 pt-4 flex items-center justify-between transition-all ${
        isSidebarOpen ? "ml-64" : "ml-16"
      }`}
    >
      {/* Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="text-gray-400 hover:text-gray-300 focus:outline-none focus:ring"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Navbar */}
      <ul className="flex items-center space-x-4 relative">
        <li>
          <button
            onClick={toggleDropdown}
            className="text-gray-500 hover:text-gray-300 focus:outline-none focus:ring"
          >
            <i className="fas fa-cog fa-fw" />
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-gray-700 text-white rounded shadow-lg w-48">
              <li>
                <a className="block px-4 py-2 hover:bg-gray-600" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
