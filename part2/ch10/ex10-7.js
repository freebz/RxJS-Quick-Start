const { animationFrameScheduler, interval } = rxjs;

const scheduler = animationFrameScheduler;
const start = scheduler.now();
const DURATION = 300;
const animation$ = interval(0, scheduler)
.pipe(
    map(() => (scheduler.now() - start) / DURATION)
);
