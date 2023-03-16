import { useNavigate } from "react-router-dom";
import { BottomBar, Container, Content, ContentColum } from "./styles";

const Step6 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>aca se suben las fotos(buscar mas info)</Content>
      <BottomBar>
        <button onClick={() => navigate("/addproperty/step5")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step7")}>
          Siguiente
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step6;
