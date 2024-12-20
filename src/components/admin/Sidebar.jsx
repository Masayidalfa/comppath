/* eslint-disable react/prop-types */
import { useState } from "react";

function Sidebar({ isOpen }) {
  const [isMasterDataOpen, setMasterDataOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isErrorOpen, setErrorOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="flex flex-col h-full" id="sidenavAccordion">
        <div className="flex-grow p-4">
          <div className="text-sm font-semibold uppercase text-gray-400 mb-4">Core</div>
          <a className="flex items-center text-gray-300 hover:text-white p-2 rounded" href="/">
            <div className="mr-3">
              <i className="fas fa-tachometer-alt" />
            </div>
            Dashboard
          </a>

          <div className="text-sm font-semibold uppercase text-gray-400 mt-6 mb-4">Interface</div>
          {/* Master Data */}
          <button
            onClick={() => setMasterDataOpen(!isMasterDataOpen)}
            className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded"
          >
            <div className="flex items-center">
              <i className="fas fa-columns mr-3" />
              Master Data
            </div>
            <i className={`fas fa-angle-${isMasterDataOpen ? "up" : "down"}`} />
          </button>
          {isMasterDataOpen && (
            <div className="ml-4">
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/user">
                User
              </a>
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/detail-user">
                Detail User
              </a>
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/kategori">
                Kategori
              </a>
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/lomba">
                Lomba
              </a>
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/pendaftaran">
                Pendaftaran
              </a>
              <a className="block text-gray-300 hover:text-white p-2 rounded" href="/kelola-lomba">
                Kelola Lomba
              </a>
            </div>
          )}

          {/* Pages */}
          <button
            onClick={() => setPagesOpen(!isPagesOpen)}
            className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded mt-4"
          >
            <div className="flex items-center">
              <i className="fas fa-book-open mr-3" />
              Pages
            </div>
            <i className={`fas fa-angle-${isPagesOpen ? "up" : "down"}`} />
          </button>
          {isPagesOpen && (
            <div className="ml-4">
              <button
                onClick={() => setAuthOpen(!isAuthOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded"
              >
                Authentication
                <i className={`fas fa-angle-${isAuthOpen ? "up" : "down"}`} />
              </button>
              {isAuthOpen && (
                <div className="ml-4">
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="login.html">
                    Login
                  </a>
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="register.html">
                    Register
                  </a>
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="password.html">
                    Forgot Password
                  </a>
                </div>
              )}
              <button
                onClick={() => setErrorOpen(!isErrorOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded mt-2"
              >
                Error
                <i className={`fas fa-angle-${isErrorOpen ? "up" : "down"}`} />
              </button>
              {isErrorOpen && (
                <div className="ml-4">
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="401.html">
                    401 Page
                  </a>
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="404.html">
                    404 Page
                  </a>
                  <a className="block text-gray-300 hover:text-white p-2 rounded" href="500.html">
                    500 Page
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="text-sm text-gray-400">Logged in as:</div>
          <div className="text-white">Start Bootstrap</div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
