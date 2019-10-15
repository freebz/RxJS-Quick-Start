class NewsScrapper {
    update(news) {
	if (news === "뉴스서비스 종료") {
	    console.log("뉴스 스크랩 서비스가 종료되었음");
	} else {
	    console.log(`뉴스를 스크랩하자 - ${news}`);
	}
    }
};

class NewsReader {
    update(news) {
	if(news === "뉴스서비스 종료") {
	    console.log("뉴스 읽는 서비스가 종료되었음");
	} else {
	    console.log(`뉴스를 읽자 - ${news}`);
	}
    }
}

// NewsScrapper 구독
newsPaper.add(new NewsScrapper());
// NewsReader 구독
newsPaper.add(new NewsReader());

// 상태 변경
newsPaper.setNews("북한 미사일 발사!!!");
//...

// 종료시
newsPaper.setNews("뉴스서비스 종료");
