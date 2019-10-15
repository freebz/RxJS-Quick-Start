class WriterAndReader {
    constructor(newsPaper) {
	this._newPaper = newsPaper;
    }
    update(news) {
	console.log(`전달 받은 뉴스 - ${news}`);
	this._newPaper.setNews(`변형된 뉴스 - ${news}`);
    }
};

// WriterAndReader 구독
newsPaper.add(new WriterAndReader(newsPaper));

// 상태 변경
newsPaper.setNews("북한 미사일 발사!!!");
