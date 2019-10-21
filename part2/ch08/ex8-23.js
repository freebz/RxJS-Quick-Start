const { fromEvent } = rxjs;
const { first } = rxjs.operators;

// div를 처음 click한 경우 click$ 상태를 complete한다.
const click$ = fromEvent(document, "click")
.pipe(
    first(ev => ev.target.tagName === 'DIV')
);
