import styled from "styled-components";

import { useGetCharactersQuery } from "../app/api/experimental";

import Card from "../components/Card";

const Home = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <div>
      <header>
        <nav>Navbar</nav>
      </header>
      <main style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {data && data.results.map((el) => <Card key={el.id} property={el} />)}
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
