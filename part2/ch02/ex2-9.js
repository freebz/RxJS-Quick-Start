const { from } = rxjs;
from([10, 20, 30])
.subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("완료")
});
// 10
// 20
// 30
// 완료

const arguments$ = (function() {
  return from(arguments);
})(1, 2, 3)
.subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("완료")
});
// 1
// 2
// 3
// 완료
