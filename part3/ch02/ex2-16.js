const { fromEvent } = rxjs;
const markerClick$ = fromEvent(marker, "click") // 지도에 표시된 버스정류소 마커를 클릭했을 때
