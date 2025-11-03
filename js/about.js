$(document).ready(function(){
    //preLoading 숫자퍼센테이지는 연습후...
    setTimeout(function(){
        $('body').addClass('loaded');
    },2500);
    
/*    $("#preLoader").click(function(){
        $('body').addClass('loaded');
    });
    */
    
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	$('.project').each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.6
		})
		.setClassToggle(this, 'fade-in') // add class to project01     
		.addTo(controller);
	});
    
    //타이틀글자 스크롤시 올라가기
    $(window).scroll(function(){
       var wScroll = $(this).scrollTop();        
        $('.bk').css({
          'margin-top' : -(wScroll/30) +'rem'
       });
        $('.wt').css({
          'top' : -8 -(wScroll/30) +'rem'
       });
    });  
    
    // header scrollUp시 내려오기
    $(window).mousewheel(function(e,delta){
        if (delta <0){
        $('#header').removeClass('scroll')
        $('#header #logo').removeClass('scroll')
        $('#header #and-menu').removeClass('scroll');
        }
        else if (delta >0) {
        $('#header').addClass('scroll')
        $('#header #logo').addClass('scroll')
        $('#header #and-menu').addClass('scroll');
        }
    });
    
    // modal window 모달창뜨더라도 메뉴버튼은 남아있게
        $('#header #and-menu').click(function(){
            $('#modal').toggleClass('open');
            $('.modal-window').toggleClass('open');
            $('#header').toggleClass('open');
            $('#header #logo').toggleClass('open');
            $('#header #and-menu').toggleClass('open');
        });
    
    

    
    // loop through each .menu-slideInUp li element
	$('.menu-slideInUp li').each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
            delay:"90%",
//            reverse:false,
			triggerHook: 1
		})
		.setClassToggle(this, 'fade-in') // add class to .menu-slideInUp li  
		.addTo(controller);
	});
    

    
    
    
    
    
    
    
    
    
    
    
    
    
});


















