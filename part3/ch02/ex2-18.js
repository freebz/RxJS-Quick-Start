export default class Map {
    // ...
    mapMarkerClick(marker) {
	return fromEvent(marker, "click")
	    .pipe(
		map(({overlay}) => ({
		    marker: overlay,
		    position: overlay.getPosition()
		}))
	    );
    }
    // ...
}
