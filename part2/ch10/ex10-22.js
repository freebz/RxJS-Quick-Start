carousel$.subscribe(pos => {
    console.log("캐러셀 데이터", pos);
    translateX(pos);
});
