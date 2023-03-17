import styled from "styled-components";

const Card = ({ property }) => {
  const { photo, city, country, price, rating } = property;
  return (
    <Container>
      <Image src={photo} alt="" width="250" height="250px" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>
            {city}, {country}
          </div>
          <div>${price}</div>
        </div>
        <div>{rating.length}</div>
      </div>
    </Container>
  );
};

const Container = styled.div``;

const Image = styled.img`
  border-radius: 1em;
`;

export default Card;
