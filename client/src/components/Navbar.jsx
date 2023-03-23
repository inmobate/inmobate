import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import { HiHome } from "react-icons/hi";

import Searchbar from "./Searchbar";

import UserButton from "./UserButton";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname !== "/profile";
  return (
    <>
      <Nav>
        <Elements>
          <Link to="/home">
            <Brand>
              <HiHome size={30} color={"var(--color5)"} />
              <Title>INMOBATE</Title>
            </Brand>
          </Link>
          {isHome && <Searchbar />}
          <Items>
            <Link to="/addProperty">
              <Item>Publica</Item>
            </Link>
            <UserButton />
          </Items>
        </Elements>
      </Nav>
      <hr />
    </>
  );
};

const Nav = styled.nav`
  padding: 1em;
  background: #ffff;
`;

const Elements = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Title = styled.div`
  font-family: "Righteous", cursive;
  font-size: 2em;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Item = styled.div`
  color: #000;
`;

export default Navbar;
