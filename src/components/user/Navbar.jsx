/* eslint-disable no-unused-vars */
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
} from "../utils/constants/Navbar.styled";

function Navbar() {
  const token = localStorage.getItem("token");
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.role) {
      setUserRole(userData.role);
    }
  }, []); // Menyimpan role user dari login

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [userData, setUserData] = useState(null); // Data pengguna yang login
  const defaultProfileImage = "/public/logo.jpg"; // Gambar default jika foto profil kosong

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []); // Menjalankan useEffect hanya sekali saat komponen pertama kali di-render

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUserData(null);
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
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
            <NavbarLink to="/service">Service</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarItem>
          {userRole === "admin" && ( // Membatasi akses berdasarkan role user
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
                onClick={toggleDropdown} // Menambahkan klik untuk menampilkan dropdown
              />
              {isDropdownVisible && (
                <DropdownMenu>
                  <DropdownItem to="/edit_profile">Edit Profil</DropdownItem>
                  <DropdownItem to="/login" onClick={handleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              )}
            </ProfileContainer>
          ) : (
            <>
              <LoginButton>Login</LoginButton>
              <SignUpButton>Sign Up</SignUpButton>
            </>
          )}
        </div>
      </NavbarStyled>
    </Container>
  );
}

export default Navbar;
