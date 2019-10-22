const { merge } = rxjs;
const { scan } = rxjs.operators;

const carousel$ = merge(drag$, drop$)
.pipe(
    scan((store, {distance, size}) => {
	const updateStore = {
	    from: -(store.index * store.size) + distance
	};

	if (size === undefined) { // drag 시점
	    updateStore.to = updateStore.from;
	} else {  // drop 시점

	}
	return { ...store, ...updateStore };
    }, {
	from: 0,
	to: 0,
	index: 0,
	size: 0,
    })
);
