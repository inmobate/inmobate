import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setBathroomsAction,
  setBedsAction,
  setRoomsAction,
  setTravellersAction,
} from "../../app/slices/propertyToAdd/action";
import { BottomBar, Container, ContentColum } from "./styles";

const Step4 = () => {
  const { travellers, rooms, bathrooms, beds } = useSelector((state) => state.propertyToAdd);

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
                  dispatch(setTravellersAction(travellers - 1));
                }}
              >
                -
              </button>
              <span>{travellers}</span>
              <button
                onClick={() => {
                  dispatch(setTravellersAction(travellers + 1));
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
                  dispatch(setRoomsAction(rooms - 1));
                }}
              >
                -
              </button>
              <span>{rooms}</span>
              <button
                onClick={() => {
                  dispatch(setRoomsAction(rooms + 1));
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
                  dispatch(setBedsAction(beds - 1));
                }}
              >
                -
              </button>
              <span>{beds}</span>
              <button
                onClick={() => {
                  dispatch(setBedsAction(beds + 1));
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
                  dispatch(setBathroomsAction(bathrooms - 1));
                }}
              >
                -
              </button>
              <span>{bathrooms}</span>
              <button
                onClick={() => {
                  dispatch(setBathroomsAction(bathrooms + 1));
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
        <button onClick={() => navigate("/addproperty/step5")}>Siguiente</button>
      </BottomBar>
    </Container>
  );
};

export default Step4;
