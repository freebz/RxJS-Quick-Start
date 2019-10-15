class NewsPaper {
  constructor() {
    this._observers = [];
  }
  setNews(news) {
    this.notify(news);
  }
  add(observer) {
    this._observers.push(observer);
  }
  remove(observer) {
    let idx = this._observers.indexOf(observer);
    if (idx !== -1) {
      this._observer.splice(idx, 1);
    }
  }
  notify(news) {
    this._observers.forEach( v => {
      v.update(news);
    });
  }
}
