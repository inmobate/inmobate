import styled from "styled-components";

const Card = ({ property }) => {
  const { pictures, city, country, price } = property;

  return (
    <>
      <Container>
        <Image src={pictures[0]} alt="imagen" />
        <div>
          <div>
            <div>
              {city}, {country}
            </div>
            <div>${price}</div>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div``;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 1em;
  object-fit: cover;
`;

export default Card;
