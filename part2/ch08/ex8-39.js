// size$.subscribe(width => console.log("view의 넓이", width));
// drag$.subscribe(distance => console.log("start$와 move$의 차이값", distance));
// drop$.subscribe(array => console.log("drop", array));

const { merge } = rxjs;
const carousel$ = merge(drag$, drop$);

// carousel$ 데이터 확인을 위한 코드
carousel$.subscribe(v => console.log("캐러셀 데이터", v));
