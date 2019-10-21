const { fromEvent } = rxjs;
const start$ = fromEvent($view, EVENTS.start);
const move$ = fromEvent($view, EVENTS.move);
const end$ = fromEvent($view, EVENTS.end);
