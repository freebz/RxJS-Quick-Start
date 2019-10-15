let newsPaper = new NewsPaper();

// 구독하기
newsPaper.add(new NewsScrapper());
newsPaper.add(new NewsReader());

// 상태 변경
newsPaper.setNews("북한 미사일 발사!!!");
newsPaper.setNews("코스피 최저점 이탈!!!");
newsPaper.setNews("남북평화회담 성사");
newsPaper.setNews("남북통일");
