const { ajax } = rxjs.ajax;
const { switchMap, pluck } = rxjs.operators;

const station$ = coord$
.pipe(
    switchMap(coord => ajax.getJSON(`/station/around/${coord.longitude}/${coord.latitude}`)),
    pluck("busStationAroundList")
);
