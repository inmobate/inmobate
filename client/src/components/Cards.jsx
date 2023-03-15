import styled from "styled-components";

import { Link } from "react-router-dom";

import { useGetCharactersQuery } from "../app/api/experimental";

import Card from "../components/Card";

const Cards = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <Container>
      {data &&
        data?.results.map((el) => (
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
