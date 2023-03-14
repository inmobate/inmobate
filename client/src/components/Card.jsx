import styled from "styled-components";

const Card = ({ property }) => {
  const { name } = property;
  return (
    <div>
      Card
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
