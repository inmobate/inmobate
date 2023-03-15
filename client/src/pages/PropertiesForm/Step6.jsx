import { useNavigate } from "react-router-dom";

const Step6 = () => {
  const navigate = useNavigate();
  return (
    <div>
      aca se suben las fotos(buscar mas info)
      <button onClick={() => navigate("/addproperty/step7")}>Siguiente</button>
    </div>
  );
};

export default Step6;
