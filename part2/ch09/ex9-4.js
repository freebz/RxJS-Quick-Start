obs1$.pipe(
    withLatestFrom(
	obs2$,
	obs3$,
	obs4$,
	(obs1, obs2, obs3, osb4) => obs1 + obs2 + obs3 + obs4)
)
);
