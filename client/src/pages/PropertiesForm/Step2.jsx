import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTypeRoomAction } from "../../app/slices/propertyToAdd/action";
import { BottomBar, Container, Content, ContentColum, Section } from "./styles";

const Step2 = () => {
  const propertyToAddValue = useSelector((state) => state.propertyToAdd);
  const [roomType, setRoomType] = useState(propertyToAddValue.roomType);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNext(roomType) {
    dispatch(setTypeRoomAction(roomType));
    navigate("/addproperty/step3");
  }

  return (
    <Container>
      <ContentColum>
        <h2>¿Qué tipo de alojamiento ofrecés a los huéspedes?</h2>
        <div>
          <Section
            onClick={() => setRoomType("alojamiento entero")}
            style={
              roomType === "alojamiento entero"
                ? { border: "1px solid grey" }
                : null
            }
          >
            <h4>Un alojamiento entero</h4>
            <p>
              Los huéspedes disponen de un alojamiento entero a su disposición.
            </p>
          </Section>
          <Section
            onClick={() => setRoomType("habitacion privada")}
            style={
              roomType === "habitacion privada"
                ? { border: "1px solid grey" }
                : null
            }
          >
            <h4>Una habitación privada</h4>
            <p>
              Los huéspedes duermen en una habitación privada, pero es posible
              que algunas zonas se compartan con vos u otras personas.
            </p>
          </Section>
          <Section
            onClick={() => setRoomType("habitacion compartida")}
            style={
              roomType === "habitacion compartida"
                ? { border: "1px solid grey" }
                : null
            }
          >
            <h4>Una habitación compartida</h4>
            <p>
              Los huéspedes duermen en una habitación o zona común que
              posiblemente compartan con otras personas.
            </p>
          </Section>
        </div>
      </ContentColum>
      <BottomBar>
        <button onClick={() => navigate("/addproperty/step1")}>Atras</button>
        <span>{roomType}</span>
        <button onClick={() => handleNext(roomType)}>Siguiente</button>
      </BottomBar>
    </Container>
  );
};

export default Step2;
