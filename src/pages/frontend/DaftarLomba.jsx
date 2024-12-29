// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Title,
  HeaderImage,
  CardsContainer,
  ErrorMessage,
} from "../../components/utils/constants/CompetitionList.styled";
import CompetitionCard from "../../components/user/CompetitionCard";

const DaftarLomba = () => {
  //token
  const token = localStorage.getItem("token");

  const [competitions, setCompetitions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/competition",{
      headers: {
        "Content-Type": "application/json", // Pastikan tipe konten JSON
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
    console.log("Response status:", res.status);
    console.log("Response headers:", res.headers);
        // Cek apakah response berhasil
        if (!res.ok) {
          throw new Error("Failed to fetch competitions");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setCompetitions(data.data);
        } else {
          setError(data.message || "Error fetching competitions");
        }
      })
      .catch((err) => setError(err.message || "An error occurred"));
  }, []);

  return (
    <Wrapper>
        {/* Header Gambar Full Width */}
              <HeaderImage src="/Comppath.png" alt="Competition Header" />
              <Title>Daftar Lomba</Title>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <CardsContainer>
          {competitions.map((competition) => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </CardsContainer>
      )}
    </Wrapper>
  );
};

export default DaftarLomba;
