reset$ = reset$.pipe(
    merge(fromEvent(this.$layer, "click", (evt) => evt.target.cloest("li")))
);
