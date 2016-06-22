// Empty JS for your own code to be here


$(document).ready(function() {
	$menuLeft = $('.ham-menu');
	$nav_list = $('.act');
	
	$nav_list.click(function() {
		$(this).toggleClass('pushmenu-push-toright');
		$menuLeft.toggleClass('push-left');
	});
});