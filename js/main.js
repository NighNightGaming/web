$(document).ready(function(){

	function slidePane(buttonId) {
		var pane = $(buttonId);
		var body = $("body");
		function open() {
			pane.toggleClass('activated');
			body.toggleClass("open");
		}
		if(pane.siblings().hasClass("activated")) {
			pane.siblings().removeClass("activated");
			body.removeClass("open");
			setTimeout(function() {open()}, 2000);
		} else {
			open();
		}
		console.log(buttonId , "pressed");
	}
	
	$(".menuItem").on('click', function() {slidePane('#' + this.id + 'Info')});
});
