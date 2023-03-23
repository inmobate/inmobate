import styled from "styled-components";

import { Link } from "react-router-dom";

import Footerbar from "../components/Footerbar";

const Landing = () => {
  return (
    <Container>
      <header></header>
      <main>
        <Banner>
          <Title onS>INMOBATE</Title>
          <Link to="/home">Alquila ya</Link>
        </Banner>
        <AboutUs id="about-us">
          <div>Nosotros</div>
          <Profiles>
            <Profile>
              <Icon></Icon>
              <div>Alfredo</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Henry</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Jonatan</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Javier</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Francisco</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Renzo</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Sebastian</div>
            </Profile>
          </Profiles>
        </AboutUs>
      </main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("../assets/background.png");
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Title = styled.div`
  font-family: "Righteous", cursive;
  font-size: 5em;
  color: #000;
`;

const AboutUs = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`;

const Profiles = styled.div`
  width: 50%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;

  > * {
    &:nth-child(1) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(4) {
      grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(5) {
      grid-area: 3 / 1 / 4 / 2;
    }
    &:nth-child(6) {
      grid-area: 3 / 2 / 4 / 3;
    }
    &:nth-child(7) {
      grid-area: 3 / 3 / 4 / 4;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Icon = styled.div`
  width: 5em;
  height: 5em;
  border: none;
  border-radius: 5em;
  background: var(--color5);
`;

const Footer = styled.footer`
  display: none;
`;

export default Landing;
