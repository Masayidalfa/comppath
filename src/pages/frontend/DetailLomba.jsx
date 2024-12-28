/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Header,
  ImageWrapper,
  Image,
  Title,
  Sections,
  LeftSection,
  RightSection,
  Info,
  Description,
  Button,
} from "../../components/utils/constants/DetailLomba.styled";

const DetailLomba = () => {
  //token
  const token = localStorage.getItem("token");

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Menambahkan useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/competition/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success) {
          setData(response.data.data);

          // Fetch kategori berdasarkan category_id
          const categoryResponse = await axios.get(`http://localhost:8000/api/category/${response.data.data.category_id}`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (categoryResponse.data.success) {
            setCategory(categoryResponse.data.data.name);
          } else {
            setCategory("Tidak diketahui");
          }
        } else {
          setError("Data not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch competition details.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { name, description, start_date, end_date, fee, requirement, image } = data;

  const imageUrl = image ? `http://localhost:8000/storage/${image}` : "/logo.jpg";

  // Fungsi untuk mengarahkan ke halaman pendaftaran
  const handleRegister = () => {
    console.log("Navigating to:", `/pendaftaran/${id}`);
    navigate(`/pendaftaran/${id}`);
  };
  

  return (
    <Container>
      <Card>
        <Header>
          <ImageWrapper>
            <Image src={imageUrl} alt={name} />
          </ImageWrapper>
          <Title>{name}</Title>
        </Header>

        <Sections>
          {/* Bagian Kiri */}
          <LeftSection>
            <Info><strong>Tanggal Mulai:</strong> {new Date(start_date).toLocaleDateString()}</Info>
            <Info><strong>Tanggal Akhir:</strong> {new Date(end_date).toLocaleDateString()}</Info>
            <Info><strong>Biaya Pendaftaran:</strong> {fee}</Info>
            <Info><strong>Grup Diskusi:</strong> {data.group_link ? <a href={data.group_link} target="_blank" rel="noopener noreferrer">Bergabung</a> : "Tidak tersedia"}</Info>
            <Info><strong>Persyaratan:</strong> {requirement ? <a href={requirement} download>Download</a> : "Tidak ada"}</Info>
          </LeftSection>

          {/* Bagian Kanan */}
          <RightSection>
            <Description>
              <strong>Deskripsi:</strong>
              <p>{description}</p>
            </Description>
            <Button onClick={handleRegister}>Daftar</Button>
          </RightSection>
        </Sections>
      </Card>
    </Container>
  );
};

export default DetailLomba;
