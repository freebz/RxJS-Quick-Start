const drop$ = drag$
.pipe(
    map(drag => end$.pipe(take(1)))
);
