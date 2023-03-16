import styled from "styled-components";

import { useParams } from "react-router-dom";

import { useGetPropertiesIdQuery } from "../app/api/propertiesId";

import Navbar from "../components/Navbar";

const Detail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetPropertiesIdQuery(id);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <Main>
        <div>
          <Tittle>Habitación de hotel en AAR</Tittle>
          <Detail1>
            <div>⭐️⭐️⭐️⭐️</div>
            <div>Pichincha, Ecuador</div>
          </Detail1>
          <Gallery>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-48287927/original/ecae28bb-ac88-4f3d-83cd-96ba6c50c997.jpeg?im_w=720"
              alt=""
              width="300px"
            />
            <Images>
              <img src="" alt="Imagen 2" />
              <img src="" alt="Imagen 3" />
              <img src="" alt="Imagen 4" />
              <img src="" alt="Imagen 5" />
            </Images>
          </Gallery>
          <Details>
            <div>House</div>
            <div>Habitacion:5</div>
            <div>Baños: 1</div>
          </Details>

          {/* <div>{data.tittle}</div>
        <div>{data.rating}</div>
        <div>{(data.city, data.country)}</div>
        <div>{data.picture}</div>
        <div>{data.type}</div> */}
        </div>
      </Main>

      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Tittle = styled.div`
  display: flex;
`;

const Detail1 = styled.div`
  display: flex;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Details = styled.div`
  display: flex;
`;

const Footer = styled.footer``;

export default Detail;
