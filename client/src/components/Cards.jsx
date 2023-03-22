import styled from "styled-components";

import { Link } from "react-router-dom";

import Card from "../components/Card";

const Cards = ({ properties }) => {
  return (
    <>
      <Container>
        {properties &&
          properties?.map((el) => (
            <Link to={`/detail/${el.id}`} key={el.id}>
              <Card key={el.id} property={el} />
            </Link>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 2em;
  justify-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
`;

export default Cards;
