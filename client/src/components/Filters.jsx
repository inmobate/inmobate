import styled from "styled-components";

const Filters = () => {
  return (
    <Filter>
      <Elements>Filter</Elements>
    </Filter>
  );
};

const Filter = styled.div`
  background: #ffff;
`;

const Elements = styled.div`
  padding: 2em 1em;
`;

export default Filters;
