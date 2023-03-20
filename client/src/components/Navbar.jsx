import styled from "styled-components";

import { Link } from "react-router-dom";

import Searchbar from "./Searchbar";
import UserButton from "./UserButton";

const Navbar = () => {
  return (
    <Nav>
      <Elements>
        <Link to="/home">
          <Brand>INMOVATE</Brand>
        </Link>
        <Searchbar />
        <Items>
          <Link to="/addProperty">
            <Item>Publica</Item>
          </Link>
          <UserButton />
        </Items>
      </Elements>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 3rem;
  background: #ffff;
`;

const Elements = styled.div`
  padding: 2em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div``;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Item = styled.div``;

export default Navbar;
