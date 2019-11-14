const changedHash$ = // ...
.pipe(
    map(() => parseHash()),
    share()
);
