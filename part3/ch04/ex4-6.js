const { merge, fromEvent } = rxjs;
const { map } = rxjs.operators;

const changedHash$ = merge(
    fromEvent(window, "load"),
    fromEvent(window, "hashchange")
).pipe(
    map(() => parseHash())
);
