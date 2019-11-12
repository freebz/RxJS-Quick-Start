const { fromEvent } = rxjs;
const dragend$ = fromEvent(this.naverMap, "dragend") // 지도 영역을 dragend 했을 때
