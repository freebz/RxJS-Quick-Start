const size$ = fromEvent(window, "resize")
.pipe(
    startWith(0),
    map(event => $view.clientWidth)
);
