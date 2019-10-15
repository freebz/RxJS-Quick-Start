ajax$
.pipe(
    switchMap(data => of(...data.results)),
    filter(user => /male/female/.test(user.gender)),
    map(user => Object.assign(
	user,
	logic(user.height, user.mass, user.gender)
    )),
    reduce((acc, user) => {
	acc.push(makeHtml(user));
	return acc;
    }, []),
    map(htmlArr => htmlArr.join(""))
)
.subscribe(v => {
    document.getElementById("users").innerHTML = v;
});
