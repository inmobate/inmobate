import styled from "styled-components";

import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useGetPropertiesQuery } from "../app/api/properties";

const Filterbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const refMenu = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [min, setMin] = useState("");

  const [max, setMax] = useState("");

  const [property, setProperty] = useState("");

  const { data, error, isLoading } = useGetPropertiesQuery();

  const handlerAll = (location) => {
    if (location) navigate(`/home`);
  };

  const handlerFilter = (location) => {
    if (location) navigate(`/filter/${location}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlerConbine = () => {
    // const filters =
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
      <button onClick={toggleMenu}>Filtros</button>
      {menuOpen && (
        <FilterMenu>
          <Ul>
            <Close onClick={toggleMenu}>X</Close>
            <li>
              <div>Rango de precios:</div>
              <div>
                <Input
                  type="number"
                  min="0"
                  placeholder="mínimo"
                  onChange={(price) => {
                    setMin(price.target.value);
                  }}
                />
                <Input
                  type="number"
                  min="0"
                  placeholder="máximo"
                  onChange={(price) => {
                    setMax(price.target.value);
                  }}
                />
              </div>
            </li>
            <li>
              <div>Tipo de propiedad:</div>
              <div>
                <button>Vivienda</button>
                <button>Departamento</button>
                <button>Hotel</button>
                <button>Hostal</button>
              </div>
            </li>
            <ButtonFilter onClick={() => {}}>Filtrar</ButtonFilter>
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
  background: lightgray;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 1em;
`;

const Close = styled.div`
  padding: 1em;
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 100em;
  background: red;

  &:hover {
    padding: 1em;
    background: blue;
  }
`;

const Input = styled.input`
  padding: 1em;
`;

const ButtonFilter = styled.div`
  padding: 1em;
  background: #ffff;
`;

export default Filterbar;
