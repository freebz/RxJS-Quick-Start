const user$ = keyup$
    // ...
    switchMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
    tap(hideLoading),
    retry(2),
    finalize(hideLoading),
// ...
