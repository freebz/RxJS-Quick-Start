const { Observable } = rxjs;

function geolocation() {
    // 서울 시청
    const defaultPosition = {
	coords: {
	    longitude: 126.9873882,
	    latitude:37.5666103,
	}
    };
    return new Observable(observer => {
	// geolocation 지원하는 경우 현재 위치를 구함.
	if (navigator.geolocation) {
	    window.navigator.geolocation.getCurrentPosition(
		position => observer.next(position),
		error => observer.next(defaultPosition),
		{
		    timeout:1000 // 1초 내에 답변이 없으면 에러처리
		}
	    );
	} else {
	    observer.next(defaultPosition);
	}
    })
}
