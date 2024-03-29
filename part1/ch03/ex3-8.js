map = function(transformationFn) {
    const source = this;
    const result = new rxjs.Observable(observer => {
	// 새로운 Observable은 현재의 Observable을 subscribe 한다.
	source.subscribe(
	    // 현재의 Observable에서 전달된 데이터를 변경하여 전달한다.
	    function (x) { observer.next(transformationFn(x)); },
	    function (err) { observer.error(err); },
	    function () { observer.complete(); }
	);
    });
    return result;
}
