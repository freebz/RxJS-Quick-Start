function parseHash() {
    // routeId_routeName
    // 버스노선ID_버스번호
    const [routeId, routeNum] = location.hash.substring(1).split("_");
    return {
	routeId,
	routeNum
    };
}
