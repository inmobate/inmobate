import styled from "styled-components";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { properties, useGetPropertiesQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

const Search = () => {
  const [filterProperties, setFilterProperties] = useState();

  const { data, error, isLoading } = useGetPropertiesQuery();

  const { filter } = useParams();

  useEffect(() => {
    if (data && filter) {
      const normalizedFilter = filter
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const filteredProperties = data.filter((property) => {
        const normalizedCity = property.city
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return normalizedCity.toLowerCase() === normalizedFilter.toLowerCase();
      });
      setFilterProperties(filteredProperties);
    }
  }, [data, filter]);

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Cards properties={filterProperties} />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  height: 100vh;
`;

const Header = styled.header``;

const Main = styled.main`
  height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Footer = styled.footer`
  display: none;
`;

export default Search;
