const { fromEvent } = rxjs;

const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
