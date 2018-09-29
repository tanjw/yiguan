$(document).ready(function(){

  //顶部菜单栏滑动事件
	$("#Nav").each(function(){//给fixed添加事件
		var e=$(this);
		var style=e.attr("data-style");
		var top=e.attr("data-offset-fixed");
		if(top==null){top=e.offset().top;}else{top=e.offset().top - parseInt(top);};
		if(style==null){style="fixed-top";};
		
		$(window).bind("scroll",function(){
			var thistop=top - $(window).scrollTop();
			if(style=="fixed-top" && thistop<0){
				e.addClass("fixed-top");
				
			}else{
				e.removeClass("fixed-top");
				
			};
			
			var thisbottom=top - $(window).scrollTop()-$(window).height();//计算高度
			if(style=="fixed-top" && thisbottom>0){
				e.addClass("fixed-bottom");//添加样式fixed-bottom
			}else{
				e.removeClass("fixed-bottom");//移除样式fixed-bottom
			};
		});

	});
	
	//黑色顶部菜单栏滑动事件
	$("#Nav_black").each(function(){//给fixed添加事件
		var e=$(this);
		var style=e.attr("data-style");
		var top=e.attr("data-offset-fixed");
		if(top==null){top=e.offset().top;}else{top=e.offset().top - parseInt(top);};
		if(style==null){style="fixed-top2";};
		
		$(window).bind("scroll",function(){
			var thistop=top - $(window).scrollTop();
			if(style=="fixed-top2" && thistop<0){
				e.addClass("fixed-top2");
				$(".About_bg").css("margin-top", "78px");
				
			}else{
				e.removeClass("fixed-top2");
				$(".About_bg").css("margin-top", "0");
			};
			
			var thisbottom=top - $(window).scrollTop()-$(window).height();//计算高度
			if(style=="fixed-bottom2" && thisbottom>0){
				e.addClass("fixed-bottom2");//添加样式fixed-bottom
			}else{
				e.removeClass("fixed-bottom2");//移除样式fixed-bottom
			};
		});

	});

	//by Michael
	$(".About_leftlist>ul>li>a").click(
		function() {
			if ($(this).parent().hasClass("about_on")) {
				$(this).siblings("ul").slideToggle();
			} else {
				$(".About_leftlist li").removeClass("about_on");
				$(".About_leftlist li ul").slideUp();
				$(this).parent().addClass("about_on");
				$(this).siblings("ul").slideDown();
			}
		}
	);
	
	$(function(){
		var gtHeight = $("#Nav_black").outerHeight()+$(".About_leftlist").outerHeight()+$(".border-b").outerHeight()+$(".Adress_center").outerHeight();
		if ($(window).height() > gtHeight) {
			$(".About_leftlist").css("position","fixed");
		} else {
			$(".About_leftlist").css("position","relative");
		}
	});
	
	$(".About_leftlist li li a").click(function(){
		$("html,body").animate({scrollTop: $($(this).attr("href")).offset().top- 191 + "px"}, 1000);
	});
	
});