const $layer = document.getElementById("suggestLayer");

function drawLayer(items) {
    $layer.innerHTML = items.map(user => {
	return `<li class="user">
	    <img src="${user.avatar_url}" width="50px" height="50px"/>
	    <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
	    </li>`
    }).join("");
}
