mapBus(markerInfo$) {
    return markerInfo$
    .pipe(
	switchMap(markerInfo => ajax.getJSON(`/bus/pass/station/${markerInfo.id}`)),
	//...
    );
}
