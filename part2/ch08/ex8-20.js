const drop$ = drag$
.pipe(
    map(drag => end$)
);
