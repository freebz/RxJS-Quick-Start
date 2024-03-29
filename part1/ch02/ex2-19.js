const { of } = rxjs;
const number$ = of([1,2,3,4,5,6,7,8]);

// next, error, complete가 있는 객체를 받음
number$.subscribe({
    next(v) {
	console.log(v);
    },
    error(e) {
	console.error(e);
    },
    complete() {
	console.log("complete");
    }
});

// next 함수만 받음
number$.subscribe(v => {
    console.log(v);
});

// next, error 함수만 받음
number$.subscribe(v => {
    console.log(v);
}, e => {
    console.error(e);
});

// next, error, complete 함수를 받음
number$.subscribe(v => {
    console.log(v);
}, e => {
    console.error(e);
}, () => {
    console.log("complete");
});
