class Subject {
    constructor() {
	this._observers = [];
    }
    add(observer) {
	this._observers.push(observer);
    }
    remove(observer) {
	let idx = this._observers.indexOf(observer);
	if (idx !== -1) {
	    this._observers.splice(idx,1);
	}
    }
    notify(status) {
	this._observers.forEach( v => {
	    v.update(status);
	});
    }
}
