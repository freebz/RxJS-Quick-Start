const SUPPORT_TOUCH = "ontouchstart" in window;
const EVENTS = {
    start: SUPPORT_TOUCH ? "touchstart" : "mousedown",
    move: SUPPORT_TOUCH ? "touchmove" : "mousemove",
    end: SUPPORT_TOUCH ? "touchend" : "mouseup"
};
