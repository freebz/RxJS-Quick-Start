const { Observable } = rxjs;
const obs$ = new Observable(observer => {
  let id;
  try {
    let value = 0;
    id = setInterval(() => {
      console.log(`is going ${value}`);
      observer.next(value++);
    }, 1000);
  } catch(e) {
    observer.error(e);
  }
  // unsubscribe될 때 호출되는 함수를 반환 teardown
  return () => {
    clearInterval(id);
    console.log("cancelled");
  }
})

const subscription = obs$.subscribe(
  value => console.log(`observable value ${value}`)
);

// 3초 후에 observable의 구독을 취소
setTimeout(() => subscription.unsubscribe(), 3000);
