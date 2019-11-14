render$
    // .subscribe(v => console.log("===> render", v))
    .subscribe(stations => {
	if (stations.length) {
	    map.drawPath(stations);
	} else {
	    map.deletePath();
	}
    });
