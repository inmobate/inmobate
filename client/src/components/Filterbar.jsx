import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Filterbar = () => {
  const navigate = useNavigate();

  const handlerAll = (location) => {
    if (location) navigate(`/home`);
  };

  const handlerFilter = (location) => {
    if (location) navigate(`/filter/${location}`);
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

export default Filterbar;
