import styled from "styled-components";

import Navbar from "../components/Navbar";

import Footerbar from "../components/Footerbar";

const Reserves = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>Reservas</Main>
      <Footer>
        <Footerbar />
      </Footer>
    </>
  );
};

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer`
  display: none;
`;

export default Reserves;
