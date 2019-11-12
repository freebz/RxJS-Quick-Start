search$ = search$
.pipe(
    tap(() => this.showLoading()),
    switchMap(query => ajax.getJSON(`/bus/${query}`)),
    pluck("busRouteList"),
    retry(2),
    tap(() => this.hideLoading()),
    finalize(() => {
	this.hideLoading();
	this.$layer.style.display = "none";
    })
);
