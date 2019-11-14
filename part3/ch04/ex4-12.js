render$ = render$
.pipe(
    switchMap(({routeId}) => Rx.Observable.ajax.getJSON(`/station/pass/${routeId}`)),
    handleAjax("busRouteStationList")
);
