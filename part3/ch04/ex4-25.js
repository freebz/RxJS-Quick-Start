export default class Sidebar {
    constructor($sidebar) {
	this.$sidebar = $sidebar;
	this.$list = $sidebar.querySelector("ul");
	this.$title = $sidebar.querySelector(".title");
    }
};
