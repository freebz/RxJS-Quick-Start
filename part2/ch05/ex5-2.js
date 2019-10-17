const { fromEvent } = rxjs;
const keyup$ = fromEvent(document.getElementById("search"), "keyup");
