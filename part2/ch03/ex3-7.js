numbers$.subscribe(value => console.log(`첫번째 ${value}`));
setTimeout(() => {
  numbers$.subscribe(value => console.log(`두번째 ${value}`));
}, 2000);
// 첫번째 0
// 첫번째 1
// 첫번째 2
// 두번째 0
// 첫번째 3
// 두번째 1
// 첫번째 4
// 두번째 2
// 첫번째 5
// ...
