import styled from "styled-components";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 200vh;
`;

export default Home;
