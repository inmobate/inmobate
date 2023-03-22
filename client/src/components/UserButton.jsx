import styled from "styled-components";

import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";

const UserButton = () => {
  const refMenu = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Devolver una función que elimina el manejador de eventos
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (refMenu.current && !refMenu.current.contains(event.target)) {
      setActive(false);
    }
  };

  return (
    <Button ref={refMenu}>
      <div onClick={() => setActive(!active)}>
        <HiMenu size={25} />
        <HiOutlineUserCircle size={25} />
      </div>

      <MenuHidden style={active ? null : { display: "none" }}>
        <Ul>
          <Link to="/profile">
            <Li>Cuenta</Li>
          </Link>
          <hr />
          <Li>Ayuda</Li>
          <Li>Cerrar Sesion</Li>
        </Ul>
      </MenuHidden>
    </Button>
  );
};

const Button = styled.div`
  padding: 0.5em;
  position: relative;
  border: 1px solid black;
  border-radius: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const MenuHidden = styled.div`
  position: absolute;
  top: 3em;
  right: 0em;
  z-index: 1;
`;

const Ul = styled.ul`
  min-width: 10em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  outline: 1px solid black;
  border: none;
  border-radius: 1em;
  list-style: none;
  background: #ffff;
`;

const Li = styled.li`
  &:hover {
    text-decoration: underline;
  }
`;

export default UserButton;
