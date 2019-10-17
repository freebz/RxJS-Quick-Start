const reset$ = keyup$
.pipe(
    filter(query => query.trim().length === 0),
    tap(v => $layer.innerHTML = "")
);
