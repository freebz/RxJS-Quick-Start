let station$ = this.createDragend$()
    .pipe(this.mapStation);

station$ = station$
.pipe(
    map(stations => stations.map(station => this.createMarker(station.stationName, station.x, station.y)))
);
