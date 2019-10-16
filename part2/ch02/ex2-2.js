// Observable.create 정적 메소드

const { Observable } = rxjs;
const numbers$ = Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
numbers$.subscribe(v => console.log(v));
