mapMarker(marker$) {
    return marker$
	.pipe(
	    map(marker => fromEvent(marker, "click")),
	    map(({ overlay }) => ({
		marker: overlay,
		position: overlay.getPosition()
	    }))
	);
}
