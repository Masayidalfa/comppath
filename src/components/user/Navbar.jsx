import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavbarStyled,
  NavbarBrand,
  Logo,
  BrandName,
  NavbarList,
  NavbarItem,
  NavbarLink,
  LoginButton,
  SignUpButton,
  ProfileContainer,
  ProfileImage,
  DropdownMenu,
  DropdownItem,
} from "../utils/constants/Navbar.styled"; // Mengimpor style dari lokasi yang benar

// Komponen Navbar
function Navbar() {
  const token = localStorage.getItem("token");
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null); // Menyimpan data pengguna yang login
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Untuk kontrol dropdown
  const defaultProfileImage = "/public/logo.jpg"; // Gambar default jika tidak ada foto profil

  // Menyimpan role user setelah login
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.role) {
      setUserRole(userData.role);
    }
  }, []); // Menyimpan role user setelah login

  // Menangani status login dan pengambilan data pengguna
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []); // Ambil data user dari localStorage

  // Menangani logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUserData(null);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Menampilkan atau menyembunyikan dropdown
  };

  return (
    <Container>
      <NavbarStyled>
        {/* Logo dan Brand */}
        <NavbarBrand>
          <Logo src="/logo.jpg" alt="Logo" />
          <BrandName>CompPath</BrandName>
        </NavbarBrand>

        {/* Menu */}
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/daftar_lomba">Lomba</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/daftar-kategori">Kategori</NavbarLink>
          </NavbarItem>
          {userRole === "admin" && ( // Menampilkan Dashboard hanya untuk admin
            <NavbarItem>
              <NavbarLink to="/dashboard">Dashboard</NavbarLink>
            </NavbarItem>
          )}
        </NavbarList>

        {/* Profil atau Tombol Login */}
        <div>
          {userData ? (
            <ProfileContainer>
              <ProfileImage
                src={
                  userData.foto_profil
                    ? `http://localhost:8000/storage/${userData.foto_profil}`
                    : defaultProfileImage
                }
                alt="Profile"
                onClick={toggleDropdown} // Menampilkan dropdown jika gambar profil diklik
              />
              {isDropdownVisible && (
                <DropdownMenu>
                  <DropdownItem to={`/profile/${userData.id}`}>Profile</DropdownItem> {/* Link ke halaman profile berdasarkan ID user */}
                  <DropdownItem to="/login" onClick={handleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              )}
            </ProfileContainer>
          ) : (
            <>
              <Link to="/login">
                <LoginButton>Login</LoginButton>
              </Link>
              <Link to="/register">
                <SignUpButton>Sign Up</SignUpButton>
              </Link>
            </>
          )}
        </div>
      </NavbarStyled>
    </Container>
  );
}

export default Navbar;
