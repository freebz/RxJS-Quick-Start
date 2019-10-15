fetch("https://swapi.co/api/people/?format=json").then(res => {
    if (res.status === 200) {
	return res.json();
    } else {
	throw new Error("Error");
    }
}).then(jsonData => {
    document.getElementById("users").innerHTML = process(jsonData);
}).catch(e => {
    console.error(e);
});

// 데이터를 처리하는 함수
function process(people) {
    const html = [];
    for (const user of people.results) {
	if (/male|female/.test(user.gender)) {
	let croca;
	let bmi;
	    if (user.gender == "male") {
		broca = (user.height - 100 * 0.9).toFixed(2);
		bmi = (user.height / 100 * user.height / 100 * 22).toFixed(2);
	    } else {
		broca = (user.height - 100 * 0.9).toFixed(2);
		bmi = (user.height / 100 * user.height / 100 * 21).toFixed(2);
	    }
	const obesityUsingBroca = ((user.mass - broca) / broca * 100).toFixed(2);
	const obesityUsingBmi = ((user.mass - bmi) / bmi * 100).toFixed(2);

	html.push(`<li class='card'>
	    <dl>
	        <dt>${user.name} <i class="fa fa-${user.gender}"></i></dt>
		<dd><span>키 : </span><span>${user.height} cm</span></dd>
		<dd><span>몸무게: </span><span>${user.mass} kg</span></dd>
		<dd><span>BROCA 표준체중 : </span><span>${broca} kg</span></dd>
		<dd><span>BROCA 비만도 : ${obesityUsingBroca}</span></dd>
		<dd><span>BMI 표준체중 : </span><span>${bmi} kg</span></dd>
		<dd><span>BMI 비만도 : ${obesityUsingBmi}</span></dd>
	    </dl>
	    </li>`);
	}
    }
    return html.join("");
}
