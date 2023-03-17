import { servicesDb } from "./db";
import { useNavigate } from "react-router-dom";
import { setServices } from "../../app/slices/propertyToAdd";
import { BottomBar, Container, ContentColum, FlexGrap, Type } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Step5 = () => {
  const { services } = useSelector((state) => state.propertyToAdd);

  const storage = JSON.parse(
    localStorage.getItem("persist:root")
  ).propertyToAdd;
  const storageServices = services || JSON.parse(storage).services;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(service) {
    if (services.includes(service)) {
      dispatch(setServices(storageServices.filter((el) => el !== service)));
    } else {
      dispatch(setServices([...storageServices, service]));
    }
  }

  console.log(JSON.parse(storage).services);
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
                  storageServices.includes(el.service)
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
