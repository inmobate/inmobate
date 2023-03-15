import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>¿Qué tipo de alojamiento ofrecés a los huéspedes?</h2>
      <div>
        <section>
          <h4>Un alojamiento entero</h4>
          <p>
            Los huéspedes disponen de un alojamiento entero a su disposición.
          </p>
        </section>
        <section>
          <h4>Una habitación privada</h4>
          <p>
            Los huéspedes duermen en una habitación privada, pero es posible que
            algunas zonas se compartan con vos u otras personas.
          </p>
        </section>
        <section>
          <h4>Una habitación compartida</h4>
          <p>
            Los huéspedes duermen en una habitación o zona común que
            posiblemente compartan con otras personas.
          </p>
        </section>
      </div>
      <button onClick={() => navigate("/addproperty/step3")}>Siguiente</button>
    </div>
  );
};

export default Step2;
