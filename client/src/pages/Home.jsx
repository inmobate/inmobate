import styled from "styled-components";

import Navbar from "../components/Navbar";

import Filterbar from "../components/Filterbar";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

import { useGetPropertiesQuery } from "../app/api/properties";

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
`;

const Footer = styled.footer`
  min-width: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Home;
