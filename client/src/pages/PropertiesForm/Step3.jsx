import { useNavigate } from "react-router-dom";

const Step3 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>¿Dónde queda tu espacio?</h2>
      <p>
        Solo vamos a compartir tu dirección con los huéspedes luego de que hagan
        la reserva.
      </p>
      <input type="text" name="location" />

      <button onClick={() => navigate("/addproperty/step4")}>Siguente</button>
    </div>
  );
};

export default Step3;
