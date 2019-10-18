rxjs = require('rxjs');
rxjs.operators = require('rxjs/operators');
const { interval } = rxjs;
const { publish, refCount } = rxjs.operators;
const number$ = interval(1000);
const connectable$ = number$
.pipe(
    publish(),
    refCount()
);
let connectSub, sub1, sub2;

sub1 = connectable$.subscribe(v => console.log(`observerA: ${v}`));
setTimeout(() => {
    sub2 = connectable$.subscribe(v => console.log(`observerB: ${v}`));
}, 1100);

setTimeout(() => {
    console.log(`observerA is unsubscribed`);
    sub1.unsubscribe();
}, 2100)

setTimeout(() => {
    console.log(`observerB is unsubscribed`);
    sub2.unsubscribe();
}, 3100)

// 결과
// observerA: 0
// observerA: 1
// observerB: 1
// observerA is unsubscribed
// observerB: 2
// observerB is unsubscribed
