const keyup$ = // ...
    distinctUntilChanged(),
    tap(v => console.log("from keyup$", v))
)

user$ = user$
.pipe(
    // ...
    finalize(hideLoading),
    tap(v => console.log("from user$", v))
);

reset$
.pipe(
    tap(v => $layer.innerHTML = ""),
    tap(v => console.log("from reset$", v))
);
