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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </AboutText>
        </div>
      </Section>
    </Container>
  );
};

export default About;
