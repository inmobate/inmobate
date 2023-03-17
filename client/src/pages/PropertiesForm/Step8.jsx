import { BottomBar, Container, ContentColum, FlexGrap, Type } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPrice } from "../../app/slices/propertyToAdd";

const Step8 = () => {
  const { price } = useSelector((state) => state.propertyToAdd);

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storagePrice = price || JSON.parse(storage).price;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ContentColum>
        <h2>Ahora, fijá tu precio</h2>
        <p>Podés cambiarlo cuando quieras.</p>
        <div>
          <button onClick={() => dispatch(setPrice(price - 100))}>-</button>
          <input type="number" value={storagePrice} />
          <button onClick={() => dispatch(setPrice(price + 100))}>+</button>
        </div>
        <p>por noche</p>
      </ContentColum>
      <BottomBar>
        <button onClick={() => navigate("/addproperty/step7")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step9")}>Siguente</button>
      </BottomBar>
    </Container>
  );
};

export default Step8;
