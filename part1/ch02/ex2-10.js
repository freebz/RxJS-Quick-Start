class User extends Subject {
    constructor() {
	super();
	this._state = {
	    name: "손찬욱",
	    isLogin: false
	};
    }
    getName() {
	return this._state.name;
    }
    isLogin() {
	return this._state.isLogin;
    }
    login(name) {
	this._state.name = name;
	this._state.isLogin = true;
	this.notify(this._state);
    }
    logout() {
	this._state.name = "";
	this._state.isLogin = false;
	this.notify(this._state);
    }
}

class System {
    constructor() {
	this._token = null;
	this._id = "System";
    }
    update(status) {
	if (status.isLogin) {
	    this._token = Array.prototype.reduce.call(
		status.name,
		(acc, v) => acc + v.charCodeAt(0), 0);
	    console.log(`[${this._id}] ${status.name} 의 토큰은 ${this._token} 입니다`);
	} else {
	    console.log(`[${this._id}] ${this._token} 은(는) 로그아웃되었습니다.`);
	    this._token = null;
	}
    }
}

let user = new User();
let system = new System();

user.add(system);

// User의 상태변화 발생
user.login("sculove");
user.logout();
user.login("crazymonlong");
