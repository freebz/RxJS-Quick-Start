user$ =
    // ...
    switchMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
    tap(hideLoading),
    catchError((e, orgObservable) => {
	console.log("서버 에러가 발생하였으나 다시 호출하도록 처리", e.message);
	// 현재 Observable을 반환한다.
	return orgObservable;
    }),
// ...
