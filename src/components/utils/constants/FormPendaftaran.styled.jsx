import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  background-color: #f9f9f9;
  padding: 65px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ccc;
  }
`;

export const CompetitionName = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
  text-align: center;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
  }

  select {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? "#007bff" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#007bff")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#f0f0f0")};
  }
`;
