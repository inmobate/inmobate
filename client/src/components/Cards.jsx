import styled from "styled-components";

import { Link } from "react-router-dom";

import Card from "../components/Card";

const Cards = ({ properties }) => {

  return (
    <Container>
      {properties &&
        properties?.map((el) => (
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
  gap: 2em;
`;

export default Cards;
