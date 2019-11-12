// autocomplete.js
import {handleAjax} from "./common.js";

search$ = search$
.pipe(
    // ...
    switchMap(query => ajax.getJSON(`/bus/${query}`)),
    handleAjax("busRouteList"),
    // ...
);
