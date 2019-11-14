const { merge , fromEvent } = rxjs;
const changedHash$ = merge(
    fromEvent(window, "load"),
    fromEvent(window, "hashchange")
);
