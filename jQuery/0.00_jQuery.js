$(document).ready(function(){
	$("#hide").click(function(){
		$("#image").hide();
	});


	$("#show").click(function(){
		$("#image").show();
	})
	$("#fadeIn").click(function(){
	$("#image").fadeIn(10000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 1000}, 1000)
	})

	$("#slideUp").click(function(){
		$("#image").slideUp(2000)
	})

	$("#slideDown").click(function(){
		$("#image").slideDown(2000)
	})

	$("#bounce").click(function(){
		$("image").bounce(10000)
	})
});