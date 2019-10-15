setNews(news) {
    try {
	throw new Error("NewsPaper Error"); // 에러 발생.

	this.notify(name);
    } catch(e) {
	// 다시 시도~!
	this.notify(name);
    }
}
