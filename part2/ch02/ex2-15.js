const error; // 전달된 error 데이터

Observable.create(observer => {
  observer.error(new Error(error));
});
