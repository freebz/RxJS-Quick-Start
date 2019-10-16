const { from } = rxjs;
const map$ = from(new Map([[1, 2], [2, 4], [4, 8]]));
map$.subscribe({
  next: v => console.log(v),
  error: e => console.log(e),
  complete: () => console.log("완료")
});

// [ 1, 2 ]
// [ 2, 4 ]
// [ 4, 8 ]
// 완료
