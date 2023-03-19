import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../../app/slices/propertyToAdd";
import { BottomBar, Container, ContentColum, Form } from "./styles";

const Step3 = () => {
  const { location } = useSelector((state) => state.propertyToAdd);

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageLocation = Object.keys(location).length
    ? location
    : JSON.parse(storage).location;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    dispatch(
      setLocation({
        ...location,
        [e.name]: e.value,
      })
    );
  }

  return (
    <Container>
      <ContentColum>
        <h2>¿Dónde queda tu espacio?</h2>
        <p>
          Solo vamos a compartir tu dirección con los huéspedes luego de que
          hagan la reserva.
        </p>
        <Form>
          <input
            type="text"
            name="street"
            placeholder="calle"
            value={storageLocation.street}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="floor"
            placeholder="piso/dpto"
            value={storageLocation.floor}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="city"
            placeholder="ciudad"
            value={storageLocation.city}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="state"
            placeholder="provincia/estado"
            value={storageLocation.state}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="country"
            placeholder="pais o region"
            value={storageLocation.country}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="number"
            name="postalCode"
            placeholder="codigo postal"
            value={storageLocation.postalCode}
            onChange={(e) => handleChange(e.target)}
          />
        </Form>
      </ContentColum>

      <BottomBar>
        <button onClick={() => navigate("/addproperty/step2")}>Atras</button>

        <button onClick={() => navigate("/addproperty/step4")}>Siguente</button>
      </BottomBar>
    </Container>
  );
};

export default Step3;
