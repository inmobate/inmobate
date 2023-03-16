import { servicesDb } from "./db";
import { useNavigate } from "react-router-dom";
import { setServicesAction } from "../../app/slices/propertyToAdd/action";
import { BottomBar, Container, ContentColum, FlexGrap, Type } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Step5 = () => {
  const propertyToAddValue = useSelector((state) => state.propertyToAdd);
  const { services } = propertyToAddValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(service) {
    dispatch(setServicesAction([...services, service]));
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
        <button onClick={() => navigate("/addproperty/step4")}>Atras</button>
        <button onClick={() => navigate("/addproperty/step6")}>Siguente</button>
      </BottomBar>
    </Container>
  );
};

export default Step5;
