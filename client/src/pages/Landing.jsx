import styled from "styled-components";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <h1>Landing</h1>
      <Link to="/home">Ir a home</Link>
    </Container>
  );
};

const Container = styled.div``;

export default Landing;
