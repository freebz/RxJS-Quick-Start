const station$ = this.createDragend$()
    .pipe(
	this.mapStation,
	this.manageMarker.bind(this)
    );
