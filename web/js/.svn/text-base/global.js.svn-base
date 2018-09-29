Zepto(function($){
	
	// 搜索医生
//	$('.search .submit').click(function(){
//		var keyword = $('.keyword');
//		if(keyword.val() == '请输入医生姓名进行搜索' || keyword.val() == '') {
//			keyword.trigger('focus');
//			return false;
//		}
//		
//	})
	// 导航
  $('.navico').click(function(){
	  $('nav').append('<div class="overlay"></div>');
	  $('.menu, .overlay').show();
	  $('body').css('position','fixed');
	  $('.page').addClass('blur');
	  $('nav').css({
		  'position':'fixed',
		  'height':$(window).height(), 
		  'width':'100%',
		  'overflow': 'scroll',
		  'z-index': '9'
		 });
  })
  
  //关闭导航
  $('.close').click(function(){
	  $(this).parent().hide();	
	  $('body').css('position','');
	  $('.page').removeClass('blur');
	  $('nav').css({
		  'position':'',
		  'height':'', 
		  'width':'',
		  'overflow': '',
		  'z-index': ''
		 });
	  $('.overlay').hide().remove();
  })
  
 
   
   // 上滑缩小
     
// $(window).bind("scroll", function() {
//	 
// 	var trans = $('#trans');
// 	if($(window).scrollTop() > 1){
// 		if(trans.length){
// 			trans.addClass('fixed').find('.doctor').addClass('mindoctor');
// 			$('.page').css({'padding':'216px 45px 30px 45px'} );
// 			$(".photo").children('img').attr("src",$("#doctor_avatar").val());
// 			$('body').css('min-height',$(window).height());
// 		}
// 		
// 		
// 		
// 		
// 	}else{
// 		if(trans.length){
// 		 	trans.removeClass('fixed').find('.doctor').removeClass('mindoctor');	
// 			$('.page').css({'padding':'30px 45px'} );
// 			$(".photo").children('img').attr("src",$("#doctor_avatar_half").val());
// 		}
// 		
// 	}
// 		 
// }); 
  
  
  $('.chatform').show();	
	$('.chatform textarea').focus(function(){
			$('.chatform').css('bottom','');	
	}).blur(function(){
			$('.chatform').css('bottom',0);	
	});
	
	
//  选项卡	
function tabs(tab,content){
	tab.eq(0).addClass('on');   
	content.eq(0).show();

	tab.click(function(e){
		tab.removeAttr('class');	
		$(this).addClass('on');
		content.hide();						
		content.eq($(this).index()).show();
		e.preventDefault();
	});	
}

tabs($('.grid a'), $('.results li'));
	
tabs($('.tab a'), $('.items ul'));




 //  弹出层
$.extend($.fn, {
    popup: function() {
	$(this).click(function(e) {
		var pop_id = $(this).attr("href");
		if(pop_id == '' || pop_id == '#')
		return false; 
		$('body').css('position','fixed');
		$(pop_id).show();
		var left =  ($(window).width() - $(pop_id).find('.mid').width())/2;
		var top = ($(window).height() - $(pop_id).find('.mid').height())/2;
		if(left < 0 ) left = 0;
		if(top < 100) top = 100;
		$(pop_id).find('.mid').css({
    		"left":left,
        	"top": top,
		});  
	 e.preventDefault();
	})
	}
});

$('a[rel=pop]').popup();

$(".closepop").click(function(e){
          $(this).parent().hide(); 
		  $('body').css('position','');             
});



//返回页面，弹出层自动显示
$('.mid').each(function(){

	var left =  ($(window).width() - $(this).width()) / 2;
	var top = 	($(window).height() - $(this).height()) / 2;
	if(left < 0 ) left = 0;
	if(top < 100) top = 100;
	$(this).css({
 		"left":left,
     	"top": top,
	});
	$(".pop").each(function(){
		if ( $(this).css('display') == 'block')
		$('body').css('position','fixed');
		
	})
} )






// 预约，选择时间段
$('.hours span').not('.invalid').click(function(e){
	$('.hours span').removeClass('selected');
	$(this).addClass('selected');
	$('.hour').val($('.hours').find('.selected').attr("value")); //获取预约时间到隐藏的表单
	$('.hours .confirm').attr('href','#appt_info'); // 选择时间才允许冒泡
})


//取消，重新选择时间
$('.hours .cancel').click(function(){
	$('.hours span').removeClass('selected');
	$('.hours .confirm').attr('href','#');
})


// 最后一个医生名字，不要顿号
$(window).resize(function() {
	var lis  = 0;
   	$('.right_cell  b').each(function() {
    	 
        if($(this).prev().length > 0) {
        	if($(this).position().top != $(this).prev().position().top)  
               		$(this).prev().addClass("enditem");
             
         
        } 
		if(!$(this).next().length > 0)  
            	$(this).addClass("enditem");
    });
}).resize();


$('.ticket').not('.expire').click(function(){ 
	$('.ticket').removeClass('choose');
	$(this).addClass('choose');
})

$('.ticket').children('a').click(function(e) {
	if($(this).parent().hasClass('choose')){
	var tid = $(this).parent().attr('tid');
	var tval = $(this).parent().attr('tval');
	var gift_name = $(this).parent().attr('gift_name');
	$('.ticket_id').val(tid);
	$('.used').text('已使用'+gift_name+'礼券');
	$(".closepop").click();
	}
  	//return false;
});

$('#tickets .cancel').click(function(){
	$('.ticket').removeClass('choose');
 	$('#promo .used').text('');
})

$('.myinfo input').focus(function(){
 	$('.update').css('display','block');
});


$('.get_vcode').click(function(){
	var mobile = $('.mobile').val();
	 var reg = /^0?1[3|4|5|8][0-9]\d{8}$/; 
	 if (!reg.test(mobile)){
		$(this).text('手机号错误');
		$('.mobile').focus();
		return false;	 
	}
	
	if($(this).attr('status') == 'sent'){
		$(this).text('验证码已发');	
		return false;
	}
	 
	$(this).text('请稍等...');
	$(this).load('get_vcode.php?mobile='+ mobile);
	$(this).attr('status','sent');
	return false;
})



$('.records .btn').click(function(){ 
 	$('.sid').val($(this).parent().attr('sid'));
})

$('.private, .public').click(function(){ 
 	$('.doc_id').val($(this).parent().attr('doc_id'));
})


$('#private .cancel').click(function(){
	$(".closepop").click();
})

$('.chat').css('min-height',$(window).height()-87);


if($('.loading').length){
var pagenum = 2;

$(window).scroll(function(){
	
	if( ( $(document).height() - $(window).height() - $(window).scrollTop() )  > 10){
		
    	if(!$('.nomore').length){
			getdata(url,pagenum);
			pagenum ++;
		}
    }
}); 
}

function getdata(url,pagenum){ 
	$.ajax({
    	url: url+"page=" +  pagenum,
        type:'POST',
        before: $('.loading').show(), 
        success: function(html){
        	
			if(html == 'nomore'){
				$('.loading').addClass('nomore').text('没有更多了').show();
				return false;
			}else{
				$('.loading').hide();
				$('.loading').prev().append(html); 
				$('.loading').attr('page',pagenum);
			}
       		
        }
   });
}
 
})// dom ready
 