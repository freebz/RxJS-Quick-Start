mapMarkerClick(marker$) {
    return marker$
    .pipe(
	mergeMap(marker => fromEvent(marker, "click")),
	map(({ overlay }) => ({
	    marker: overlay,
	    position: overlay.getPosition()
	}))
    );
}
