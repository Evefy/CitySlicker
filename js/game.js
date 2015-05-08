$(document).ready(function() {
		var points = 0;
	$('.picture').on('click', function() {

		var picture = $(this);
		var picId = picture.data("id");
		var correctAnswer = "btp";
	

		//If img of li is clicked

		//verify the data 
		console.log(picId + "===" + correctAnswer);
		if (picId === correctAnswer) {
			$('#popUp').find(".correct").removeClass("hide");
			points = points + 1;
			console.log(points);

			console.log("clicked");
		} else { 
			$('#popUp').find(".incorrect").removeClass("hide");
		}
		console.log("clicked"); 

		
	});
});
