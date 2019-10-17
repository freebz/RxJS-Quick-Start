const { fromEvent } = rxjs;
const { map, mergeMap, debounceTime, filter, distinctUntilChanged, tap, partition } = rxjs.operators;
const { ajax } = rxjs.ajax;

// ...

let [user$, reset$] = keyup$
.pipe(
  partition(query => query.trim().length > 0)
)

user$ = user$
.pipe(
  tap(showLoading),
  mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
  tap(hideLoading)
);

reset$
.pipe(
  tap(v => $layer.innerHTML = "")
)
.subscribe();
