let viewWidth = $view.clientWidth; // X
obs$.pipe(map(data => data + viewWidth))

viewWidth = "something value";  // 외부에서 viewWidth를 쉽게 변경할 수 있다.
// 오퍼레이터 내부에 선언된 지역 변수는 외부의 영향을 받지 않기 때문에 사용해도 괜찮다.
obs$.pipe(
  map( => {
    let viewWidth = 100;
    return data + viewWidth;
  })
)
