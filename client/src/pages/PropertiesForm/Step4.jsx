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
                disabled={travellers <= 0}
                onClick={() => {
                  dispatch(setTravellers(travellers - 1));
                }}
              >
                -
              </button>
              <span>{travellers}</span>
              <button
                onClick={() => {
                  dispatch(setTravellers(travellers + 1));
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
                disabled={rooms <= 0}
                onClick={() => {
                  dispatch(setRooms(rooms - 1));
                }}
              >
                -
              </button>
              <span>{rooms}</span>
              <button
                onClick={() => {
                  dispatch(setRooms(rooms + 1));
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
                disabled={beds <= 0}
                onClick={() => {
                  dispatch(setBeds(beds - 1));
                }}
              >
                -
              </button>
              <span>{beds}</span>
              <button
                onClick={() => {
                  dispatch(setBeds(beds + 1));
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
                disabled={bathrooms <= 0}
                onClick={() => {
                  dispatch(setBathrooms(bathrooms - 1));
                }}
              >
                -
              </button>
              <span>{bathrooms}</span>
              <button
                onClick={() => {
                  dispatch(setBathrooms(bathrooms + 1));
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
