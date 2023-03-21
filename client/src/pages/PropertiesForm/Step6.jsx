import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage } from "../../app/slices/propertyToAdd";
import { BottomBar, Container, Content, ContentColum } from "./styles";

const Step6 = () => {
  const { images } = useSelector((state) => state.propertyToAdd);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageImage = images || JSON.parse(storage).images;

  return (
    <Container>
      <Content>
        <input
          type="text"
          value={storageImage}
          onChange={(e) => dispatch(setImage(e.target.value))}
        />
      </Content>

      <BottomBar>
        <button onClick={() => navigate("/addproperty/step5")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step7")}>
          Siguiente
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step6;
