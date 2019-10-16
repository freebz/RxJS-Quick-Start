const { fromEvent } = rxjs;
const { pluck } = rxjs.operators;
const currentTarget$ = fromEvent(document, "click")
.pipe(
  pluck("currentTarget")
);  // observable
const observer = currentTarget => {
  console.log(currentTarget);
};
currentTarget$.subscribe(observer);
