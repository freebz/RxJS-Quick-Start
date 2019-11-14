export function createShare$() {
    // ...
    return {
	render$,
	search$: search$.pipe(geolocation)
    );
}
