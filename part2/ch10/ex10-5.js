const { of, asyncScheduler, asapScheduler } = rxjs;
const { tap, observeOn } = rxjs.operators;

const obs$ = of("A", "B", "C").pipe(
    tap(v => console.log(v, "데이터 처리1")), // null 스케줄러 (기본)
    tap(v => console.log(v, "데이터 처리2")), // null 스케줄러 (기본)
    observeOn(asyncScheduler), // 이후 작업은 async 스케줄러로 변경하라
    tap(v => console.log(v, "데이터 처리3")), // async 스케줄러
    tap(v => console.log(v, "데이터 처리4")), // async 스케줄러
    observeOn(asapScheduler), // 이후 작업은 asap 스케줄러로 변경하라
    tap(v => console.log(v, "데이터 처리5")), // asap 스케줄러
    tap(v => console.log(v, "데이터 처리6")), // asap 스케줄러
);
