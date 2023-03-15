import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <Container>
      <Title>404</Title>
      <Text>Page not found</Text>
      {error && <ErrorText>{error.statusText || error.message}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 2rem;
`;

const ErrorText = styled(Text)`
  color: red; // cambiar color a rojo en caso de error
`;

export default NotFound;
