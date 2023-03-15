import { useNavigate } from "react-router-dom";

const Step4 = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>Agregá algunos datos básicos sobre tu espacio</h2>
      <p>
        Después vas a poder agregar más información, como los tipos de cama.
      </p>
      <div>
        <div>
          Viajeros
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <div>
          Dormitorios
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <div>
          Camas
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
        <div>
          Baños
          <div>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/addproperty/step5")}>Siguiente</button>
    </div>
  );
};

export default Step4;
