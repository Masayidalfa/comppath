/* eslint-disable no-unused-vars */
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
      {/* Link untuk membuat lomba */}
      <div className="mb-4 flex justify-end">
        <Link
          to="/create-lomba"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          + Create Competition
        </Link>
      </div>

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

               {/* Buttons for actions */}
               <div className="mt-4 flex gap-4">
                <Link
                  to={`/daftar-peserta/${competition.id}`}
                  className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Lihat Peserta
                </Link>
                <Link
                  to={`/edit-lomba/${competition.id}`}
                  className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit Lomba
                </Link>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default DaftarLombaKontributor;
