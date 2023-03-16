import styled from "styled-components";

import Navbar from "../components/Navbar";

import Filters from "../components/Filters";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <Filters />
      </Header>
      <Main>
        <Cards />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Main = styled.main`
  height: 100%;
`;

const Footer = styled.footer`
  min-width: 100%;
  height: auto;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Home;