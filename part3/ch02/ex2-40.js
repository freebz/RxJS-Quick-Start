const marker$ = of(markerInfo);
const bus$ = ajax.getJSON(`/bus/pass/station/${markerInfo.id}`));
