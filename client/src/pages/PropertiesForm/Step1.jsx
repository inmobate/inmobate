import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTypeAction } from "../../app/slices/propertyToAdd/action";
import { types } from "./db";

const Step1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propertyToAddValue = useSelector((state) => state.propertyToAdd);

  function handleNext(type) {
    navigate("/addproperty/step2");
    dispatch(setTypeAction(type));
  }

  return (
    <div>
      {
        console.log(propertyToAddValue)
      }
      <h2>¿Cuál de estas opciones describe mejor tu espacio?</h2>
      {types.map((el) => (
        <span>{el.type}</span>
      ))}
      <button onClick={() => handleNext("hola")}>Siguente</button>
    </div>
  );
};

export default Step1;
