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
        <div>{data.name /* title */}</div>
        <img src={data.image /* photo */} alt="" />
        <div>{data.gender /* detail */}</div>
        <div>${data.id /*price  */}</div>
      </main>
    </Container>
  );
};

export const Container = styled.div``;

export default Detail;
