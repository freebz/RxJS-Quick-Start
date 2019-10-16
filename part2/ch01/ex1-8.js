// 1. Observer 객체를 전달하는 subscribe 사용 예

const observer = {
  next: x => console.log("Observer가 Observable로부터 받은 데이터: " + x),
  error: err => console.error("Observer가 Observable로부터 받은 에러 데이터: " + err),
  complete: () => console.log("Observer가 Observable로부터 종료되었다는 알림을 받은 경우"),
};
click$.subscribe(observer); // observer 객체를 파라미터로 받는다.


// 2. next 콜백 함수를 전달하는 subscribe 사용 예

// observer의 next 함수를 파라미터로 받는다.
click$.subscribe(x => console.log("Observer가 Observable로부터 받은 데이터: " + x));


// 3. next, error, complete 콜백 함수를 전달하는 subscribe 사용 예

// observer의 next, error, complete 함수를 파라미터로 받는다.
click$.subscribe(x => console.log("Observer가 Observable로부터 받은 데이터: " + x),
  error: err => console.error("Observer가 Observable로부터 받은 에러 데이터: " + err),
  complete: () => console.log("Observer가 Observable로부터 종료되었다는 알림을 받은 경우")
);
