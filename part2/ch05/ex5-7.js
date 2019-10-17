const { ajax } = rxjs.ajax;
const request$ = ajax.getJSON("https://api.github.com/search/users?q=sculove")
request$.subscribe(json => {
  console.log("서버로 부터 전달 받은 json 값", json);
});
