
$(document).ready(function(){


	$("#home").click(function() {
	stopAnimate();
	$(".nav-background").css("visibility", "hidden")
    $('html,body').animate({
        scrollTop: $("#home-section").offset().top},
        2000, function(){
        	$(".nav-background").css("visibility", "visible")
        });
});

	$("#about").click(function() {
	stopAnimate();
	$(".nav-background").css("visibility", "hidden")
    $('html,body').animate({
        scrollTop: $("#about-scroll").offset().top},
        2000, function(){
        	$(".nav-background").css("visibility", "visible")
        });
});
//
	$("#port").click(function() {
	stopAnimate();
	$(".nav-background").css("visibility", "hidden")
    $('html,body').animate({
        scrollTop: $("#port-scroll").offset().top},
        2000, function(){
        	$(".nav-background").css("visibility", "visible")
        });
});

	$("#contact").click(function() {
	stopAnimate();
	$(".nav-background").css("visibility", "hidden")
    $('html,body').animate({
        scrollTop: $("#contact-scroll").offset().top},
        2000, function(){
        	$(".nav-background").css("visibility", "visible")
        });
});

$("#socialmedia").click(function() {
	stopAnimate();
	$(".nav-background").css("visibility", "hidden")
    $('html,body').animate({
        scrollTop: $("#social-scroll").offset().top},
        2000, function(){
        	$(".nav-background").css("visibility", "visible")
        });
});



$(function(){
  $('.slider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 800,
    slideMargin: 0,
    adaptiveHeight: true
  });
});

$("#contact-form").submit(function(e){
e.preventDefault();

var clientInfo = {
	fname: $("#fname").val().trim(),
	lname: $("#lname").val().trim(), 
	email: $("#email").val().trim(), 
	phone: $("#phone").val().trim(), 
	message: $("#message").val().trim()
}

$.ajax("/", {
            type: "POST",
            data: clientInfo
          }).then(
            function() {
              console.log("Added new client");

              $("#fname").val("")
              $("#lname").val("") 
              $("#email").val("")
              $("#phone").val("") 
              $("#message").val("")

              $(".messages").css("visibility", "visible")

              $(".messages").fadeOut(7000, function(){
              	$(".messages").css("visibility", "hidden")
              })



            }
          );
         })



var background = true;
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

// function changeBackground() {

// 	if (background === true) {
// 		changeNow();
// 		background = false;
// 	}
// 	else if (background === false) {
// 		changeBack();
// 	}

// 	else {
// 		console.log("Error")
// 	}

// 	function changeNow() {

// 		$("#prog").click(function(){
//     		$("#para-header").animate({right: '250px'});
// 		}); 
// 	}

// }


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


// $("#prog").on("click", function(){	
//  	if (fading === false) {

// 			fading = true;
// 			changeBackground();
// 			console.log(fading);
			
// 		}

// 		else if (fading === true) {

// 			fading = false;
// 			clearInterval(timedFade);
// 			stopAnimate();
			
// 			console.log(fading);

// 		}

// 		else {
// 			console.log("Error");
// 		}	
//  });


 });

