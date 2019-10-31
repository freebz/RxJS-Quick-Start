const carousel$ = merge(drag$, drop$)
.pipe(
    scan( // ...
    map(({from, to}) => from === to ?
	of(to) : animation(from, to, DEFAULT_DURATION))
);
