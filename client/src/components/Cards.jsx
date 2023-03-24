import styled from "styled-components";

import { useState } from "react";

import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import { useGetPropertiesQuery } from "../app/api/properties";

import Card from "../components/Card";

const Cards = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!properties) {
    const {
      data: properties,
      error,
      isLoading,
    } = useGetPropertiesQuery(setCurrentPage);

    const totalProperties = (properties) => {
      if (properties) {
        return properties.total;
      }
    };

    return (
      <InfiniteScroll
        dataLength={totalProperties}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Container>
          {properties &&
            properties.properties?.map((el) => (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Card key={el.id} property={el} />
              </Link>
            ))}
        </Container>
      </InfiniteScroll>
    );
  }

  return (
    <>
      <Container>
        {properties &&
          properties?.map((el) => (
            <Link to={`/detail/${el.id}`} key={el.id}>
              <Card key={el.id} property={el} />
            </Link>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export default Cards;
