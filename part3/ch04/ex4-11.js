const { ajax } = rxjs.ajax;

const pass$ = ajax.getJSON(`/station/pass/버스노선ID`)
    .pipe(handleAjax("busRouteStationList"))
