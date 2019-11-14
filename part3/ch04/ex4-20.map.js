// map.js
const { merge } = rxjs;

export default class Map {
    // ...
    constructor($map, search$) {
	// ...
	const station$ = merge(search$, this.createDragend$())
	    .pipe(
		// ...
	    )
    }
    // ...
};
