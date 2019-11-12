const { scan } = rxjs.operators;

manageMarker(stations$) {
    return station$
    .pipe(
	map(stations => stations.map(station => this.createMarker(station.stationName, station.x, station.y))),
	scan((prev, markers) => {
	    // 이전 markers 삭제
	    prev.forEach(this.deleteMarker);
	    prev = markers;
	    return prev;
	}, []);
    );
}
