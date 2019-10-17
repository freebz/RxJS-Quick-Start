// Observable에서 데이터가 전달되지 않는다.
// subscribe가 호출되는 순간부터 데이터가 전달된다.
number$.subscribe(value => console.log(value));
// 결과값
// 0
// 1
// 2
// 3
// ...
