import { fromEvent, combineLatest, from } from "rxjs";
import { map, pluck } from "rxjs/operators";

// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest(
//     keyup$.pipe( pluck('type') ),
//     click$.pipe( pluck('type') )
// ).subscribe( console.log );

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";

input2.placeholder = "*********";
input2.type = "password";

document.querySelector("body").append(input1, input2);

// Helper
// pluck deprecado
// const getInputStream = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, "keyup").pipe(pluck<KeyboardEvent, string>("target", "value"));
// solucion
const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, "keyup").pipe(map(({ target }) => (target as HTMLInputElement).value));
//   Añadido un [] a los input del combineLatest
combineLatest([getInputStream(input1), getInputStream(input2)]).subscribe(console.log);
