import { BottomBar, Container, Content, FlexCenter } from "./styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Step9 = () => {
  const {
    type,
    roomType,
    description,
    title,
    location,
    travellers,
    rooms,
    beds,
    bathrooms,
    price,
  } = useSelector((state) => state.propertyToAdd);

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>Solo queda confirmar los Datos</h2>
          <div>
            <div>
              Estilo de la propiedad: <strong>{type}</strong>
            </div>
            <div>
              Tipo de hospedaje: <strong>{roomType}</strong>
            </div>
            <div>
              Ubicacion: <strong>{location.street}</strong>
            </div>
            <div>
              Viajeros: <strong>{travellers}</strong>
            </div>
            <div>
              Habitaciones: <strong>{rooms}</strong>
            </div>
            <div>
              Cantidad de camas: <strong>{beds}</strong>
            </div>
            <div>
              Cantidad de baños: <strong>{bathrooms}</strong>
            </div>
            <div>
              Titulo: <strong>{title}</strong>
            </div>
            <div>
              Descripcion: <strong>{description}</strong>
            </div>
            <div>
              Precio por noche: <strong>{price}</strong>
            </div>
          </div>
        </FlexCenter>
        <div>
          <video
            src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
            preload="auto"
            width={400}
            playsInline
            autoPlay
          ></video>
        </div>
      </Content>
      <BottomBar>
        <button onClick={() => navigate("/addproperty/step8")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step9")}>
          Confirmar
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step9;
