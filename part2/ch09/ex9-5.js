const drop$ = drag$
.pipe(
    // ...
    withLatestFrom(size$, (drag, size) => {
	return { ...drag, size };
    })
);

// 기존 데이터 형태
// [10, 400]

// 변경된 데이터 형태
// {
//     distance: 10,
//     size: 400
// }
