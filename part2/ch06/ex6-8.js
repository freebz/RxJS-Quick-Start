const reset$ = keyup$
.pipe(
    filter(query => query.trim().length === 0)
);
