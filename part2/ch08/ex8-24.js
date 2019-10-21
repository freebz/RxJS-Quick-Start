const drop$ = drag$
.pipe(
    map(drag => end$.pipe(first())),
    mergeAll()
)
