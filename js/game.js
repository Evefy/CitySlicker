$(document).ready(function() {
	$('.pictures').on('click', function() {
		//alert('Clicked');
		$('.popUp').find("div").removeClass("hide");
		console.log("clicked");
	});
});
