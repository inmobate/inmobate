import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocationAction } from "../../app/slices/propertyToAdd/action";
import { BottomBar, Container, ContentColum, Form } from "./styles";

const Step3 = () => {
  const propertyToAddValue = useSelector((state) => state.propertyToAdd);
  const [location, setLocation] = useState(propertyToAddValue.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setLocation({
      ...location,
      [e.name]: e.value,
    });
  }

  function handleNext(location) {
    dispatch(setLocationAction(location));
    navigate("/addproperty/step4");
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
            value={location.street}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="floor"
            placeholder="piso/dpto"
            value={location.floor}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="city"
            placeholder="ciudad"
            value={location.city}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="state"
            placeholder="provincia/estado"
            value={location.state}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="country"
            placeholder="pais o region"
            value={location.country}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="number"
            name="postalCode"
            placeholder="codigo postal"
            value={location.postalCode}
            onChange={(e) => handleChange(e.target)}
          />
        </Form>
      </ContentColum>

      <BottomBar>
        <button onClick={() => navigate("/addproperty/step2")}>Atras</button>

        <button onClick={() => handleNext(location)}>Siguente</button>
      </BottomBar>
    </Container>
  );
};

export default Step3;
