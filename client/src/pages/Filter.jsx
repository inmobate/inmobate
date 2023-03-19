import styled from "styled-components";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useGetPropertiesQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";

import Filterbar from "../components/Filterbar";

import Footerbar from "../components/Footerbar";

const Filter = () => {
  const [filterProperties, setFilterProperties] = useState();

  const { data, error, isLoading } = useGetPropertiesQuery();

  const { filter } = useParams();

  useEffect(() => {
    const properties = data.filter((p) => p.type == filter);
    setFilterProperties(properties);
  }, [filter]);

  return (
    <>
      <header>
        <Navbar />
        <Filterbar />
      </header>
      <Main>
        <Cards properties={filterProperties} />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </>
  );
};

const Container = styled.div``;

const Main = styled.main`
  height: 100%;
`;

const Footer = styled.footer`
  min-width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Filter;
