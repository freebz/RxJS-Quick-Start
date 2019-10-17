const { from } = rxjs;
const request$ = from (fetch("https://api.github.com/search/users?q=sculove")
    .then(res => res.sjon()));

request$.subscribe(json => {
  console.log("서버로 부터 전달 받은 json 값", json);
});
