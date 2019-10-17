const xhr = new XMLHttpRequest();
xhr.onload = function(e) {
  afterAjaxResult = JSON.parse(xhr.responseText);

  const result = foo(afterAjaxResult);
  console.log(result);
}
