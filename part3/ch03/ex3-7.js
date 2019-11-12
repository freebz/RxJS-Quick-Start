search$ = search$
.pipe(
    switchMap(query => ajax.getJSON(`/bus/${query}`)),
    pluck("busRouteList")
)
