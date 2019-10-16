// Global

window.rxjs; // global 영역
window.rxjs.operators.map; // operator는 rxjs.operator 하위에 존재한다.
window.rxjs.operators.filter;


// ESModule

import { Observable, fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";


// CommonJS

const { Observable, fromEvent } = require("rxjs");
const { map, filter } = require('rxjs/operators');
