const { Subject } = rxjs;
const subject = new Subject();

// observerA를 등록
subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
// 데이터 1을 전달
subject.next(1);

// observerB를 등록
subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});
// 데이터 2를 전달
subject.next(2);

// 결과
// observerA: 1
// observerA: 2
// observerB: 2
