import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTypeAction } from "../../app/slices/propertyToAdd/action";
import { types } from "./db";
import {
  BottomBar,
  Container,
  Content,
  FlexCenter,
  FlexGrap,
  Type,
} from "./styles";

const Step1 = () => {
  const propertyToAddValue = useSelector((state) => state.propertyToAdd);
  const [type, setType] = useState(propertyToAddValue.type);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  function handleNext(type) {
    navigate("/addproperty/step2");
    dispatch(setTypeAction(type));
  }

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>¿Cuál de estas opciones describe mejor tu espacio?</h2>
          <FlexGrap>
            {types.map((el) => (
              <Type
                key={el.id}
                onClick={() => setType(el.type)}
                style={type === el.type ? { border: "1px solid grey" } : null}
              >
                {el.type}
              </Type>
            ))}
          </FlexGrap>
        </FlexCenter>
      </Content>

      <BottomBar>
        <button onClick={() => navigate("/addproperty")}>Atras</button>
        <span>{type}</span>
        <button onClick={() => handleNext(type)}>Siguente</button>
      </BottomBar>
    </Container>
  );
};

export default Step1;
