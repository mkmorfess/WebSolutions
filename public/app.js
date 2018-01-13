
$(document).ready(function(){


	$("#about").click(function() {
	stopAnimate();
    $('html,body').animate({
        scrollTop: $("#about-section").offset().top},
        2000);
});

	$("#port").click(function() {
	stopAnimate();
    $('html,body').animate({
        scrollTop: $("#port-section").offset().top},
        2000);
});

	$("#contact").click(function() {
	stopAnimate();
    $('html,body').animate({
        scrollTop: $("#contact-section").offset().top},
        2000);
});



$(".slider").bxSlider();

$("#contact-form").on("submit", function(){
var clientInfo = [$("#fname").val().trim(), $("#lname").val().trim(), $("#email").val().trim(), $("#phone").val().trim(), $("#message").val().trim()]
   
$.ajax("/", {
            type: "POST",
            data: clientInfo
          }).then(
            function() {
              console.log("Added new client");
              
              location.reload();

              $("#fname").val("")
              $("#lname").val("") 
              $("#email").val("")

              $("#phone").val("") 
              $("#message").val("")


            }
          );
         })

var fading = false;
var timedFade;


function animateDiv() {

	slideDiv();
	// timedFade = setInterval(slideDiv, 15000);

	function slideDiv() {

		$(".para-header").slideUp(3000, function(){
			$("#dev").text("//CREATIVE");
			$("#full").text("//MOTIVATED")
			$("#prog").text("//COMMITTED")
			$(".para-header").slideDown(2000)
			$(".para-header").slideUp(3000, function(){
				$("#dev").text("//PRODUCTIVE");
				$("#full").text("//PROACTIVE");
				$("#prog").text("//ACHIEVER");
				$(".para-header").slideDown(2000)
				$(".para-header").slideUp(3000, function(){
					$("#dev").text("//DEVELOPER");
					$("#full").text("//FULL-STACK");
					$("#prog").text("//PROGRAMMER");
					$(".para-header").slideDown(2000, function(){
						fading = false;
					})

				});
			})
	})


	}
}

function intervalDiv() {

	fadeDiv();

	timedFade = setInterval(fadeDiv, 5000);
	

	function fadeDiv() {


	$("#dev").fadeOut(2000).fadeIn(3000);
	
	$("#full").fadeOut(3000).fadeIn(2000);
	
	$("#prog").fadeOut(4000).fadeIn(1000);
	
	
	}
}


function stopAnimate() {

	$("#dev").finish();
	$("#full").finish();
	$("#prog").finish();
	$(".para-header").finish();


}

	$("#dev").on("click", function(){

		if (fading === false) {

			fading = true;
			intervalDiv();
			
			console.log(fading);
			
		}

		else if (fading === true) {

			fading = false;
			clearInterval(timedFade);
			
			stopAnimate();
			console.log(fading);

		}

		else {
			console.log("Error");
		}	

	});


	$("#full").on("click", function(){

		if (fading === false) {

			fading = true;
			animateDiv();
			console.log(fading);
			
		}

		else if (fading === true) {

			fading = false;
			clearInterval(timedFade);
			stopAnimate();
			
			console.log(fading);

		}

		else {
			console.log("Error");
		}	

	});

 });	
