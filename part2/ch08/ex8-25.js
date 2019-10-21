const drop$ = drag$
.pipe(
    switchMap(drag => end$.pipe(first())),
)
