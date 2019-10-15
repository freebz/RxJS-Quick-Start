function getHTML(user) {
    user.name = user.name + " 님";
    return `<li class='card'>
	<dl>
	    <dt>${user.name} <i class="fa fa-${user.gender}"></i></dt>
	    <dd><span>키 : </span><span>${user.height} cm</span></dd>
	    <dd><span>몸무게: </span><span>${user.mass} kg</span></dd>
	    <dd><span>BROCA 표준체중 : </span><span>${user.broca} kg</span></dd>
	    <dd><span>BROCA 비만도 : ${user.obesityUsingBroca}</span></dd>
            <dd><span>BMI 표준체중 : </span><span>${user.bmi} kg</span></dd>
    	    <dd><span>BMI 비만도 : ${user.obesityUsingBmi}</span></dd>
	</dl>
    </li>`;
}
