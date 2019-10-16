const { Observable } = rxjs;
const interval$ = new Observable(function subscribe(observer) {
  const id = setInterval(function () {
    observer.next(new Date().toString());
  }, 1000);
  return function() { // 자원을 해제하는 함수
    console.log("interval 제거");
    clearInterval(id);
  };
});
const subscription = interval$.subscribe(v => console.log(v));

// 5초 후 구독을 해제한다.
setTimeout(function () {
  subscription.unsubscribe();
}, 5000);

// Wed Oct 01 2017 01:34:34 GMT+0900 (KST)
// Wed Oct 01 2017 01:34:35 GMT+0900 (KST)
// Wed Oct 01 2017 01:34:36 GMT+0900 (KST)
// Wed Oct 01 2017 01:34:37 GMT+0900 (KST)
// interval 제거
