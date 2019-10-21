function map(callback) {
    // something...

    // Observable을 인자로 받고 Observable을 반환하는 함수를 반환.
    return obs$ => {
	// call callback...
	return newObs$;
    }
}
