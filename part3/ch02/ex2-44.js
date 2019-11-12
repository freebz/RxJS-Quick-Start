render(buses, { name }) {
    const list = buses.map(bus => (`<dd>
            <a href="#">
	        <strong>${bus.routeName}</strong> <span>${bus.regionName}</span>
		<span class="type ${getBuesType(bus.routeTypeName)}">${bus.routeTypeName}</span>
	    </a>
        </dd>`)).join("");

    return `<dl class="bus-routes">
	<dt>strong>${name}</strong></dt>${list}
    </dl>`;
}
