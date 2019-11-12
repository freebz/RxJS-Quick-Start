const { fromEvent, of } = rxjs;
const { ajax } = rxjs.ajax;
const { map, switchMap, pluck } = rxjs.operators;

export default class Map {
    // ...
    mapStation() {
	const coord$ = of({
	    longitude: "127.10989",
	    latitude: "37.03808"
	});
	return coord$
	.pipe(
	    switchMap(coord => ajax.getJSON(`/station/around/${coord.longitude}/${coord.latitude}`)),
	    pluck("busStationAroundList")
	);
    }
    // ...
}
