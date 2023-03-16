import styled from "styled-components";

const Card = ({ property }) => {
  const { photo, city, country, price } = property;
  return (
    <Container>
      <img src={photo} alt="" width="300px" height="300px" />
      <div>{city}</div>
      <div>{country}</div>
      <div>{price}</div>
    </Container>
  );
};

const Container = styled.div``;

export default Card;
