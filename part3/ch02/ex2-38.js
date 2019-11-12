const station$ = this.createDragend$()
.pipe(
    // ...
    this.mapMarkerClick,
    this.mapBus
);

station$.subscribe(stations => {
    console.log("클릭한 마커를 경유하는 버스노선 정보", stations);
});
