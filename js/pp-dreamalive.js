$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#af3f48', '#636e5d', '#709fac', '#fff'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': 'transparent',
            'position': 'right'
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction) {
            //fading out the txt of the leaving section
            $('.section').eq(index - 1).find('h1, h2, .exp, .slide-button').fadeOut(1000, 'easeInQuart');
            //fading in the text of the destination (in case it was fadedOut)
            $('.section').eq(nextIndex - 1).find('h1, h2, .exp, .slide-button').fadeIn(1000, 'easeInQuart');
            //reaching our last section? The one with our normal site?
            if (nextIndex == 5) {
              $('#arrow').hide();
              //fading out navigation bullets
              $('#pp-nav').fadeOut();
              $('#section4').find('.content').animate({
                top: '0%'
              }, 700, 'easeInQuart');
            }
            //leaving our last section? The one with our normal site?
            if (index == 5) {
              // $('#arrow').show();
              //fadding in navigation bullets
              $('#pp-nav').fadeIn();
              $('#section4 .content').animate({
                top: '100%'
              }, 700, 'easeInQuart');
            }
            if ($('#section4').hasClass('active')) {
                $('#header #logo, #header #and-menu').removeClass('slide');
                $('#header #logo, #header #and-menu').addClass('scroll');
              setTimeout(function() {
                $('.large-intro-text').addClass('ready');
              }, 1000);
              setTimeout(function() {
                $('.reveal-image').addClass('ready');
              }, 1400);
            } else {
                 $('#header #logo, #header #and-menu').removeClass('scroll');
                 $('#header #logo, #header #and-menu').addClass('slide');
            }
          },
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});