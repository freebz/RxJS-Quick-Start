const { fromEvent } = rxjs;
const click$ = fromEvent(document, "click");
click$.subscribe(function(v) {
    console.log(v);
});

// 또는
click$.subscribe({
    next: function(v) {
	console.log(v);
    }
});
