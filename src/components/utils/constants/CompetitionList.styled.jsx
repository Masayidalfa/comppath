import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%; /* Full width untuk gambar header */
  height: auto; /* Responsif sesuai proporsi gambar */
  margin-bottom: 20px; /* Jarak dengan card */
`;
export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;
