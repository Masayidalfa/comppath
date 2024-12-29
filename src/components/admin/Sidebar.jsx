/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Sidebar({ isOpen }) {
  //ambil data token,userName, fotoProfil
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData?.name; // Ambil nama dari userData
  const userProfilePic = userData?.foto_profil; // Ambil foto profil dari userData

  //fungsi logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  // State untuk menampilkan menu
  const [isMasterDataOpen, setMasterDataOpen] = useState(false);
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isFrontendOpen, setFrontendOpen] = useState(false);

  // State untuk hover masing-masing item
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isDetailUserHovered, setIsDetailUserHovered] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [isCompetitionHovered, setIsCompetitionHovered] = useState(false);
  const [isRegistrationHovered, setIsRegistrationHovered] = useState(false);

  // Hover untuk Pages, Authentication, dan Frontend
  const [isPagesHovered, setIsPagesHovered] = useState(false);
  const [isAuthHovered, setIsAuthHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isFrontendHovered, setIsFrontendHovered] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full text-white w-64 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-48"
      }`}
      style={{ background: "linear-gradient(to top,#2F3A9F,#C6E7FF)" }}
    >
      <nav className="flex flex-col h-full" id="sidenavAccordion">
        <div className="flex-grow p-4">
          <div className="flex flex-col items-center p-4">
            {/* Image Container */}
            <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center">
              <a href="/dashboard">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            {/* Text */}
            <p className="mt-4 text-3xl font-semibold text-center text-white">
              CompPath
            </p>
          </div>

          {/* Account */}
          <div className="text-sm font-semibold uppercase text-gray-200 mt-6 mb-4">
            Account
          </div>

          {token && (
            <button
              onClick={() => setAccountOpen(!isAccountOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded"
            >
              <div className="flex items-center">
                <img
                  src={userProfilePic ? `http://localhost:8000/storage/${userProfilePic}` : '/image/defaultUser.jpg'}
                  alt="Logo"
                  className="w-10 h-10 rounded-full mr-3"
                />
                {userName}
              </div>
              <i className={`fas fa-angle-${isAccountOpen ? "up" : "down"}`} />
            </button>
          )}

          {isAccountOpen && (
            <div className="ml-4">
              <button
                onClick={handleLogout}
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/logout"
              >
                <i className="fas fa-sign-out-alt mr-3"></i>
                Logout
              </button>
            </div>
          )}

          <div className="text-sm font-semibold uppercase text-gray-200 mt-6 mb-4">
            Interface
          </div>
          {/* Master Data */}
          <button
            onClick={() => setMasterDataOpen(!isMasterDataOpen)}
            style={{
              backgroundColor: isButtonHovered ? "#2F3A9F" : "transparent",
            }} // Ganti warna latar belakang saat hover
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
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
              <a
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/user"
                style={{
                  backgroundColor: isUserHovered ? "#2F3A9F" : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => setIsUserHovered(false)}
              >
                <i className="fas fa-user mr-3"></i>
                User
              </a>
              <a
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/detail-user"
                style={{
                  backgroundColor: isDetailUserHovered
                    ? "#2F3A9F"
                    : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsDetailUserHovered(true)}
                onMouseLeave={() => setIsDetailUserHovered(false)}
              >
                <i className="fas fa-address-card mr-3"></i>
                Detail User
              </a>
              <a
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/category"
                style={{
                  backgroundColor: isCategoryHovered
                    ? "#2F3A9F"
                    : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsCategoryHovered(true)}
                onMouseLeave={() => setIsCategoryHovered(false)}
              >
                <i className="fas fa-hashtag mr-3"></i>
                Category
              </a>
              <a
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/competition"
                style={{
                  backgroundColor: isCompetitionHovered
                    ? "#2F3A9F"
                    : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsCompetitionHovered(true)}
                onMouseLeave={() => setIsCompetitionHovered(false)}
              >
                <i className="fas fa-trophy mr-3"></i>
                Competition
              </a>
              <a
                className="block text-gray-300 hover:text-white p-2 rounded"
                href="/registration"
                style={{
                  backgroundColor: isRegistrationHovered
                    ? "#2F3A9F"
                    : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsRegistrationHovered(true)}
                onMouseLeave={() => setIsRegistrationHovered(false)}
              >
                <i className="fas fa-book mr-3"></i>
                Registration
              </a>
            </div>
          )}

          {/* Pages */}
          <button
            onClick={() => setPagesOpen(!isPagesOpen)}
            className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded mt-4"
            style={{
              backgroundColor: isPagesHovered ? "#2F3A9F" : "transparent",
            }} // Ganti warna latar belakang saat hover
            onMouseEnter={() => setIsPagesHovered(true)}
            onMouseLeave={() => setIsPagesHovered(false)}
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
                style={{
                  backgroundColor: isAuthHovered ? "#2F3A9F" : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsAuthHovered(true)}
                onMouseLeave={() => setIsAuthHovered(false)}
              >
                Authentication
                <i className={`fas fa-angle-${isAuthOpen ? "up" : "down"}`} />
              </button>
              {isAuthOpen && (
                <div className="ml-4">
                  <a
                    className="block text-gray-300 hover:text-white p-2 rounded"
                    href="login.html"
                    style={{
                      backgroundColor: isLoginHovered
                        ? "#2F3A9F"
                        : "transparent",
                    }} // Ganti warna latar belakang saat hover
                    onMouseEnter={() => setIsLoginHovered(true)}
                    onMouseLeave={() => setIsLoginHovered(false)}
                  >
                    Login
                  </a>
                  <a
                    className="block text-gray-300 hover:text-white p-2 rounded"
                    href="register.html"
                    style={{
                      backgroundColor: isRegisterHovered
                        ? "#2F3A9F"
                        : "transparent",
                    }} // Ganti warna latar belakang saat hover
                    onMouseEnter={() => setIsRegisterHovered(true)}
                    onMouseLeave={() => setIsRegisterHovered(false)}
                  >
                    Register
                  </a>
                </div>
              )}
              <button
                onClick={() => setFrontendOpen(!isFrontendOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white p-2 rounded mt-2"
                style={{
                  backgroundColor: isFrontendHovered
                    ? "#2F3A9F"
                    : "transparent",
                }} // Ganti warna latar belakang saat hover
                onMouseEnter={() => setIsFrontendHovered(true)}
                onMouseLeave={() => setIsFrontendHovered(false)}
              >
                Frontend
                <i
                  className={`fas fa-angle-${isFrontendOpen ? "up" : "down"}`}
                />
              </button>
              {isFrontendOpen && (
                <div className="ml-4">
                  <a
                    className="block text-gray-300 hover:text-white p-2 rounded"
                    href="/"
                    style={{
                      backgroundColor: isHomeHovered
                        ? "#2F3A9F"
                        : "transparent",
                    }} // Ganti warna latar belakang saat hover
                    onMouseEnter={() => setIsHomeHovered(true)}
                    onMouseLeave={() => setIsHomeHovered(false)}
                  >
                    Home Page
                  </a>
                  <a
                    className="block text-gray-300 hover:text-white p-2 rounded"
                    href="/user_profile"
                    style={{
                      backgroundColor: isProfileHovered
                        ? "#2F3A9F"
                        : "transparent",
                    }} // Ganti warna latar belakang saat hover
                    onMouseEnter={() => setIsProfileHovered(true)}
                    onMouseLeave={() => setIsProfileHovered(false)}
                  >
                    Profile Page
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
