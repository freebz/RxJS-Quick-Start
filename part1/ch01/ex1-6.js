const { from } = rxjs;
const arrayFrom$ = from([10, 20, 30]);
const iterableFrom$ = from(new Map([[1, 2], [2, 4], [4, 8]]));
const ajaxPromiseFrom$ = from(fetch("./api/some.json"));
