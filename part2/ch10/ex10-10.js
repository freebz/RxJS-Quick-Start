const interval$ = interval(0, scheduler)
.pipe(
    map(() => scheduler.now() - start) / DURATION),
      takeWhile(rate => rate <= 1)
);
const animation$ = concat(interval$, of(1));

// ...
// animation$ 0.86
// animation$ 0.86666666666666667
// animation$ 0.91666666666666666
// animation$ 0.92333333333333333
// animation$ 0.97
// animation$ 0.97666666666666667
// animation$ 0.86666666666666667
// animation$ 0.91666666666666666
// animation$ 0.92333333333333333
// animation$ 0.97
// animation$ 0.97666666666666667
// animation$ 1
