mapMarkerClick(marker$) {
    return marker$
	.pipe(
	    mergeMap(marker => fromEvent(marker, "click")),
	    map(({ overlay }) => ({
		marker: overlay,
		position: overlay.getPosition(),
		id: overlay.getOptions("id"), // 버스정류소ID 정보를 얻음
		name: overlay.getOptions("name") // 버스정류소 이름을 얻음
	    }))
	);
}
