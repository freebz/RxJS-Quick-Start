// ...
const subscription = currentTarget$.subscribe(observer);

// subscription으로 자원 해제가 가능
subscription.unsubscribe();
