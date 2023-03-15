import { services } from "./db";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>
        Contales a los huéspedes todo lo que tu espacio tiene para ofrecer
      </h2>
      <p>Podés agregar más servicios después de publicar el anuncio.</p>
      <div>
        {services.map((el) => (
          <span>{el.service}</span>
        ))}
      </div>
      <button onClick={() => navigate("/addproperty/step6")}>Siguente</button>
    </div>
  );
};

export default Step5;
