carousel$.subscribe(store => {
    console.log("캐러셀 데이터", store);
    translateX(store.to);
});
