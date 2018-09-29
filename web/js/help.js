$(document).ready(function(){
	$(".About_leftlist li li a").click(function(){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top- 191 + "px"}, 1000);
	});
});