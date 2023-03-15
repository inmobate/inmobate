import styled from "styled-components";

import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <Nav>
      <Elements>
        <Brand>INMOVATE</Brand>
        <Searchbar />
        <Items>
          <div>Publica</div>
          <div>Login</div>
        </Items>
      </Elements>
    </Nav>
  );
};

const Nav = styled.nav`
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Elements = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div``;

const Items = styled.div`
  display: flex;
  gap: 1em;
`;

export default Navbar;
