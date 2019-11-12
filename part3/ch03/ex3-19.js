search$ = search$
.pipe(
    // ...
    switchMap(query => ajax.getJSON(`/bus/${query}`)),
    map(jsonRes => {
	if (Array.isArray(jsonRes["busRouteList"])) {
	    return jsonRes["busRouteList"];
	} else {
	    if (jsonRes["busRouteList"]) {
		return [jsonRes["busRouteList"]];    // 1건만 전달된 경우 객체로 넘겨저 옮.
	    } else {
		return [];
	    }
	}
    })
    // ...
);
