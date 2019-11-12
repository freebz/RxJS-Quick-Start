render(buses) {
    this.$layer.innerHTML = buses.map(bus => {
	return `<li>
	<a href="#">
	    <strong>${bus.routeName}</strong>
	    <span>${bus.regionName}</span>
	    <div>${bus.routeTypeName}</div>
	</a>
	</li>`;
    }).join("");
    this.$layer.style.display = "block";
}
