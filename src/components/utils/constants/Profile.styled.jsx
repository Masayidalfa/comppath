import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;

  &.change {
    background-color: #007bff;
    color: white;
  }

  &.change:hover {
    background-color: #0056b3;
  }

  &.delete {
    background-color: white;
    color: red;
    border: 1px solid red;
  }

  &.delete:hover {
    background-color: #ffe6e6;
  }
`;

export const EditButton = styled(Button)`
  background-color: #007bff;
  color: white;
  margin-top: 20px;
  padding: 10px 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfileName = styled.h3`
  margin: 10px 0;
  font-size: 16px;
`;

export const Form = styled.form`
  margin-top: 20px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;