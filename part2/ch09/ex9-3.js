const drag$ = start$
.pipe(
    // ...
    map(distance => ({distance}))
)
// 기존 데이터 형태
// 10

// 변경된 데이터 형태
// {
//     distance: 10
// }
