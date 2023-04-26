// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

let newArray = new Set(arrNumber1.concat(arrNumber2).concat(arrNumber3));

let finalArray = [];
newArray.forEach((n) => {
  if (arrNumber1.includes(n) && arrNumber2.includes(n) && arrNumber3.includes(n)) {
    finalArray.push(n);
  }
});
