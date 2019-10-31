const interval$ = interval(0, scheduler)
.pipe(
    map(() => (scheduler.now() - start) / DURATION),
    takeWhile(rate => rate <= 1)
);
const animation$ = concat(interval$, of(1))
.pipe(
    map(rate => from + (to - from) * rate)
);
