// 도트 체이닝 예제
ajax$
  .switchMap(data => ...)
  .filter(user => ...)
  .map(user => ...);
// pipe 오퍼레이터 예제
ajax$
.pipe(
  switchMap(data => ...),
  filter(user => ...),
  map(user => ...)
);
