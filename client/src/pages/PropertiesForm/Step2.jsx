import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTypeRoom } from "../../app/slices/propertyToAdd";
import { BottomBar, Container, Content, ContentColum, Section } from "./styles";

const Step2 = () => {
  const { roomType } = useSelector((state) => state.propertyToAdd);

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageRoomTipe = roomType || JSON.parse(storage).roomType;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <ContentColum>
        <h2>¿Qué tipo de alojamiento ofrecés a los huéspedes?</h2>
        <div>
          <Section
            onClick={() => dispatch(setTypeRoom("alojamiento entero"))}
            style={
              storageRoomTipe === "alojamiento entero"
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
            onClick={() => dispatch(setTypeRoom("habitacion privada"))}
            style={
              storageRoomTipe === "habitacion privada"
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
            onClick={() => dispatch(setTypeRoom("habitacion compartida"))}
            style={
              storageRoomTipe === "habitacion compartida"
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
        <button onClick={() => navigate("/addproperty/step3")}>
          Siguiente
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step2;
