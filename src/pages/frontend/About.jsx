/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Section,
  HeaderText,
  SubHeaderText,
  ImageSection,
  Divider,
  AboutTitle,
  AboutText,
  AboutImage,
} from "../../components/utils/constants/AboutComppath.styled";

const About = () => {
  return (
    <Container>
      {/* Bagian Atas */}
      <Section>
        <div>
          <HeaderText>
            <div>TEMUKAN LOMBA</div>
            <div>IMPIANMU DENGAN</div>
            <div>SATU KLIK</div>
          </HeaderText>
          <SubHeaderText>
            “Lomba yang Pas, Untuk Kamu yang Unik. <br />
            Jelajahi Ribuan Lomba di Comppath.”
          </SubHeaderText>
        </div>
        <ImageSection>
          <img src="/piala.png" alt="Trophy Icon" />
        </ImageSection>
      </Section>

      {/* Garis Pemisah */}
      <Divider />

      {/* Bagian Tentang */}
      <Section bgColor="#e6f7ff">
        <AboutImage>
          <img src="/kompas.png" alt="Compass Icon" />
        </AboutImage>
        <div>
          <AboutTitle>Tentang CompPath !!!</AboutTitle>
          <AboutText>
          Comppath merupakan sebuah website pencari lomba yang dapat membantu semua kalangan di Indonesia mulai dari SD, SMP, SMA, Mahasiswa, hingga masyarakat umum dalam menemukan lomba yang sesuai dengan minat dan bakat mereka.
          </AboutText>
        </div>
      </Section>
    </Container>
  );
};

export default About;
