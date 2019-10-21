const drag$ = start$
.pipe(
    map(start => move$.pipe(takeUntil(end$)))
);
