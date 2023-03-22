import { servicesDb } from "./db";
import { useNavigate } from "react-router-dom";
import { setServices } from "../../app/slices/propertyToAdd";
import {
  BottomBar,
  Container,
  ContentColum,
  FlexGrap,
  Type,
  Button,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Step5 = () => {
  const { services } = useSelector((state) => state.propertyToAdd);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(service) {
    if (services.includes(service)) {
      dispatch(setServices(services.filter((el) => el !== service)));
    } else {
      dispatch(setServices([...services, service]));
    }
  }

  return (
    <Container>
      <ContentColum>
        <h2>
          Contales a los huéspedes todo lo que tu espacio tiene para ofrecer
        </h2>
        <p>Podés agregar más servicios después de publicar el anuncio.</p>
        <div>
          <FlexGrap>
            {servicesDb.map((el) => (
              <Type
                onClick={() => handleClick(el.service)}
                key={el.id}
                style={
                  services.includes(el.service)
                    ? { border: "1px solid grey" }
                    : null
                }
              >
                {el.service}
              </Type>
            ))}
          </FlexGrap>
        </div>
      </ContentColum>
      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step4")}>Atras</Button>
        <Button
          onClick={() => navigate("/addproperty/step6")}
          disabled={!services.length}
        >
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step5;
