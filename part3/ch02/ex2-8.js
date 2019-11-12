const { ajax } = rxjs.ajax;

const station$ = ajax.getJSON(`station/around/경도/위도`);
