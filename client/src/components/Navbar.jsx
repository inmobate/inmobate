import styled from "styled-components";

import { Link } from "react-router-dom";

import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <Nav>
      <Elements>
        <Brand>INMOVATE</Brand>
        <Searchbar />
        <Items>
          <Link to="/add">
            <Item>Publica</Item>
          </Link>
          <Link>
            <Item>Login</Item>
          </Link>
        </Items>
      </Elements>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #ffff;
`;

const Elements = styled.div`
  padding: 2em 1em;
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div``;

const Items = styled.div`
  display: flex;
  gap: 1em;
`;

const Item = styled.div``;

export default Navbar;
