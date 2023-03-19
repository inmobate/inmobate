import styled from "styled-components";

import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

const Filterbar = () => {
  const navigate = useNavigate();

  const refMenu = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handlerAll = (location) => {
    if (location) navigate(`/home`);
  };

  const handlerFilter = (location) => {
    if (location) navigate(`/filter/${location}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <Button onClick={() => handlerAll("home")}>Todos los alojamientos</Button>
      <Button onClick={() => handlerFilter("house")} location="house">
        Vivienda
      </Button>
      <Button onClick={() => handlerFilter("department")} location="department">
        Departamento
      </Button>
      <Button onClick={() => handlerFilter("hotel")} location="hotel">
        Hotel
      </Button>
      <Button onClick={() => handlerFilter("guesthouse")} location="guesthouse">
        Hostal
      </Button>

      <button onClick={toggleMenu} className="icono-menu">
        Filtros
      </button>
      {menuOpen && (
        <FilterMenu onClick={toggleMenu}>
          <Ul>
            <li>Precio</li>
            <li>Tipo de propiedad</li>
            <button>Hola</button>
          </Ul>
        </FilterMenu>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  background: #ffff;
`;

const Button = styled.button`
  cursor: pointer;
`;

const FilterMenu = styled.div`
  width: 40%;
  height: 60%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 1em;
  transform: translate(-50%, -50%);
  background: coral;
`;

const Ul = styled.ul`
  text-decoration: none;
`;

export default Filterbar;
