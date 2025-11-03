$(document).ready(function(){
    //preLoading 숫자퍼센테이지는 나중에......더 연습해보고...
    setTimeout(function(){
        $('body').addClass('loaded');
    },5500);
    
    $("#preLoader").click(function(){
        $('body').addClass('loaded');
    });
    
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	$('.project').each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1
		})
		.setClassToggle(this, 'fade-in') // add class to project01       
		.addTo(controller);
	});

        // modal window 모달창뜨더라도 메뉴버튼은 남아있게!!!!
        $('#header #and-menu').click(function(){
            $('#modal').toggleClass('open');
            $('.modal-window').toggleClass('open');
            $('#header').toggleClass('open');
            $('#header #logo').toggleClass('open');
            $('#header #and-menu').toggleClass('open');
        });
    
    
    // .class fade-in
	$('.class').each(function(){
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
            delay:"100%",
//            reverse:false,
			triggerHook: 1
		})
		.setClassToggle(this, 'fade-in') // add class to project01
        
/*		.addIndicators({ 
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'red'
		}) // this requires a plugin
*/        
		.addTo(controller);
	});
    
    
    
    // build tween1
    var setImg1 = new TimelineMax();
    setImg1
    .from('#project01 .img-wrapper', 6,{
        xPercent:-500,
        ease:Cubic.easeOut
    })
    .to('#project01 .img-wrapper', 6,{
        xPercent:0,
        ease:Cubic.easeOut
    })
    
    //build setImg scene1
    var imgScene1 = new ScrollMagic.Scene({
        duration:'200%'
    })
    .setTween(setImg1)
    .triggerElement($('#project01')[0])
 //   .addIndicators({name:"img-moving"})
    .addTo(controller);
  
    
// build tween2
     var setImg2 = new TimelineMax();
    setImg2
    .from('#project02 .img-wrapper', 5,{
        xPercent:500,
        ease:Cubic.easeOut
    })
    .to('#project02 .img-wrapper', 5,{
        xPercent:0,
        ease:Cubic.easeOut
    })
    
    //build setImg scene2
    var imgScene2 = new ScrollMagic.Scene({
        duration:'130%'
    })
    .setTween(setImg2)
    .triggerElement($('#project02')[0])
  //  .addIndicators({name:"img-moving"})
    .addTo(controller);
     
    
// build tween3
     var setInfo1 = new TimelineMax();
     setInfo1
     .from('.info-center', 5,{
         xPercent:100,
         yPercent: -500,
         opacity:0,
         scale:0,
         ease: Cubic.easeOut
    })
     .to('.info-center', 5, {
         opacity: 1, 
         xPercent:0,
         yPercent: 0, 
         scale: 1}, '0');
    
    //build setImg scene2
    var textScene = new ScrollMagic.Scene({
        duration:'200%'
    })
    .setTween(setInfo1)
    .triggerElement($('#project01')[0])
 //   .addIndicators({name:"info-moving"})
    .addTo(controller);    


// build tween4
     var setInfo2 = new TimelineMax();
     setInfo2
    .from('.info-left', 10,{
         xPercent: -500,
         opacity:0,
         ease: Cubic.easeOut
    })
    .to('.info-left', 10,{
         xPercent: 0,
         opacity:1,
         ease: Cubic.easeOut
    });
    
    //build setImg scene2
    var textScene = new ScrollMagic.Scene({
        duration:'150%'
    })
    .setTween(setInfo2)
    .triggerElement($('#project02')[0])
 //   .addIndicators({name:"info-moving"})
    .addTo(controller);    
    
    
    
// 인덱스번호에 따라 차례로 하나씩 올라오게 해!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
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
        
/*		.addIndicators({ 
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'red'
		}) // this requires a plugin
*/        
		.addTo(controller);
	});
    

    
    
    
    
    
    
    
    
    
    
    
    
    
});


















