const { interval } = rxjs;

interval(1000)
.subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("완료")
});
