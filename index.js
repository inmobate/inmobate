function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  // Recibe como parámetro un número entero
  // Si es un número par, debe convertirlo a binario y retornarlo.
  // Si es impar, convertirlo a hexadecimal y retornarlo.

  if (!Number.isInteger(numero)) return "no es un numero";
  else {
    if (numero % 2 === 0) {
      const bin = [];
      let n = numero;
      while (n !== 0) {
        n % 2 === 0 ? bin.push(0) : bin.push(1);
        n = Math.floor(n / 2);
      }
      return bin.reverse().join("");
    } else {
      const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let n = numero;
      let cont = 0;
      while (n !== 0) {
        n = n / 16;
        cont += 1;
      }
      return;
    }
  }
}

function chatocebes() {
  const data = {
    nombre: "Javier Ceballos",
    edad: 34,
    nacionalidad: "Colombiana",
  };
  return data;
}
