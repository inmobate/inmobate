import { BottomBar, Container, Content, FlexCenter, Type } from "./styles";
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
    services,
    images,
  } = useSelector((state) => state.propertyToAdd);

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageType = type || JSON.parse(storage).type;
  const storageRoomType = roomType || JSON.parse(storage).roomType;
  const storageDescription = description || JSON.parse(storage).description;
  const storageTitle = title || JSON.parse(storage).title;
  const storageTravellers = travellers || JSON.parse(storage).travellers;
  const storageRooms = rooms || JSON.parse(storage).rooms;
  const storageBeds = beds || JSON.parse(storage).beds;
  const storageBathrooms = bathrooms || JSON.parse(storage).bathrooms;
  const storagePrice = price || JSON.parse(storage).price;
  const storageImage = images || JSON.parse(storage).images;
  const storageLocation = Object.keys(location).length
    ? location
    : JSON.parse(storage).location;

  const navigate = useNavigate();

  function handleSubmit(property) {
    fetch("http://localhost:5000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    })
      .then((response) => {
        if (response.ok) {
          alert("Creado correctamente");
        }
        navigate("/home");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

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
            <div>
              Servicios:
              {services.map((el) => (
                <strong>
                  <Type>{el}</Type>
                </strong>
              ))}
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
        <button
          onClick={() =>
            handleSubmit({
              id: null,
              title: storageTitle,
              photo: storageImage,
              price: storagePrice,
              detail: storageDescription,
              country: storageLocation.country,
              city: storageLocation.city,
              type: storageType,
              picture: [],
              habitacion: storageRooms,
              banos: storageBathrooms,
              direccion: storageLocation.street,
              roomType: storageRoomType,
              rating: "⭐️⭐️⭐️⭐️",
              beds: storageBeds,
            })
          }
        >
          Confirmar
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step9;
