/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  FormWrapper,
  ImagePreview,
  FormField,
  Input,
  Button,
  Title,
  CompetitionName,
} from "../../components/utils/constants/FormPendaftaran.styled";

const FormPendaftaran = () => {
  const { id } = useParams(); // Mengambil id dari URL
  const [competition, setCompetition] = useState(null); // Data kompetisi
  const [error, setError] = useState(null); // Error handling
  const [isLoading, setIsLoading] = useState(true); // Status loading
  const [formData, setFormData] = useState({
    requirement_file: null,
    payment_proof: null,
  });

  useEffect(() => {
    console.log("ID from useParams:", id);
  
    if (!id) {
      setError("ID kompetisi tidak valid.");
      setIsLoading(false);
      return;
    }
  
    const fetchCompetitionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/competition/${id}`);
        console.log("Response from API:", response);
  
        if (response.data.success) {
          const competitionData = response.data.data;
  
          setCompetition({
            name: competitionData.name,
            image: competitionData.image
              ? `http://localhost:8000/competition/${competitionData.image}`
              : "/public/logo.jpg",
          });
        } else {
          setError("Data kompetisi tidak ditemukan.");
        }
      } catch (err) {
        console.error("Error fetching competition details:", err);
        setError("Gagal mengambil data kompetisi.");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchCompetitionDetails();
  }, [id]);
  

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("competition_id", id); // Menggunakan key yang benar
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post("http://localhost:8000/api/registration", form);
      alert("Pendaftaran berhasil!");
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("Gagal mendaftar.");
    }
  };

  return (
    <Container>
      <Title>Form Pendaftaran</Title>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <FormWrapper>
          <ImagePreview>
            <img
              src={competition.image}
              alt={competition.name}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <CompetitionName>{competition.name}</CompetitionName>
          </ImagePreview>
          <form onSubmit={handleSubmit}>
            <FormField>
              <label>File Persyaratan</label>
              <Input
                type="file"
                name="requirement_file"
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <label>Bukti Pembayaran</label>
              <Input
                type="file"
                name="payment_proof"
                onChange={handleChange}
                required
              />
            </FormField>
            <Button type="submit" primary>
              Daftar
            </Button>
          </form>
        </FormWrapper>
      )}
    </Container>
  );
};

export default FormPendaftaran;
