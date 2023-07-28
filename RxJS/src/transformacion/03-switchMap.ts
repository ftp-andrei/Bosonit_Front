import { fromEvent, Observable } from "rxjs";
import { debounceTime, pluck, mergeMap, switchMap, map, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");
// Falla por el pluck
// input$.pipe(
//   debounceTime<KeyboardEvent>(500),
//   pluck<KeyboardEvent, string>("target", "value"),
//   mergeMap<string, Observable<GithubUsersResp>>((texto) => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
//   pluck<GithubUsersResp, GithubUser[]>("items")
// ); //.subscribe( mostrarUsuarios );
// Version con map
input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>((event) => (event.target as HTMLInputElement).value),
    map<string, Observable<GithubUsersResp>>((text) => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>((item: GithubUsersResp) => item.items)
  )
  .subscribe((users) => {
    mostrarUsuarios(users);
    console.log("users", users);
  });

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
