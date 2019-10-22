const { of } = rxjs;
const { reduce } = rxjs.operators;

of(10, 10, 20, 0, 50).pipe(
    scan((acc, value, index) => {
	acc.sum += value;
	acc.ave = acc.sum / (index +1);
	return acc;
    }, {
	sum:0,
	ave:0
    })
).subscribe(value => console.log("scan", value));

// scan {sum: 0, ave: 0} : 초기 데이터가 전달된 경우 (subscribe 하는 경우 전달된다.)
// scan {sum: 10, ave: 5} : 10이 전달된 경우
// scan {sum: 20, ave: 6.666666666666667} : 10이 전달된 경우
// scan {sum: 40, ave: 10} : 20이 전달된 경우
// scan {sum: 40, ave: 8} : 0이 전달된 경우
// scan {sum: 90, ave: 15} : 50이 전달된 경우
