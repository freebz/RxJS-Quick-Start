const { fromEvent } = rxjs;
const { debounceTime, map, distinctUntilChanged, share } = rxjs.operators;

createKeyup$() {
    return fromEvent(this.$input, "keyup")
    .pipe(
	debounceTime(300),
	map(event => event.target.value),
	distinctUntilChanged(),
	share()
    );
}
