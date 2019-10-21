const { fromEvent } = rxjs;
const start$ = fromEvent($view, EVENTS.start)
.pipe(
    map(event => SUPPORT_TOUCH ? event.changedTouches[0].pageX : event.pageX)
);
const move$ = fromEvent($view, EVENTS.move)
.pipe(
    map(event => SUPPORT_TOUCH ? event.changedTouches[0].pageX : event.pageX)
);
