import React from "react";
import { Link } from "react-router-dom";
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
  CardButton,
  CardDate,
} from "../utils/constants/CompetitionCard.styled";

const CompetitionCard = ({ competition }) => {
  const competitionImage = competition.categoryImage || "/logo.jpg"; // Gambar kompetisi atau default

  return (
    <Wrapper>
      <Card>
        {/* Gambar lomba berada di samping */}
        <CardImage
          src={competitionImage}
          alt={competition.categoryName || "Default Competition"}
        />
        <CardContent>
          <CardHeader>
            <CardStatus>{competition.status.toUpperCase()}</CardStatus>
            <CardJenjang>{competition.jenjang}</CardJenjang>
          </CardHeader>
          <CardTitle>{competition.name}</CardTitle>
          <CardDescription>{competition.description}</CardDescription>
          <CardButton as={Link} to={`/detail_lomba/${competition.id}`}>
            Lihat Detail
          </CardButton>
          <CardDate>
            {new Date(competition.start_date).toLocaleDateString()} -{" "}
            {new Date(competition.end_date).toLocaleDateString()}
          </CardDate>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default CompetitionCard;
