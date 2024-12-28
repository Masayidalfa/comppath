import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #d6edff;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const BrandName = styled.h1` /* Tambahkan ini jika belum ada */
  font-size: 1.2rem;
  color: #002366;
  margin: 0;
  line-height: 1;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
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

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  ${ProfileContainer}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
    color: #002366;
  }
`;
