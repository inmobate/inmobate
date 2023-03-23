import styled from "styled-components";

import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import { useGetPropertiesQuery } from "../app/api/properties";

import Card from "../components/Card";

const Cards = ({ properties }) => {
  if (!properties) {
    const {
      data: properties,
      error,
      isLoading,
      fetchNextPage,
      hasNextPage,
    } = useGetPropertiesQuery();
    console.log(hasNextPage);
    const fetchMoreData = () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    };

    return (
      // <InfiniteScroll
      //   dataLength={properties?.pages.length || 0}
      //   next={fetchMoreData}
      //   hasMore={!!hasNextPage}
      //   loader={<h4>Loading...</h4>}
      // >
      <Container>
        {properties &&
          properties.properties?.map((el) => (
            <Link to={`/detail/${el.id}`} key={el.id}>
              <Card key={el.id} property={el} />
            </Link>
          ))}
      </Container>
      //{" "}
      // </InfiniteScroll>
    );
  }
  // const fetchMoreData = () => {};

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
