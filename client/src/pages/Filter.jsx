import styled from "styled-components";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useGetPropertiesQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";
import Filterbar from "../components/Filterbar";

const Filter = () => {
  const [filterProperties, setFilterProperties] = useState();

  const { data, error, isLoading } = useGetPropertiesQuery();

  const { filter } = useParams();

  useEffect(() => {
    const properties = data.filter((p) => p.type == filter);
    setFilterProperties(properties);
  }, [filter]);

  return (
    <Container>
      <Navbar />
      <Filterbar />
      <Cards properties={filterProperties} />
    </Container>
  );
};

const Container = styled.div``;

export default Filter;
