manageMarker(station$) {
    return station$
    .pipe(
	map(stations => stations.map(station => {
	    const marker = this.createMarker(station.stationName, station.x, station.y);

	    // 버스 정류소ID, 버스정류소 이름 정보를 marker에 저장
	    marker.setOptions("id", station.stationId);
	    marker.setOptions("name", station.stationName);
	    return marker;
	})),
	// ...
    );
}
