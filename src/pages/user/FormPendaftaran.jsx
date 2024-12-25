/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Container,
  FormTitle,
  ErrorMessage,
  Form,
  FormGroup,
  Label,
  FormInput,
  SubmitButton,
} from "../../components/utils/constants/FormPendaftaran.styled"; 
import axios from "axios";

function Registration({ user, competitionId, onSubmitRegistration }) {
  const [formData, setFormData] = useState({
    user_id: user.id,
    competition_id: competitionId,
    registration_date: new Date().toISOString().split("T")[0], // Default to today's date
    requirement_file: "",
    payment_proof: "",
  });

  const [competition, setCompetition] = useState({});
  const [detailUser, setDetailUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch competition details
    const fetchCompetition = async () => {
      try {
        const { data } = await axios.get(`/api/competition/${competitionId}`);
        setCompetition(data.data);  // Assuming `data.data` contains the competition info
      } catch (err) {
        setError("Gagal memuat detail lomba.");
      }
    };

    // Fetch user detail
    const fetchDetailUser = async () => {
      try {
        const { data } = await axios.get(`/api/detail_user/${user.id}`);
        setDetailUser(data.data); // Assuming `data.data` contains the user details
      } catch (err) {
        setDetailUser(null);
      }
    };

    fetchCompetition();
    fetchDetailUser();
    setLoading(false);
  }, [competitionId, user.id]);

  const handleInputChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!detailUser) {
      alert("Isi Detail User Terlebih Dahulu!");
      window.location.href = "/form-detail-user"; // Redirect user to fill their details
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("user_id", formData.user_id);
      formDataToSend.append("competition_id", formData.competition_id);
      formDataToSend.append("registration_date", formData.registration_date);
      formDataToSend.append("requirement_file", formData.requirement_file);
      formDataToSend.append("payment_proof", formData.payment_proof);

      await axios.post("/api/registration", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Pendaftaran berhasil!");
      if (onSubmitRegistration) onSubmitRegistration();
    } catch (err) {
      setError("Terjadi kesalahan saat mendaftar.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Container>
      <FormTitle>Pendaftaran Kompetisi</FormTitle>
      <p><strong>Lomba:</strong> {competition.name}</p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>File Persyaratan</Label>
          <FormInput
            type="file"
            name="requirement_file"
            onChange={handleInputChange}
            accept="application/pdf"
          />
        </FormGroup>
        <FormGroup>
          <Label>Bukti Pembayaran</Label>
          <FormInput
            type="file"
            name="payment_proof"
            onChange={handleInputChange}
            accept="image/*"
          />
        </FormGroup>
        <SubmitButton type="submit">Daftar</SubmitButton>
      </Form>
    </Container>
  );
}

export default Registration;
