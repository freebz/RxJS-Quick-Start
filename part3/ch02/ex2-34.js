export default class Map {
    // ...
    mapBus(stationId$) {
	return stationId$
	.pipe(
	    switchMap(id => ajax.getJSON(`/bus/pass/station/${id}`)),
	    pluck("busRouteList")
	);
    }
    // ...
}
