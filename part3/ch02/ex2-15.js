this.createDragend$()
    .pipe(this.mapStation)
    .subscribe(stations => {
	this.markers && this.markers.forEach(marker => this.deleteMarker(marker));
	this.markers = stations.map(station => this.createMarker(station.stationName, station.x, station.y));
    });
