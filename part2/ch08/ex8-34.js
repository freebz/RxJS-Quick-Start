const drop$ = drag$
.pipe(
    switchMap(drag => {
	return end$.pipe(
	    map(event => drag),
	    first()
	)
    }),
    withLatestFrom(size$)
);
