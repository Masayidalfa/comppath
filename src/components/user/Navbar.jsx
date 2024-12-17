/* eslint-disable no-unused-vars */
import React from 'react';
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
} from '../utils/constants/Navbar.styled';


function Navbar() {
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
        </NavbarList>

        {/* Tombol Login dan Sign Up */}
        <div>
          <LoginButton>Login</LoginButton>
          <SignUpButton>Sign Up</SignUpButton>
        </div>
      </NavbarStyled>
    </Container>
  );
}

export default Navbar;
