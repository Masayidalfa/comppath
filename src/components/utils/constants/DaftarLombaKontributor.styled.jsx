import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const Card = styled.div`
  display: flex;
  align-items: stretch; /* Gambar dan konten sejajar */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 80%; /* Lebar card dibatasi 80% */
  max-width: 700px; /* Lebar maksimum card */
  margin: 20px auto; /* Tengah secara horizontal */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Gambar dan konten vertikal pada perangkat kecil */
    width: 90%; /* Lebar card lebih kecil di HP */
  }
`;


export const CardImage = styled.img`
  width: 35%; /* Lebar gambar lebih kecil */
  height: auto; /* Tinggi gambar responsif */
  object-fit: cover; /* Memastikan gambar memenuhi ruang */
  border-right: 1px solid #ddd; /* Tambahkan garis pemisah di kanan gambar */

  @media (max-width: 768px) {
    width: 100%; /* Gambar full width di perangkat kecil */
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;


export const CardContent = styled.div`
  padding: 15px; /* Kurangi padding */
  width: 65%; /* Lebar konten lebih besar dibanding gambar */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardStatus = styled.span`
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CardJenjang = styled.span`
  font-size: 12px;
  color: #666;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CardDescription = styled.p`
  font-size: 17px;
  color: #555;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const CardDate = styled.span`
  font-size: 12px;
  color: #999;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
