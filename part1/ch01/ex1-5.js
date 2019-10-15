const { fromEvent } = rxjs;
const key$ = fromEvent(document, "keydown");
const click$ = fromEvent(document, "click");
