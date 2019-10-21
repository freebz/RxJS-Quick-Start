const drag$ = start$.pipe(
    switchMap(start => {
	return move$.pipe(
	    map(move => move - start),
	    takeUntil(end$)
	);
    })
)
