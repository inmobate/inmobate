import styled from "styled-components";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Filterbar = () => {
  const navigate = useNavigate();

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
    <Contaiener>
      <button onClick={() => handlerAll("home")}>Todos los alojamientos</button>
      <button onClick={() => handlerFilter("house")} location="house">
        Vivienda
      </button>
      <button onClick={() => handlerFilter("department")} location="department">
        Departamento
      </button>
      <button onClick={() => handlerFilter("hotel")} location="hotel">
        Hotel
      </button>
      <button onClick={() => handlerFilter("guesthouse")} location="guesthouse">
        Hostal
      </button>

      <button onClick={toggleMenu} className="icono-menu">
        Filtros
      </button>
      {menuOpen && (
        <div style={{ position: "relative" }}>
          <ul className="lista-menu">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </Contaiener>
  );
};

const Contaiener = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  background: #ffff;
`;

const Button = styled.button``;

export default Filterbar;
