const { from } = rxjs;
const { mergeMap } = rxjs.operators;

manageMarker(station$) {
    return station$
    .pipe(
	// ...
	mergeMap(markers => from(markers))
    );
}
