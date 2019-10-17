const promise = new Promise((resolve, reject) => {
  console.log("create promise");
  try {
    resolve(1);
  } catch(e) {
    reject("error promise");
  }
});

// then은 결정된 상태값만을 반환한다.
promise.then(
  value => console.log(`promise ${value}`),
  error => console.log(`promise ${error}`)
); // 1 출력
promise.then(
  value => console.log(`첫번째 promise ${value}`),
  error => console.log(`두번째 promise ${error}`)
); // 1 출력
