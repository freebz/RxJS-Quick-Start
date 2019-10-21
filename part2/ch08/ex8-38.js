const drag$ = start$
.pipe(
    // ...
    // tap(v => console.log("drag$", v)),
    share()
)
