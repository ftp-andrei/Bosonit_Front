/**
 * Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.
Ejemplo de uso de la función:

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }
 */

function toLowercaseKeys(object) {
  let x = {};
  for (let key in object) {
    x[key.toLowerCase()] = object[key];
  }
  return x;
}

let myObject = { NamE: "Charles", ADDress: "Home Street" };
let myObjLowercase = toLowercaseKeys(myObject);
