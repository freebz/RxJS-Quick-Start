window.addEventListener("hashchange", event => console.log("해시값이 변경되었다"));

// a 태그 선택 이후
location.hash; // test
// "해시값이 변경되었다"는 로그가 찍힌다.
