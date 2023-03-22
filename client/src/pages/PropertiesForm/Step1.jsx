import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setType } from "../../app/slices/propertyToAdd";
import { types } from "./db";
import {
  BottomBar,
  Container,
  Content,
  FlexCenter,
  FlexGrap,
  Type,
  Button,
} from "./styles";

const Step1 = () => {
  const { type } = useSelector((state) => state.propertyToAdd);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>¿Cuál de estas opciones describe mejor tu espacio?</h2>
          <FlexGrap>
            {types.map((el) => (
              <Type
                key={el.id}
                onClick={() => dispatch(setType(el.type))}
                style={type === el.type ? { border: "1px solid grey" } : null}
              >
                {el.type}
              </Type>
            ))}
          </FlexGrap>
        </FlexCenter>
      </Content>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty")}>Atras</Button>
        <Button onClick={() => navigate("/addproperty/step2")} disabled={!type}>
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step1;
