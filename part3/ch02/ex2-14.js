constructor($map) {
    // ...
    this.createDragend$()
	.pipe(this.mapStation)
	.subscribe(stations => {
	    stations.forEach(station => this.createMarker(station.stationName, station.x, station.y));
	});
}
