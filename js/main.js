$(document).ready(function(){
	$("nav").find("li").click(function(){
		console.log("Hey you're clickin" + $(this.id));
		switch(this.id) {
			case "games":
				if($("#gameInfo").siblings().hasClass("activated")) 
				{
					$("body").removeClass("open");
					$("#gameInfo").siblings().removeClass("activated");
				}
				console.log("Game pressed");
				$("#gameInfo").toggleClass('activated');
				$("body").toggleClass("open");
				window.location = "#games";
				break;
			case "about":
				if($("#aboutInfo").siblings().hasClass("activated")) 
				{
					$("body").removeClass("open");
					$("#aboutInfo").siblings().removeClass("activated");
				}
				console.log("About pressed");	
				$("#aboutInfo").toggleClass('activated');
				$("body").toggleClass("open");
				window.location = "#about";
				break;
			case "contact":
				if($("#contactInfo").siblings().hasClass("activated"))
				{
					$("body").removeClass("open");
					$("#contactInfo").siblings().removeClass("activated");
				}
				console.log("Contact pressed");
				$("#contactInfo").toggleClass('activated');
				$("body").toggleClass("open");
				window.location = "#contact";
				break;
			default:
				console.log(" defaults ");
				break;
			}
	});
});
