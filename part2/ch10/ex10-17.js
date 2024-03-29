const { defer } = rxjs;

function animation(from, to, duration) {
    return defer(() => {
	const scheduler = animationFrameScheduler;
	const start = scheduler.now();
	const interval$ = interval(0, scheduler)
	    .pipe(
		map(() => (scheduler.now() - start) / duration),
		takeWhile(rate => rate < 1)
	    );
	return concat(interval$, of(1))
	    .pipe(
		map(rate => from + (to - from) * rate)
	    );
    });
}
