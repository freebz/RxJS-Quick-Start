const carousel$ = merge(drag$, drop$)
.pipe(
    scan( // ...
    switchMap(({from, to}) => from === to ?
	of(to) : animation(from, to, DEFAULT_DURATION))
);
