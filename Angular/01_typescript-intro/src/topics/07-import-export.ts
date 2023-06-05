import { Product, taxCalculation } from "./06-function-destructuring";
const shoppingCar: Product[] = [
  {
    description: "Phone",
    price: 100,
  },
  {
    description: "Tablet",
    price: 200,
  },
];
// Tax =0.15

const [total, tax] = taxCalculation({
  products: shoppingCar,
  tax: 0.15,
});

console.log("Total: ", total);
console.log("Tax: ", tax);
