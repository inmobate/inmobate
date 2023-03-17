import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setBathrooms,
  setBeds,
  setRooms,
  setTravellers,
} from "../../app/slices/propertyToAdd";
import { BottomBar, Container, ContentColum } from "./styles";

const Step4 = () => {
  const { travellers, rooms, bathrooms, beds } = useSelector(
    (state) => state.propertyToAdd
  );

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageTravellers = travellers || JSON.parse(storage).travellers;
  const storageRooms = rooms || JSON.parse(storage).rooms;
  const storageBathrooms = bathrooms || JSON.parse(storage).bathrooms;
  const storageBeds = beds || JSON.parse(storage).beds;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ContentColum>
        <h2>Agregá algunos datos básicos sobre tu espacio</h2>
        <p>
          Después vas a poder agregar más información, como los tipos de cama.
        </p>
        <div>
          <div>
            Viajeros
            <div>
              <button
                disabled={storageTravellers <= 0}
                onClick={() => {
                  dispatch(setTravellers(storageTravellers - 1));
                }}
              >
                -
              </button>
              <span>{storageTravellers}</span>
              <button
                onClick={() => {
                  dispatch(setTravellers(storageTravellers + 1));
                }}
              >
                +
              </button>
            </div>
          </div>
          <div>
            Dormitorios
            <div>
              <button
                disabled={storageRooms <= 0}
                onClick={() => {
                  dispatch(setRooms(storageRooms - 1));
                }}
              >
                -
              </button>
              <span>{storageRooms}</span>
              <button
                onClick={() => {
                  dispatch(setRooms(storageRooms + 1));
                }}
              >
                +
              </button>
            </div>
          </div>
          <div>
            Camas
            <div>
              <button
                disabled={storageBeds <= 0}
                onClick={() => {
                  dispatch(setBeds(storageBeds - 1));
                }}
              >
                -
              </button>
              <span>{storageBeds}</span>
              <button
                onClick={() => {
                  dispatch(setBeds(storageBeds + 1));
                }}
              >
                +
              </button>
            </div>
          </div>
          <div>
            Baños
            <div>
              <button
                disabled={storageBathrooms <= 0}
                onClick={() => {
                  dispatch(setBathrooms(storageBathrooms - 1));
                }}
              >
                -
              </button>
              <span>{storageBathrooms}</span>
              <button
                onClick={() => {
                  dispatch(setBathrooms(storageBathrooms + 1));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </ContentColum>
      <BottomBar>
        <button onClick={() => navigate("/addproperty/step3")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step5")}>
          Siguiente
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step4;
