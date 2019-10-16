const { empty, of } = rxjs;
const { map } = rxjs.operators;

of(1, -2, 3).pipe(
  map(number => number < 0 ? empty() : number)
)
.subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("완료")
});
