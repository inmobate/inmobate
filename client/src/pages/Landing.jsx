import styled from "styled-components";

import { Link } from "react-router-dom";

import Footerbar from "../components/Footerbar";

const Landing = () => {
  return (
    <Container>
      <header></header>
      <main>
        <Banner>
          <h1>INMOBATE</h1>
          <Link to="/home">Ir a home</Link>
        </Banner>
        <AboutUs>
          Nosotros
          <div>
            <div>Alfredo</div>
            <div>Henry</div>
            <div>Jonatan</div>
            <div>Javier</div>
            <div>Francisco</div>
            <div>Renzo</div>
            <div>Sebastian</div>
            <div>Agustin</div>
            <div>Fabrizio</div>
          </div>
        </AboutUs>
      </main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboutUs = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: none;
`;

export default Landing;
