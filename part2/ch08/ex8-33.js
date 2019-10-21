const drop$ = drag$
.pipe(
    switchMap(drag => {
	return end$.pipe(
	    map(event => drag), // drag는 drag$가 전달하는 start$와 move$의 위치 값의 거리
	    first()
	);
    })
);
