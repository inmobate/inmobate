import styled from "styled-components";

import { useGetServicesQuery, useGetTypesQuery } from "../app/api/properties";

const Filters = () => {
  const {
    data: services,
    error: errorServices,
    isLoading: loadingServices,
  } = useGetServicesQuery();

  const {
    data: types,
    error: errorTypes,
    isLoading: loadingTypes,
  } = useGetTypesQuery();

  return (
    <Filter>
      <Elements>
        {services &&
          services?.map((el) => (
            <span key={el.servicio}>
              <span>{el.servicio}</span>
              <span>{el.icono}</span>
            </span>
          ))}
        {types &&
          types?.map((el) => (
            <span key={el.type}>
              <span>{el.type}</span>
            </span>
          ))}
      </Elements>
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
