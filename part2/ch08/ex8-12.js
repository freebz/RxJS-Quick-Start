const { fromEvent } = rxjs;
const { map } = rxjs.operators;

function toPos(event) {
    return SUPPORT_TOUCH ? event.changedTouches[0].pageX : event.pageX);
}

const start$ = fromEvent($view, EVENTS.start)
.pipe(
    map(event => toPos(event))
);
const move$ = fromEvent($view, EVENTS.move)
.pipe(
    map(event => toPos(event))
);
