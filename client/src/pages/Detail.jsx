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
      <main>
        <div>Habitación de hotel en AAR</div>
        <div>⭐️⭐️⭐️⭐️</div>
        <div>Pichincha, Ecuador</div>
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-48287927/original/ecae28bb-ac88-4f3d-83cd-96ba6c50c997.jpeg?im_w=720"
            alt=""
          />
          <img src="" alt="Imagen 2" />
          <img src="" alt="Imagen 3" />
          <img src="" alt="Imagen 4" />
          <img src="" alt="Imagen 5" />
        </div>
        <div>House</div>
        <div>Habitacion:5</div>
        <div>Baños: 1</div>

        {/* <div>{data.tittle}</div>
        <div>{data.rating}</div>
        <div>{(data.city, data.country)}</div>
        <div>{data.picture}</div>
        <div>{data.type}</div> */}
      </main>
    </Container>
  );
};

export const Container = styled.div``;

export default Detail;
