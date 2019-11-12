const { fromEvent } = rxjs;
const { map } = rxjs.operators;

export default class Map {
    // ...
    createDragend$() {
	return fromEvent(this.naverMap, "dragend") // 지도 영역을 dragend 했을 때
	.pipe(
	    map(({ coord }) => {
		latitude: coord.y,
		longitude: coord.x
	    })
	);
    }
    // ...
}
