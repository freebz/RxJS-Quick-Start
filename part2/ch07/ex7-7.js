// subject 대신 keyup$을 사용
let [user$, reset$] = keyup$.pipe(
    partition(query => query.trim().length > 0)
)
// ...

user$.subscribe({
    // ...
});

reset$.subscribe();
