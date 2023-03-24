import styled from "styled-components";

import { useParams } from "react-router-dom";

import { useGetPropertyByIdQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Footerbar from "../components/Footerbar";

import house from "../assets/house.svg";

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
            <span>{data.city}, </span>
            <span> {data.country} - </span>
            <span>{data.direccion}</span>
          </div>
          <Gallery>
            <MainImage
              src={data.pictures[0]}
              alt="imagen"
              onError={(e) => (e.target.src = `${house}`)}
            />
            <Images>
              <Image
                src={data.pictures[1]}
                alt="imagen"
                onError={(e) => (e.target.src = `${house}`)}
              />
              <Image
                src={data.pictures[2]}
                alt="imagen"
                onError={(e) => (e.target.src = `${house}`)}
              />
              <Image
                src={data.pictures[3]}
                alt="imagen"
                onError={(e) => (e.target.src = `${house}`)}
              />
              <Image
                src={data.pictures[4]}
                alt="imagen"
                onError={(e) => (e.target.src = `${house}`)}
              />
            </Images>
          </Gallery>
          <div>Alojamiento {data.type}.</div>
          <div>
            {data.room} dormitorios,{data.bathrooms} baños
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
  object-fit: cover;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Footer = styled.footer`
  display: none;
`;

export default Detail;
