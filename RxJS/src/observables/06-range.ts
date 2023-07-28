import { of, range, asyncScheduler, observeOn } from "rxjs";

// const src$ = of(1,2,3,4,5);
// Range deprecado
// const src$ = range(1, 5, asyncScheduler);
// Solucion
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));
console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
