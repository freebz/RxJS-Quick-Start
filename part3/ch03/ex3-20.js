search$ = search$
.pipe(
    // ...
    switchMap(query => Rx.Observable.ajax.getJSON(`/bus/${query}`)),
    map(jsonRes => {
	if (jsonRes.error) {
	    if (jsonRes.error.code === "4") {    // 결과가 존재하지 않는 경우
		return [];
	    } else {
		throw jsonRes.error;
	    }
	} else if (Array.isArray(jsonRes["busRouteList"])) {
	    return jsonRes["busRouteList"];
	} else {
	    if (jsonRes[property]) {
		return [jsonRes[property]];    // 1건만 전달된 경우 객체로 넘겨져 옮.
	    } else {
		return [];
	    }
	}
    })
    // ...
);
