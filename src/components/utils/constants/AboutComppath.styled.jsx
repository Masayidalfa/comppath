import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.bgColor || "white"};
  padding: 40px;
  text-align: left;
  flex-direction: row; /* Pastikan elemen mengalir dari kiri ke kanan */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const HeaderText = styled.div`
  color: #3b3b98;
  font-size: 60px;
  font-weight: bold;
  line-height: 1.2; /* Mengatur jarak antar baris teks */
  margin-bottom: 10px;

  div {
    margin-bottom: 5px; /* Jarak antar baris */
  }
`;

export const SubHeaderText = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;


export const ImageSection = styled.div`
  img {
    width: 380px;
    height: auto;

    @media (max-width: 768px) {
      width: 280px;
    }
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 2px;
  background-color: #3b3b98;
  margin: 0;
`;

export const AboutImage = styled.div`
  img {
    width: 800px; /* Ukuran lebih besar untuk media laptop */
    height: auto;
    margin-bottom: 20px; /* Menambahkan jarak bawah pada gambar */

    @media (max-width: 1024px) {
      width: 380px; /* Ukuran untuk tablet atau laptop kecil */
    }

    @media (max-width: 768px) {
      width: 250px; /* Ukuran untuk perangkat kecil */
    }
  }
`;

export const AboutTitle = styled.h2`
  font-size: 30px;
  color: #3b3b98;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px; /* Menambahkan jarak atas pada judul */
`;


export const AboutText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;
