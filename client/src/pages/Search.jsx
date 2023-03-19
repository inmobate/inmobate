import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { properties, useGetPropertiesQuery } from "../app/api/properties";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

const Search = () => {
  const [filterProperties, setFilterProperties] = useState();
  const { data, error, isLoading } = useGetPropertiesQuery();
  const { filter } = useParams();

  useEffect(() => {
    const properties = data.filter((p) => p.city == filter);
    setFilterProperties(properties);
  }, [filter]);

  return (
    <Conteiner>
      <Navbar />
      <Title>Resultados para {filter}:</Title>
      <Cards properties={filterProperties} />
    </Conteiner>
  );
};

const Conteiner = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h2`
  margin: 3rem 0;
`;

export default Search;
