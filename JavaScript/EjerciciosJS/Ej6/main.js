/**
 * Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
Primer parámetro es un número float con x decimales
Según parámetro es un int que indique el número de decimales al que redondear
Evitar usar el método toFixed()
Ejemplo de uso de la función:

const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); //2,12

const roundedResult = roundedTo(1.123456789, 6);
console.log(roundedResult); // 1.123456

 * 
 */

function roundNumber(float, int) {
  let pow = Math.pow(10, int);
  return Math.round(float * pow) / pow;
}

let roundedResult1 = roundTo(2.123, 2);
let roundedResult2 = roundedTo(1.123456789, 6);
