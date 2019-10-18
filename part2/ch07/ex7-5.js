const { Subject, Observable } = rxjs;
const subject = new Subject();

const keyup$ = fromEvent(document.getElementById("search"), "keyup")
// ...

// keyup$ 대신 subject를 사용
let [user$, reset$] = subject
.pipe(
    partition(query => query.trim().length > 0)
);

user$.subscribe({
    // ...
});

reset$.subscribe();

// subject에서 user$와 reset$를 생성한 후, subject가 keyup$를 구독
keyup$.subscribe(subject);
