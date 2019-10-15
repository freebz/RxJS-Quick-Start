function process(people) {
    const html = [];
    for (const user of people.results) {
	if (/male|female/.test(user.gender)) {
	    const result = logic(user.height, user.mass, user.gender);
	    Object.assign(user, result);
	    html.push(makeHtml(user));
	}
    }
    return html.join("");
}
