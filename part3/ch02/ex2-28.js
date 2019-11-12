const station$ = this.createDragend$()
    .pipe(
	this.mapStation,
	this.manageMarker.bind(this),
	this.mapMarkerClick
    );

station$.subscribe(markInfo => {
    console.log("클릭한 마커의 정보", markInfo);
});
