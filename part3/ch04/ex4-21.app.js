// app.js
// ...
import {createShare$} from "./common.js";

// createShare$ 함수를 이용하여 render$와 search$을 생성한다.
const {
    render$,
    search$
} = createShare$();

// ...
// Map 생성시 search$를 파라미터로 전달한다.
const map = new Map(
    document.querySelector(".map"),
    search$
);

render$.subscribe(v => console.log("===> render", v))
