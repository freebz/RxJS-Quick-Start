const { ajax } = rxjs.ajax;
const { switchMap } = rxjs.operators;

const station$ = coord$
.pipe(
    switchMap(coord => ajax.getJSON(`/station/around/${coord.longitude}/${coord.latitude}`))
);
