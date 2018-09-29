

/*
 * iDistribution JavaScript v2015
 * Copyright 2015 Ingend Tech. All rights reserved.
 * http://www.ingend.com 
 *
 * Author: MichaelTotem
 * Updated: Fri Jul 10 10:09 2015
 */

$(document).ready(function() {
	
	//Reset main, left and right height
	$("#left").css("height",$(window).height()-$("#globalheader").outerHeight()+"px");
	$("#right").css("height",$(window).height()-$("#globalheader").outerHeight()+"px");
	//Reset leftmenu height
	$(".ml-menu").css("height",$(window).height()-$("#globalheader").outerHeight()-$(".mlm-scroll").outerHeight()+"px");
	//Reset mr-box height
	$(".mr-box").css("height",$(window).height()-$("#globalheader").outerHeight()-$(".mr-footer").outerHeight()-30+"px");
	$(".taskpkg-box").css("height",$(window).height()-$("#globalheader").outerHeight()-$(".mr-footer").outerHeight()-60-$("h1").outerHeight()-$(".mr-control").outerHeight()-25+"px");
	
	$(window).resize(function() {
		$("#left").css("height",$(window).height()-$("#globalheader").outerHeight()+"px");
		$("#right").css("height",$(window).height()-$("#globalheader").outerHeight()+"px");
		$(".ml-menu").css("height",$(window).height()-$("#globalheader").outerHeight()-$(".mlm-scroll").outerHeight()+"px");
		$(".mr-box").css("height",$(window).height()-$("#globalheader").outerHeight()-$(".mr-footer").outerHeight()-30+"px");
	});
	
	//Hide and show quicknav delete button
	$("#gn-menu li").hover(
		function() {
			$(this).children(".gnm-del").show();
		},
		function() {
			$(this).children(".gnm-del").hide();
		}
	);
	
	//Hide and show left menu
	$(".gnt-leftmenu").toggle(
		function() {
			$("#left").animate({left: -181}, "");
			$("#right").animate({left: -181}, "").css("width", "100%");
		},
		function() {
			$("#left").animate({left: 0}, "");
			$("#right").animate({left: 0}, "").css("width", "auto");
		}
	);
	
	//Hide and show topleft logo
	$(".gnt-topleftlogo").toggle(
		function() {
			$("#gn-logo").animate({left: -181}, "");
			$("ul#gn-menu, .gnm-scroll").animate({left: -181}, "");
		},
		function() {
			$("#gn-logo").animate({left: 0}, "");
			$("ul#gn-menu, .gnm-scroll").animate({left: 0}, "");
		}
	);
	
	
	//Left tree hide and show menus
	$(".ml-menu li span").click(
		function() {
			if ($(this).hasClass("cur")) {
				$(this).next("ul").slideToggle();
			} else {
				$(".ml-menu li span").removeClass("cur");
				$(".ml-menu li ul").slideUp();
				$(this).addClass("cur");
				$(this).next("ul").slideDown();	
			}
		}
	);
	
	//Reset tabs style
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("tabs-bar-cap");
		$("ul.tabs li").addClass("tabs-bar");
		$(this).removeClass("tabs-bar");
		$(this).addClass("tabs-bar-cap");
	});

});

//Show and hide tabs content
function showHideTabs(id) {
	if ($('#'+id).css("display")=="none") {
		$('.tabCont').hide();
		$('#'+id).show();
	}
}