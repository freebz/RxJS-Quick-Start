mapStation(coord$) {
    return coord$
    .pipe(
	switchMap(coord => ajax.getJSON(`/station/around/${coord.longitude}/${coord.latitude}`)),
	// ...
    );
}
