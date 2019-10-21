const size$ = fromEvent(window, "resize")
.pipe(
    map(event => $view.clientWidth)
);
