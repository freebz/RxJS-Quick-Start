// 버스 타입의 클래스를 결정하는 함수
function getBuesType(name) { /* ... */ }
// 네이버 지도 생성
function createNaverMap($map) { /* ... */ }
// 네이버 지도 위에 표시할 정보윈도우 생성
function createNaverInfoWindow() { /* ... */ }
export default class Map {
    // 네이버 지도API를 이용하여 지도의 중앙을 주어진 좌표로 이동하고 지도의 zoom을 11로 지정한다. 또한 infoWindow를 닫는다.
    centerMapAndCloseWindow(coord) { /* ... */ }
    // 지도의 특정 위치에 마커를 생성한다.
    createMarker(name, x, y) { /* ... */ }
    // 지도에 있는 마커를 제거한다.
    deleteMarker(marker) { /* ... */ }
    // 정류소 정보를 바탕으로 네이버 지도API를 이용하여 지도에 경로를 그린다.
    drawPath(stations) { /* ... */ }
    // 네이버 지도 API를 이용하여 지도에 경로가 있다면 지운다.
    deletePath() { /* ... */ }
    // 지도 위에 표시되는 정보창(infowindow)을 보여준다.
    // 이때 대상 마커 인스턴스와 정보창에 보여줄 내용, 그리고 정보창이 보져질 위치 정보를 전달한다.
    openInfoWindow(marker, position, content) { /* ... */ }
    // 지도 위에 표시되는 정보창(infowindow)을 닫는다.
    closeInfoWindow() { /* ... */ }
    // 전달된 위치 정보에서 정보창을 보여줘야하는지(true) 감춰야하는지(false) 여부를 반환한다.
    isOpenInfoWindow(position) { /* ... */ }
    constructor($map) {
	this.naverMap = createNaverMap($map);
	this.infowindow = createNaverInfoWindow();
    }
}
