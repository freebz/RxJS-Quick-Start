station$ = station$
.pipe(
    // ...
    scan((prev, markers) => {
	// 이전 markers 삭제
	prev.forEach(this.deleteMarker);
	prev = markers;
	return prev;
    }, [])
);
