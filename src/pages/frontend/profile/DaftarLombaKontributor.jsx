import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardStatus,
  CardJenjang,
  CardTitle,
  CardDescription,
  CardDate,
} from "../../../components/utils/constants/DaftarLombaKontributor.styled";

const DaftarLombaKontributor = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (!userData || !userData.id) {
        setError("User ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        // Fetch competitions created by the user
        const competitionResponse = await axios.get(
          `http://localhost:8000/api/competition`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Filter competitions by user ID
        const userCompetitions = competitionResponse.data.data.filter(
          (competition) => competition.creator_id === userData.id
        );

        setCompetitions(userCompetitions);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Failed to load data.");
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Wrapper>
      {competitions.map((competition) => {
        const competitionImage = competition.image
          ? `http://localhost:8000/storage/${competition.image}`
          : "/logo.jpg"; // Default image if no image provided

        return (
          <Card key={competition.id}>
            <CardImage
              src={competitionImage}
              alt={competition.name || "Competition"}
            />
            <CardContent>
              <CardHeader>
                <CardStatus>{competition.status.toUpperCase()}</CardStatus>
                <CardJenjang>{competition.jenjang}</CardJenjang>
              </CardHeader>
              <CardTitle>{competition.name}</CardTitle>
              <CardDescription>{competition.description}</CardDescription>
              <CardDate>
                {new Date(competition.start_date).toLocaleDateString()} -{" "}
                {new Date(competition.end_date).toLocaleDateString()}
              </CardDate>
            </CardContent>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default DaftarLombaKontributor;
