/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


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
  const { id: competitionId } = useParams(); // Ambil competition_id dari URL
  const [formData, setFormData] = useState({
    user_id: "",
    competition_id: competitionId,
    registration_date: "",
    status: "pending",
    requirements_file: null,
    payment_proof: null,
  });
  const [competition, setCompetition] = useState({ name: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token"); // Ambil token dari localStorage
  const navigate = useNavigate();
  
  useEffect(() => {
    // Ambil user_id dari localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setFormData((prevData) => ({
        ...prevData,
        user_id: storedUserData.id,
        registration_date: new Date().toISOString().split("T")[0], // Tanggal hari ini
      }));
    } else {
      console.error("User data tidak ditemukan di localStorage");
    }
  }, []);

  useEffect(() => {
    // Fetch data competition
    const fetchCompetitionDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/competition/${competitionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          const competitionData = response.data.data;
          setCompetition({
            name: competitionData.name,
            image: competitionData.image
              ? `http://localhost:8000/storage/${competitionData.image}`
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
  }, [competitionId, token]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validasi file sebelum submit
    if (!formData.requirements_file || !formData.payment_proof) {
      alert("File persyaratan dan bukti pembayaran harus diunggah.");
      return;
    }

    const form = new FormData();
    form.append("competition_id", competitionId); // Pastikan key benar
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:8000/api/registration", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        alert("Pendaftaran berhasil!");
        navigate("/kegiatan")
      } else {
        alert("Pendaftaran gagal: " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting registration:", error.response?.data);
      alert(
        `Gagal mendaftar: ${error.response?.data?.message || "Error tidak diketahui"}`
      );
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
                accept="application/pdf"
                name="requirements_file"
                onChange={handleChange}
                required
              />
            </FormField>
            <FormField>
              <label>Bukti Pembayaran</label>
              <Input
                type="file"
                accept="image/*"
                name="payment_proof"
                onChange={handleChange}
                required
              />
            </FormField>
            <Button primary type="submit">
              Daftar
            </Button>
          </form>
        </FormWrapper>
      )}
    </Container>
  );
};

export default FormPendaftaran;
