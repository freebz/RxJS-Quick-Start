search$ = search$
.pipe(
    // ...
    finalize(() => this.reset())
)

reset$.subscribe(() => this.reset());
