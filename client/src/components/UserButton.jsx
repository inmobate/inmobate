import styled from "styled-components";
import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";
import { useRef, useState } from "react";

const userButton = () => {
  const refMenu = useRef(null);
  const [active, setActive] = useState(false);

  return (
    <UserButton>
      <div onClick={() => setActive(!active)}>
        <HiMenu size={25} />
        <HiOutlineUserCircle size={25} />
      </div>

      <MenuHidden style={active ? null : { display: "none" }} ref={refMenu}>
        <Ul>
          <li>viajes</li>
          <li>favoritos</li>
          <hr />
          <li>administrar propiedades</li>
          <li>cuenta</li>
          <hr />
          <li>ayuda</li>
          <li>cerrar sesion</li>
        </Ul>
      </MenuHidden>
    </UserButton>
  );
};

const UserButton = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 0.2rem;
  position: relative;
  box-shadow: 0 0 5px black;
  > div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuHidden = styled.div`
  padding: 0 1rem;
  position: absolute;
  top: 2rem;
  right: 0.3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 0 15px black;
  z-index: 1;
`;

const Ul = styled.ul`
  padding: 0.5rem;
  li {
    width: 100%;
    margin: 1rem;
    list-style: none;
    text-transform: capitalize;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export default userButton;
