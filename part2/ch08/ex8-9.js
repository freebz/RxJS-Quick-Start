const drag$ = start$
.pipe(
    mergeMap(start => move$.pipe(takeUntil(end$)))
);
