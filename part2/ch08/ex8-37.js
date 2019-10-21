const drag$ = start$
.pipe(
    // ...
    tap(v => console.log("drag$", v))
)

const drop$ = drag$
.pipe(
    tap(v => console.log("drap$", v))
    // ...
)
