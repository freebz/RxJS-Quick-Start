// 애니메이션 데이터 호출
const animation$ = animation(100, 500, 300);

setTimeout(() => {
    animation$.subscribe(v => console.log(v));
}, 500);

// 500
