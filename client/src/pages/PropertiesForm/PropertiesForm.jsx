import { useNavigate } from "react-router-dom";

const PropertiesForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>Paso 1</p>
        <h2>Contanos acerca de tu alojamiento</h2>
        En este paso, te vamos a preguntar qué tipo de propiedad tenés y si los
        huéspedes van a reservar el alojamiento entero o solo una habitación.
        Hacenos saber la ubicación y cuántos huéspedes pueden quedarse en el
        alojamiento.
      </div>
      <div>
        <h2>imagen representativa</h2>
      </div>
      <button onClick={() => navigate("/addproperty/step1")}>Siguiente</button>
    </div>
  );
};

export default PropertiesForm;
