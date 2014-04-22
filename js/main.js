$(document).ready(function(){

	function slidePane(buttonId) {
		var pane = $(buttonId);
		var body = $("body");
		var isOpen = false;
		function open(isOpen) {
			pane.toggleClass('activated', isOpen);
			body.toggleClass("open", isOpen);
			isOpen = true;
		}
		if(isOpen) {
			open(isOpen);
		} else {
			open(!isOpen);
		}
		console.log(buttonId , "pressed");
	}
	
	$(".menuItem").on('click', function() {slidePane('#' + this.id + 'Info')});
});
