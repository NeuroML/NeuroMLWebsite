// Jquery with no conflict
jQuery(document).ready(function($) {
	
	// nivo slider ------------------------------------------------------ //
	
	$('#slider').nivoSlider({
		effect:'slideInLeft', //Specify sets like: 'fold,fade,sliceDown'
        slices:15,
        animSpeed:500, //Slide transition speed
        pauseTime:5000,
        startSlide:0, //Set starting Slide (0 index)
        directionNav:true, //Next & Prev
        directionNavHide:true, //Only show on hover
        controlNav:true, //1,2,3...
        controlNavThumbs:false, //Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, //Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', //Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
        keyboardNav:true, //Use left & right arrows
        pauseOnHover:true, //Stop animation while hovering
        manualAdvance: false, //Force manual transitions
        captionOpacity:0.7 //Universal caption opacity
	});
	
	// Poshytips ------------------------------------------------------ //
	
    $('.poshytip').poshytip({
    	className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: false
    });
    
    
    // Poshytips Forms ------------------------------------------------------ //
    
    $('.form-poshytip').poshytip({
		className: 'tip-yellowsimple',
		showOn: 'focus',
		alignTo: 'target',
		alignX: 'right',
		alignY: 'center',
		offsetX: 5
	});
	
	// Superfish menu ------------------------------------------------------ //
	
	$("ul.sf-menu").superfish({ 
        animation: {height:'show'},   // slide-down effect without fade-in 
        delay:     800 ,              // 1.2 second delay on mouseout 
        autoArrows:  false
    });
    
    // Scroll to top ------------------------------------------------------ //
    
	$('#to-top').click(function(){
		$.scrollTo( {top:'0px', left:'0px'}, 300 );
	});
		
	// Submenu rollover --------------------------------------------- //
	
	$("ul.sf-menu>li>ul li").hover(function() { 
		// on rollover	
		$(this).children('a').children('span').stop().animate({ 
			marginLeft: "3" 
		}, "fast");
	} , function() { 
		// on out
		$(this).children('a').children('span').stop().animate({
			marginLeft: "0" 
		}, "fast");
	});
	
	// Tweet Feed ------------------------------------------------------ //
	
    $("#tweets").tweet({
//modpath: '/twitter/index.php',       
 count: 5,
        username: "veereev",
 loading_text : "",
        callback: tweet_cycle
    });


/*	
$.getJSON('twitter/twitter-proxy.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=veereev&count=3'), function(d){
// Some magic here
$("#tweets").tweet({

 count: 3,
        username: "veereev",
 loading_text : "loading tweets..",
        callback: tweet_cycle
    });
     

});

*/

	// Tweet arrows rollover --------------------------------------------- //
	
	$("#twitter #prev-tweet").hover(function() { 
		// on rollover
//alert("veer");
		$(this).stop().animate({ 
			left: "27" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			left: "30" 
		}, "fast");
	});
	
	$("#twitter #next-tweet").hover(function() { 
		// on rollover	
		$(this).stop().animate({ 
			right: "27" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			right: "30" 
		}, "fast");
	});
	
	// Tweet cycle --------------------------------------------- //
	
	function tweet_cycle(){
    	$('#tweets .tweet_list').cycle({ 
			fx:     'scrollHorz', 
			speed:  500, 
			timeout: 0, 
			pause: 1,
			next:   '#twitter #next-tweet', 
			prev:   '#twitter #prev-tweet' 
		});
	}
tweet_cycle();	
	// tabs ------------------------------------------------------ //
	
	$("ul.tabs").tabs("div.panes > div", {effect: 'fade'});
	
	// Thumbs rollover --------------------------------------------- //
	
	$('.thumbs-rollover li a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.5" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
		
	
	// Blog posts rollover --------------------------------------------- //
	
	$('#posts .post').hover(function(){
		// on rollover
		$(this).children('.thumb-shadow').children('.post-thumbnail').children(".cover").stop().animate({ 
			left: "312"
		}, "fast");
	} , function() { 
		// on out
		$(this).children('.thumb-shadow').children('.post-thumbnail').children(".cover").stop().animate({
			left: "0" 
		}, "fast");
	});
	
	// Portfolio projects rollover --------------------------------------------- //
	
	$('#projects-list .project').hover(function(){
		// on rollover
		$(this).children('.project-shadow').children('.project-thumbnail').children(".cover").stop().animate({ 
			top: "133"
		}, "fast");
	} , function() { 
		// on out
		$(this).children('.project-shadow').children('.project-thumbnail').children(".cover").stop().animate({
			top: "0" 
		}, "fast");
	});
	
	// Sidebar rollover --------------------------------------------------- //

	$('#sidebar>li>ul>li').hover(function(){
		// over
		$(this).children('a').stop().animate({ marginLeft: "5"	}, "fast");
	} , function(){
		// out
		$(this).children('a').stop().animate({marginLeft: "0"}, "fast");
	});
	
	// Fancybox --------------------------------------------------- //
	
/*	$("a.fancybox").fancybox({ 
		'overlayColor':	'#000'
	});
	
*/
$("a.fancybox").live("hover",
        function()
        {$("a.fancybox").fancybox({
        'speedIn'           : 600, 
        'speedOut'          : 200, 
        'overlayShow'       : false,
        'autoDimensions'    : false,
        'width'             : 620,
        'height'            : 'auto',
        'overlayShow'       : true,
        'overlayOpacity'    : 0.8,
        'overlayColor'      : '#ccc'
        });
        });



$("a[href *= '.jsp']").live("hover",
function(){
$("a[href *= '.jsp']").fancybox({
    'width'         : 800,
    'height'        : 800,
    'autoScale'     : false,
    'transitionIn'  : 'none',
    'transitionOut' : 'none',
    'type'          : 'iframe'
});
});












	// pretty photo  ------------------------------------------------------ //
	
	$("a[rel^='prettyPhoto']").prettyPhoto();


	// Project gallery over --------------------------------------------- //
	
	$('.project-gallery li a img').hover(function(){
		// on rollover
		$(this).stop().animate({ 
			opacity: "0.5" 
		}, "fast");
	} , function() { 
		// on out
		$(this).stop().animate({
			opacity: "1" 
		}, "fast");
	});
	
	
	// Thumbs functions ------------------------------------------------------ //
	
	function thumbsFunctions(){
	
		// prettyphoto
		
		$("a[rel^='prettyPhoto']").prettyPhoto();
						
		// Fancy box
		$("a.fancybox").fancybox({ 
			'overlayColor'		:	'#000'
		});
		
		// Gallery over 
	
		$('.gallery li a img').hover(function(){
			// on rollover
			$(this).stop().animate({ 
				opacity: "0.5" 
			}, "fast");
		} , function() { 
			// on out
			$(this).stop().animate({
				opacity: "1" 
			}, "fast");
		});
		
		// tips
		
		$('.gallery a').poshytip({
	    	className: 'tip-twitter',
			showTimeout: 1,
			alignTo: 'target',
			alignX: 'center',
			offsetY: -15,
			allowTipHover: false
	    });
		
	}
	// init
	thumbsFunctions();
	
	// Filtering using isotope -----------------------------------------------------------//
	
	var $container = $('#portfolio-list');
	
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector : 'li',
			filter: '*',
			animationEngine: 'jquery'
		});
	});
	
	// filter buttons
		
	$('#portfolio-filter a').click(function(){
	
		// select current
		var $optionSet = $(this).parents('#portfolio-filter');
	    $optionSet.find('.selected').removeClass('selected');
	    $(this).parent().addClass('selected');
    
		var selector = $(this).attr('data-filter');
		$container.isotope({ filter: selector });
		return false;
	});
		
	// UI Accordion ------------------------------------------------------ //
	
	$( ".accordion" ).accordion();
	
	// Toggle box ------------------------------------------------------ //
	
	$(".toggle-container").hide(); 
	$(".toggle-trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
	
	// Footer menu rollover --------------------------------------------------- //

	$('#footer .col .page_item').hover(function(){
		// over
		$(this).children('a').stop().animate({ marginLeft: "5"	}, "fast");
	} , function(){
		// out
		$(this).children('a').stop().animate({marginLeft: "0"}, "fast");
	});
		
//close			
});
	
// search clearance	
function defaultInput(target){
	if((target).value == 'Enter the search text ...'){(target).value=''}
}

function clearInput(target){
	if((target).value == ''){(target).value='Enter the search text ...'}
}



