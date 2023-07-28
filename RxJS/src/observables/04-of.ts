import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6);
// Deprecado con number, lo cambio a any
const obs$ = of<any>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

console.log("Inicio del Obs$");
// Modificado el subscribe
obs$.subscribe({
  next: (value) => {
    console.log("next", value);
  },
  error: () => {
    null;
  },
  complete: () => console.log("terminamos la secuencia"),
});
console.log("Fin del Obs$");
