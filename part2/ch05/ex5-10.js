const { fromEvent } = rxjs;
const { map, mergeMap } = rxjs.operators;
const { ajax } = rxjs.ajax;
const user$ = fromEvent(document.getElementById("search"), "keyup")
.pipe(
  map(event => event.target.value),
  mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
);
