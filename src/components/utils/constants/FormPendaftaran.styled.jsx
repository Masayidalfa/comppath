import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem auto;
  max-width: 800px;
  padding: 1rem;
`;

export const FormTitle = styled.h1`
  color:rgb(16, 17, 17);
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  color:rgb(29, 30, 31);
  font-size: 1.59rem;
  font-family: 'Poppins', sans-serif;
`;

export const FormSelect = styled.select`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 2px solid rgb(136, 178, 231);
  border-radius: 10px;
  font-size: 1.59rem;
  width: 100%;
  color:rgb(16, 17, 17);
`;

export const FormInput = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 2px solid rgb(136, 178, 231);
  border-radius: 10px;
  font-size: 1.59rem;
  width: 100%;
  color:rgb(16, 17, 17);
`;

export const SubmitButton = styled.button`
  background-color: #03b1dd;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.59rem;
  width: 100%;
  height: auto;

  &:hover {
    background-color: #218838;
  }
`;
