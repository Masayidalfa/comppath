/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
} from "../utils/constants/Navbar.styled";

function Navbar() {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []); //menampung role user dari auth login


  return (
    <Container>
      <NavbarStyled>
        {/* Logo dan Brand */}
        <NavbarBrand>
          <Logo src="/logo.jpg" alt="Logo" /> {/* Ganti path dengan sesuai */}
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
          {userRole === 'admin' && ( // membatasi jika user role admin dapat mengakses dashboard
            <NavbarItem>
            <NavbarLink to="/dashboard">Dashboard</NavbarLink>
          </NavbarItem>
          )}
          
        </NavbarList>

        {/* Tombol Login dan Sign Up */}
        <div>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/register">
            <SignUpButton>Sign Up</SignUpButton>
          </Link>
        </div>
      </NavbarStyled>
    </Container>
  );
}

export default Navbar;
