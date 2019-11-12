const buses$ = stationId$
.pipe(
    switchMap(id => ajax.getJSON(`/bus/pass/station/${id}`)),
    pluck("busRouteList")
);
