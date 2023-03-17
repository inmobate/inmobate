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

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageType = type || JSON.parse(storage).type;
  const storageRoomType = roomType || JSON.parse(storage).roomType;
  const storageDescription = description || JSON.parse(storage).description;
  const storageTitle = title || JSON.parse(storage).title;
  const storageLocation = location || JSON.parse(storage).location;
  const storageTravellers = travellers || JSON.parse(storage).travellers;
  const storageRooms = rooms || JSON.parse(storage).rooms;
  const storageBeds = beds || JSON.parse(storage).beds;
  const storageBathrooms = bathrooms || JSON.parse(storage).bathrooms;
  const storagePrice = price || JSON.parse(storage).price;

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>Solo queda confirmar los Datos</h2>
          <div>
            <div>
              Estilo de la propiedad: <strong>{storageType}</strong>
            </div>
            <div>
              Tipo de hospedaje: <strong>{storageRoomType}</strong>
            </div>
            <div>
              Ubicacion: <strong>{storageLocation.street}</strong>
            </div>
            <div>
              Viajeros: <strong>{storageTravellers}</strong>
            </div>
            <div>
              Habitaciones: <strong>{storageRooms}</strong>
            </div>
            <div>
              Cantidad de camas: <strong>{storageBeds}</strong>
            </div>
            <div>
              Cantidad de baños: <strong>{storageBathrooms}</strong>
            </div>
            <div>
              Titulo: <strong>{storageTitle}</strong>
            </div>
            <div>
              Descripcion: <strong>{storageDescription}</strong>
            </div>
            <div>
              Precio por noche: <strong>{storagePrice}</strong>
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
