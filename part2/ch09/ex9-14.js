const { merge } = rxjs;
const { scan } = rxjs.operators;

const carousel$ = merge(drag$, drop$)
.pipe(
    scan((store, {distance, size}) => {
	const updateStore = {
	    from: store.index * -store.size + distance
	};

	if (size === undefined) { // drag
	    updateStore.to = updateStore.from;
	} else {  // drop
	    let tobeIndex = store.index;
	    if (Math.abs(distance) >= THRESHOLD) {
		tobeIndex = distance < 0 ?
		    Math.min(tobeIndex + 1, PANEL_COUNT - 1) :
		    Math.max(tobeIndex - 1, 0);
	    }
	    updateStore.index = tobeIndex;
	    updateStore.to = -(tobeIndex * size);
	    updateStore.size = size;
	}
	return { ...store, ...updateStore };
    }, {
	from: 0,
	to: 0,
	index: 0,
	size: 0,
    })
)
