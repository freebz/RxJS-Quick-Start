// XMLHttpRequest에 의해 입력된 데이터
let result;
const xhr = new XMLHttpRequest();
xhr.onload = function(e) {
  /*
   * Ajax를 통해 얻은 데이터를 result 변수에 저장한다.
   *
   * {
   *   list: [
   *     "게시글1번. 안녕하세요.",
   *     "게시글2번. 반급습니다.",
   *     "게시글3번. RxJS에 대해 알아봐요."
   *   ]
   * }
   */
  result = JSON.parse(xhr.responseText);
}
xhr.open("GET", url);
xhr.send();

