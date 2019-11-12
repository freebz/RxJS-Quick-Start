// map.js
import {handleAjax} from "./common.js";

mapBus(markerInfo$) {
    return marker$
    .pipe(
	switchMap(markerInfo => {
	    // ...
	    const bus$ = ajax.getJSON(`/bus/pass/station/${markerInfo.id}`)
	    .pipe(handleAjax("busRouteList"));
	    // ...
	})
    );
}

mapStation(coord$) {
    return coord$
    .pipe(
	switchMap(coord => ajax.getJSON(`/station/around/${coord.longitude}/${coord.latitude}`)),
	handleAajx("busStationAroundList")
    );
}
