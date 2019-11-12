const { fromEvent } = rxjs;
const { map } = rxjs.operators;
const markerClick$ = fromEvent(marker, "click")
.pipe(
    map(({overlay}) => ({
	marker: overlay,
	position: overlay.getPosition()
    }))
);
