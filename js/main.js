$(document).ready(function(){

	function slidePane(buttonId) {
		var pane = $(buttonId);
		var body = $("body");
		function open() {
			pane.toggleClass('activated');
			body.toggleClass("open");
		}
		if(pane.siblings().hasClass("activated")) {
			body.removeClass("open");
			pane.siblings().removeClass("activated");
			open();
		} else {
			open();
		}
		console.log(buttonId , "pressed");
	}
	
	$(".menu").find(".menuItem").click(function(){
		switch(this.id) {
			case "games":
				slidePane("#gameInfo");
				break;
			case "about":
				slidePane("#aboutInfo");
				break;
			case "contact":
				slidePane("#contactInfo");
				break;
			default:
				console.log(" defaults ");
				break;
			}
	});
});
