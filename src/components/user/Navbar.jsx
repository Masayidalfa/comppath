/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useNavigate } from "react";
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
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []); //menampung role user dari auth login

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [userData, setUserData] = useState(null); // Data pengguna yang login
  const defaultProfileImage = "/public/logo.jpg"; // Gambar default jika foto profil kosong

  useEffect(() => {
    // Fetch data pengguna yang login
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/detail_user");
        const result = await response.json();

        if (result.success) {
          const loggedInUser = result.data.find((user) => user.id === 1); // Contoh user ID login
          if (loggedInUser) {
            setUserData(loggedInUser);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false); // Tidak ada pengguna yang login
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false); // Set status ke tidak login jika ada error
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Logika logout
    console.log("User logged out");
    setIsLoggedIn(false);
    setUserData(null);
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
          {userRole === "admin" && ( // membatasi jika user role admin dapat mengakses dashboard
            <NavbarItem>
              <NavbarLink to="/dashboard">Dashboard</NavbarLink>
            </NavbarItem>
          )}
        </NavbarList>

        {/* Profil atau Tombol Login */}
        <div>
          {isLoggedIn && userData ? (
            <ProfileContainer>
              <ProfileImage
                src={
                  userData.foto_profil
                    ? `http://localhost:8000/${userData.foto_profil}`
                    : defaultProfileImage
                }
                alt="Profile"
              />
              <DropdownMenu>
                <DropdownItem to="/edit_profile">Edit Profil</DropdownItem>
                <DropdownItem to="/login" onClick={handleLogout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
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
