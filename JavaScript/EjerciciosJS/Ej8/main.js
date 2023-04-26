/**
 * Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

Ejemplo de uso de la función:

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB

const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
 */

function fromBytesToFormattedSizeUnits(a, digits = 3) {
  let values = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let bytes = Math.abs(a);
  if (bytes == 0) return "0 Byte";
  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
  let result = (bytes / Math.pow(1000, i)).toPrecision(digits) + " " + values[i];
  if (a < 0) {
    return "-" + result;
  }
  return result;
}

let result1 = fromBytesToFormattedSizeUnits(1000);
let result2 = fromBytesToFormattedSizeUnits(123456789);
let result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
