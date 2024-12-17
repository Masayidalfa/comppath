import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: linear-gradient(to right, #64b5f6, #3f51b5); /* Gradasi biru muda ke biru tua */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* Logo di kiri, nav di kanan */
  align-items: center;
  color: white;
  font-family: 'Poppins', sans-serif;
  width: 100%; /* Lebar penuh */
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Membuat logo bulat */
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem; /* Ukuran teks kecil */
    transition: color 0.3s ease;

    &:hover {
      color: #ff80ab; /* Warna hover pink */
    }
  }
`;
