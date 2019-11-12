const { combineLatest } = rxjs;

mapBus(markerInfo$) {
    return markerInfo$
    .pipe(
	switchMap(markerInfo => {
	    const marker$ = of(markerInfo);
	    const bus$ = ajax.getJSON(`/bus/pass/station/${markerInfo.id}`)
	    .pipe(pluck("busRouteList"));

	    return combineLatest(marker$, bus$, (marker, buses) => ({
		buses,
		markerInfo
	    }));
	})
    );
}
