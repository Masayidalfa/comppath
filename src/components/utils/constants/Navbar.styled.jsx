import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container Wrapper for Full Width Navbar and Footer
export const Container = styled.div`
  background-color: #d6edff;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

// Navbar Styled
export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Lebar penuh */
  margin: 0; /* Reset margin */
`;

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Beri jarak antara logo dan brand name */
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%; /* Membuat logo menjadi bulat */
  margin-right: 10px;
`;

export const BrandName = styled.h1`
  font-size: 1.2rem;
  color: #002366;
  margin: 0;
  line-height: 1; /* Hilangkan jarak default vertikal */
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px; /* Tambahkan jarak antar item */
  margin: 0; /* Reset margin */
  padding: 0;
`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &:hover {
    color: #002366;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LoginButton = styled(Button)`
  background-color: #002366;
  color: #fff;
`;

export const SignUpButton = styled(Button)`
  background-color: #fff;
  color: #002366;
  border: 1px solid #002366;
  margin-left: 10px;
`;