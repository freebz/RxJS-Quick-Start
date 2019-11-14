render$
    .subscribe(stations => {
	if (stations.length) {
	    map.drawPath(stations)
	    sidebar.render(stations);
	} else {
	    map.deletePath();
	    sidebar.close();
	}
    });
