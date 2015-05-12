$(document).ready(function() {
	
	var points = 0;

	var isCorrectAnswer = function() {
		$('#popUp').find(".correct").removeClass("hide");
		points++;
	}	

	var isWrongAnswer = function(){
		$('#popUp').find(".incorrect").removeClass("hide");
	}

	$('#pictures').on('click', '[data-id="btp"]', isCorrectAnswer);
	$('#pictures').on('click', '[data-id="briewood"]', isWrongAnswer);
	$('#pictures').on('click', '[data-id="wando"]', isWrongAnswer); 
 	/*
		var picture = $(this);
		var picId = picture.data("id");

		var correctAnswer = "btp";
		


		//If img of li is clicked

		//verify the data 
		// console.log(picId + "===" + correctAnswer);
		// if (picId === correctAnswer) {
		// 	$('#popUp').find(".correct").removeClass("hide");
		// 	points++; 

		// 	var totalPoints = $(".points").find("p").append(points);
		// 	console.log("clicked");
		// } else { 
		// 	$('#popUp').find(".incorrect").removeClass("hide");
		// }
		// console.log("clicked"); 

		$('#pictures').on("click", "picture" isCorrectAnswer);
		$('#pictures').on("click", "picture" isWrongAnswer);
		
	});
	*/
	$('button').on('click', '.next', function(){
		$.ajax('level1.html', { 
			success: function(response) {
			$('#level1').html(response).slideDown();
	 		}
		});
	});


});
