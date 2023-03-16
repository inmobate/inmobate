import styled from "styled-components";

import { useParams } from "react-router-dom";

import { useGetPropertiesIdQuery } from "../app/api/propertiesId";

import Navbar from "../components/Navbar";

import Footerbar from "../components/Footerbar";

const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPropertiesIdQuery(id);
  console.log(data);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main></Main>

      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;

export default Detail;
