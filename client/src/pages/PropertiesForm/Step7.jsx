import { BottomBar, Container, Content, ContentColum } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setTitle } from "../../app/slices/propertyToAdd";
import { useNavigate } from "react-router-dom";

const Step7 = () => {
  const { type, description, title } = useSelector(
    (state) => state.propertyToAdd
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ContentColum>
        <h2>Ahora, ponele un título a tu {type}</h2>
        <p>
          Los títulos cortos funcionan mejor. No te preocupes, podés modificarlo
          más adelante.
        </p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            dispatch(setTitle(e.target.value));
          }}
        />
        <h2>Y tambien una descripcion</h2>
        <p>Contá qué hace que tu espacio sea especial.</p>
        <textarea
          onChange={(e) => {
            dispatch(setDescription(e.target.value));
          }}
          cols="30"
          rows="10"
          value={description}
        ></textarea>
      </ContentColum>

      <BottomBar>
        <button onClick={() => navigate("/addproperty/step6")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step8")}>
          Siguiente
        </button>
      </BottomBar>
    </Container>
  );
};

export default Step7;
