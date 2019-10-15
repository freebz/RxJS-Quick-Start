Array.from(document.querySelectorAll("li")).forEach((v, i) => {
  // Ajax의 결과인 reesult 변수를 이용하여 DOM에 정보를 표현한다.
  v.innerText = result.list[i];
});
