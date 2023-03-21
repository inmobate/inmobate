import styled from "styled-components";

import { useParams } from "react-router-dom";

import { useGetPropertyByIdQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Footerbar from "../components/Footerbar";

const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPropertyByIdQuery(id);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Property>
          <Title>{data.title}</Title>
          <div>
            <span>{data.rating.length} - </span>
            <span>{data.city}, </span>
            <span> {data.country} - </span>
            <span>{data.direccion}</span>
          </div>

          <Gallery>
            <MainImage src={data.photo} alt="imagen" />
            <Images>
              <Image src={data.picture[0]} alt="imagen" />
              <Image src={data.picture[1]} alt="imagen" />
              <Image src={data.picture[2]} alt="imagen" />
              <Image src={data.picture[3]} alt="imagen" />
            </Images>
          </Gallery>
          <div>Alojamiento {data.type}.</div>
          <div>
            {data.habitacion} dormitorios,{data.banos} baños
          </div>
        </Property>
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.header``;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Property = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 2em;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 1em;
  overflow: hidden;
`;

const MainImage = styled.img`
  width: 610px;
  height: 610px;
`;

const Images = styled.div`
  width: 610px;
  min-height: 610px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  object-fit: fill;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Detail;
