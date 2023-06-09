import React, { useState } from "react";

const Payments = ({ price }) => {
  const [entry, setEntry] = useState(Date().toString().slice(0, 10));
  const [output, setOutput] = useState(Date().toString().slice(0, 10));

  function countDays(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
    const fecha1ms = new Date(fecha1).getTime(); // Convertir fecha1 a milisegundos
    const fecha2ms = new Date(fecha2).getTime(); // Convertir fecha2 a milisegundos
    const diferenciaMs = Math.abs(fecha2ms - fecha1ms); // Calcular la diferencia en milisegundos
    return Math.round(diferenciaMs / unDia);
  }

  return (
    <div>
      <div>
        <input type="date" onChange={(e) => setEntry(e.target.value)} />
        <input type="date" onChange={(e) => setOutput(e.target.value)} />
        <div>
          <span>precio por noche: {price}</span>
          <span>total de noches: {countDays(entry, output)}</span>
          <span>total a pagar: {countDays(entry, output) * price}</span>
        </div>

        <button onClick={() => console.log(countDays(entry, output) * price)}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Payments;
