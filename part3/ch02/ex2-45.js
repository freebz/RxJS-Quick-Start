const station$ =
    .pipe(
	// ...
    );

station$
    .subscribe(({ markerInfo, buses}) => {
	if (this.isOpenInfoWindow(markerInfo.position)) {
	    this.openInfoWindow(
		markerInfo.marker,
		markerInfo.position,
		this.render(buses, markerInfo)
	    );
	} else {
	    this.closeInfoWindow();
	}
    });
