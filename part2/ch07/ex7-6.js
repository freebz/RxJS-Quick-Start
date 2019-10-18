const keyup$ = fromEvent(document.getElementById("search"), "keyup")
.pipe(
    debounceTime(300), // 300ms 뒤에 데이터를 전달한다.
    map(event => event.target.value),
    distinctUntilChanged(), // 특수키가 입력된 경우에는 나오지 않기 위해 중복 데이터 처리
    tap(v => console.log("from keyup$", v)),
    multicast(new Subject())
);
