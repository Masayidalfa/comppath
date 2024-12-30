/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Message,
  Container,
  Title,
  ActivitiesGrid,
  ActivityCard,
  Thumbnail,
  Details,
} from "../../../components/utils/constants/Kegiatan.styled";

const Kegiatan = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (!userData || !userData.id) {
        setError("User ID tidak ditemukan. Silakan login kembali.");
        setLoading(false);
        return;
      }

      try {
        // Fetch data pendaftaran berdasarkan user ID
        const registrationResponse = await axios.get(
          `http://localhost:8000/api/registration`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const registrations = registrationResponse.data.data.filter(
          (registration) => registration.user_id === userData.id
        );

        // Ambil detail kompetisi untuk setiap pendaftaran
        const activitiesData = await Promise.all(
          registrations.map(async (registration) => {
            const competitionResponse = await axios.get(
              `http://localhost:8000/api/competition/${registration.competition_id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            const competition = competitionResponse.data.data;

            return {
              id: registration.id,
              competitionName: competition.name,
              registrationDate: registration.registration_date,
              status: registration.status,
              requirementsFile: registration.requirements_file,
              paymentProof: registration.payment_proof,
              startDate: competition.start_date,
              endDate: competition.end_date,
              image: competition.image,
            };
          })
        );

        setActivities(activitiesData);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Gagal memuat data.");
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) return <Message>Loading...</Message>;
  if (error) return <Message>Error: {error}</Message>;

  return (
    <Container>
      <Title>Daftar Kegiatan</Title>
      <ActivitiesGrid>
        {activities.map((activity) => (
          <ActivityCard key={activity.id}>
            <Thumbnail
              src={
                activity.image
                  ? `http://localhost:8000/storage/${activity.image}`
                  : "/logo.jpg"
              }
              alt={activity.competitionName}
            />
            <Details>
              <h3>{activity.competitionName}</h3>
              <p>Tanggal Pendaftaran: {activity.registrationDate}</p>
              <p>Status: {activity.status}</p>
              <p>File Persyaratan: {activity.requirementsFile || "Tidak Ada"}</p>
              <p>Bukti Pembayaran: {activity.paymentProof || "Tidak Ada"}</p>
              <p>
                Waktu Lomba: {activity.startDate} - {activity.endDate}
              </p>
            </Details>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </Container>
  );
};

export default Kegiatan;
