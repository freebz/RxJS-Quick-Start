const { fromEvent } = rxjs;
const { map. mergeMap, debounceTime, filter, distinctUntilChanged, tap } = rxjs.operators;
const { ajax } = rxjs.ajax;
const user$ = fromEvent(document.getElementById("search"), "keyup")
.pipe(
    debounceTime(300), // 300ms 뒤에 데이터를 전달한다.
    map(event => event.target.value),
    distinctUntilChanged(),  // 특수키가 입력된 경우에는 나오지 않기 위해 중복 데이터 처리
    filter(query => query.trim().length > 0),
    tap(showLoading),
    mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
    tap(hideLoading)
);
