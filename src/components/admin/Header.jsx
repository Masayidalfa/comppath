/* eslint-disable react/prop-types */
import { useState } from "react";


function Header({ toggleSidebar }) {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 flex items-center justify-between">
      {/* Navbar Brand*/}
      <a className="text-lg font-semibold" href="index.html">
        Start Bootstrap
      </a>
      {/* Sidebar Toggle*/}
      <button
        onClick={toggleSidebar}
        className="text-gray-300 hover:text-white focus:outline-none focus:ring"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Navbar Search*/}
      <form className="hidden md:flex items-center">
        <div className="relative">
          <input
            className="bg-gray-700 text-white rounded-l px-4 py-2 focus:outline-none focus:ring"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-r px-4 py-2 focus:outline-none focus:ring"
            id="btnNavbarSearch"
            type="button"
          >
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
     {/* Navbar */}
     <ul className="flex items-center space-x-4 relative">
        <li>
          <button
            onClick={toggleDropdown}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring"
          >
            <i className="fas fa-user fa-fw" />
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
