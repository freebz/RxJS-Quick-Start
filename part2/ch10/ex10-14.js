function animation(from, to, duration) {
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
}
// 애니메이션 데이터 호출
const animation$ = animation(100, 500, 300);
animation$.subscribe(v => console.log(v));
