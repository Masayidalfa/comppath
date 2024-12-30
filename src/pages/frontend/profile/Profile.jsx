// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  ProfileImageContainer,
  ProfileImage,
  ButtonsContainer,
  Button,
  ProfileName,
  Form,
  Label,
  Input,
  TextArea,
} from "../../../components/utils/constants/Profile.styled"; // Pastikan sesuai dengan file styled-components

function Profile() {
  const { id: userId } = useParams(); // Ambil user_id dari URL
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({ name: "" });
  const [formData, setFormData] = useState({
    alamat: "",
    no_handphone: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    instansi: "",
    foto_profil: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ambil data dasar user
        const userResponse = await axios.get(
          `http://localhost:8000/api/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (userResponse.data.success) {
          setUser(userResponse.data.data); // Simpan nama user
        }

        // Ambil detail user
        const detailResponse = await axios.get(
          `http://localhost:8000/api/detail_user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (detailResponse.data.success) {
          const detailUser = detailResponse.data.data.find(
            (detail) => detail.user_id === parseInt(userId, 10)
          );

          if (detailUser) {
            setFormData(detailUser);

            // Tentukan URL gambar profil
            setPreviewImage(
              detailUser.foto_profil
                ? `http://localhost:8000/storage/${detailUser.foto_profil}`
                : `http://localhost:8000/logo.jpg` // Default gambar jika tidak ada
            );
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, foto_profil: file });
    setPreviewImage(URL.createObjectURL(file)); // Preview gambar lokal
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user_id", userId);
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/detail_user",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Data berhasil diperbarui!");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImage
          src={previewImage}
          alt="Foto Profil"
        />
      </ProfileImageContainer>
      <ProfileName>{user.name}</ProfileName> {/* Nama User */}

      <Form onSubmit={handleSave}>
        <Label>Alamat</Label>
        <TextArea
          name="alamat"
          value={formData.alamat}
          onChange={handleInputChange}
        />

        <Label>No Handphone</Label>
        <Input
          type="text"
          name="no_handphone"
          value={formData.no_handphone}
          onChange={handleInputChange}
        />

        <Label>Tanggal Lahir</Label>
        <Input
          type="date"
          name="tanggal_lahir"
          value={formData.tanggal_lahir}
          onChange={handleInputChange}
        />

        <Label>Jenis Kelamin</Label>
        <Input
          type="text"
          name="jenis_kelamin"
          value={formData.jenis_kelamin}
          onChange={handleInputChange}
        />

        <Label>Instansi</Label>
        <Input
          type="text"
          name="instansi"
          value={formData.instansi}
          onChange={handleInputChange}
        />

        <Label>Foto Profil</Label>
        <Input type="file" name="foto_profil" onChange={handleFileChange} />

        <ButtonsContainer>
          <Button type="submit" className="change">
            Simpan
          </Button>
        </ButtonsContainer>
      </Form>
    </Container>
  );
}

export default Profile;