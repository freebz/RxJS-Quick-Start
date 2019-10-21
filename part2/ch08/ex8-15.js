function toPos(obs$) {
    return obs$
    .pipe(
	map(v => SUPPORT_TOUCH ? v.changedTouches[0].pageX : v.pageX)
    );
}
