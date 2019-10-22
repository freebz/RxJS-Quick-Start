const { merge } = rxjs;
const { scan } = rxjs.operators;

const carousel$ = merge(drag$, drop$)
.pipe(
    scan((store, {distance, size}) => {
	const updateStore = {};

	return { ...store, ...updateStore };
    }, {
	from: 0,
	to: 0,
	index: 0,
	size: 0,
    })
);
