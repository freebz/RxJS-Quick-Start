const { Observable } = rxjs;
const coldWebsocket$ = new Observable(function subscribe(observer) {
    const socket = new WebSocket("ws://someurl");
    const handler = (e) => observer.next(e);
    socket.addEventListener("message", handler);
    return () => socket.close();
});
