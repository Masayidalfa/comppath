import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 250px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const Description = styled.div`
  margin-bottom: 20px;

  p {
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
