const drag$ = start$
.pipe(
    switchMap(start => move$.pipe(takeUntil(end$)))
);
