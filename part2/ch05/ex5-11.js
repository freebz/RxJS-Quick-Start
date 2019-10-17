const { fromEvent } = rxjs;
const { map, mergeMap, debounceTime } = rxjs.operators;
const { ajax } = rxjs.ajax;
const user$ = fromEvent(document.getElementById("search"), "keyup")
.pipe(
  debounceTime(300), // 300ms 뒤에 데이터를 전달한다.
  map(event => event.target.value),
  mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
);
