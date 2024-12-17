// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
} from '../utils/constants/Footer.styled';
import logo from '/logo.jpg'; // Pastikan path gambar benar

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>
        <img src={logo} alt="Logo" />
        <h3>CompPath</h3>
      </FooterLogo>
      <FooterNav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a>
      </FooterNav>
    </FooterContainer>
  );
}

export default Footer;
