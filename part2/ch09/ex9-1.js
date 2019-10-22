const { of } = rxjs;
const { reduce } = rxjs.operators;

of(10, 10, 20, 0, 50).pipe(
    reduce((acc, value, index) => {
	acc.sum += value;
	acc.ave = acc.sum / (index +1);
	return acc;
    }, {
	sum:0,
	ave:0
    })
).subscribe(value => console.log("reduce", value));

// reduce {sum: 90, ave: 18}
