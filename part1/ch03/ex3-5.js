const twice = (f, v) => f(f(v));
const fn = v => v + 3;
console.log(twice(fn, 7)); // 13
