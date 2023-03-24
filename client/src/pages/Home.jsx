import styled from "styled-components";

import { useGetPropertiesQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Filterbar from "../components/Filterbar";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

const Home = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();

  return (
    <Container>
      <Header>
        <Navbar />
        <Filterbar />
      </Header>
      <Main>
        <Cards properties={data} />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Main = styled.main`
  height: 100%;
  padding: 1em;
`;

const Footer = styled.footer`
  display: none;
`;

export default Home;
