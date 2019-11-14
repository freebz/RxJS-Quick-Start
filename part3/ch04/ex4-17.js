function geolocation() {
    //...
    return new Observable(observer => {
	// ...
    }).pipe(
	pluck("coords"),
	first()
    );
}
