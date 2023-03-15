import styled from "styled-components";

const Data = [
  {
    id: 1,
    title: "Habitación de hotel en AAR",
    photo:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48287927/original/ecae28bb-ac88-4f3d-83cd-96ba6c50c997.jpeg?im_w=720",
    price: 21600,
    detail: "Exclusiva Suite Boutique con Balcón en San Telmo",
  },
];

const Card = ({ property }) => {
  const {
    image /* photo */,
    name /* title */,
    gender /* detail */,
    id /* price */,
  } = property;
  return (
    <Container>
      <img src={image /* photo */} alt="" />
      <div>{name /* title */}</div>
      <div>{gender /* detail */}</div>
      <div>${id /*price  */}</div>
    </Container>
  );
};

const Container = styled.div``;

export default Card;
