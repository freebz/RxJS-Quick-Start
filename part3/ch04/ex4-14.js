if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
	position => { // 위치정보를 얻었을때 호출되는 성공 콜백함수
	    // position.coords.latitude; 위도
	    // position.coords.longitude; 경도
	},
	error => { // 위치정보를 얻지 못했을 때 호출되는 실패 콜백함수
	},
	{ // 옵션
	    timeout: 1000 // 1초 내에 답변이 없으면 에러처리
	}
    );
}
