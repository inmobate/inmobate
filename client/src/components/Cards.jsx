import styled from "styled-components";

import { Link } from "react-router-dom";

import { useGetPropertiesQuery } from "../app/api/properties";

import Card from "../components/Card";

const Cards = () => {
  const { data, error, isLoading } = useGetPropertiesQuery();

  return (
    <Container>
      {data &&
        data?.map((el) => (
          <Link to={`/detail/${el.id}`} key={el.id}>
            <Card key={el.id} property={el} />
          </Link>
        ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`;

export default Cards;
