const { merge, fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { map, switchMap, partition, share } = rxjs.operators;

export function createShare$() {
    const changeHash$ = merge(
	fromEvent(window, "load"),
	fromEvent(window, "hashchange")
    )
    .pipe(
	map(() => parseHash()),
	share()
    );
    
    let [render$, search$] = changedHash$.pipe(
	partition(({ routeId }) => routeId)
    );
    render$ = render$
    .pipe(
	switchMap(({ routeId }) => ajax.getJSON(`/station/pass/${routeId}`)),
	handleAjax("busRouteStationList")
    );
    return {
	render$,
	search$,
    };
}

export function parseHash() {
    // routeId_routeName
    // 버스노선ID_버스번호
    const [routeId, routeNum] = location.hash.substring(1).split("_");
    return {
	routeId,
	routeNum
    };
}
