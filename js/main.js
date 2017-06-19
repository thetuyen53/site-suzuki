(function ($) {
"use strict";

$(function() {
    // var hash = window.location.hash;
    // hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    var hash = window.location.hash;
	hash && $('ul.nav li a[href="' + hash + '"]').tab('show');

    $('nav li a, .nav-tabs li a').click(function (e) {
	    $(this).tab('show');
	    $(this).parent().addClass("active");
	    window.location.hash = this.hash;
  	});

});

/*--
	SUPPORT
------------------------*/
$(document).ready(function(){
   $(".menuFixed").hover(function(){
		$(this).addClass("show");
	})
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop(function(){
    	$(".menuFixed").removeClass("show");
    });
});
/*--
	Preloader
------------------------*/
var win = $(window);
win.on('load', function() {
	$('.preloader').fadeOut('slow');;
});
/*--
	Menu Sticky
-----------------------------------*/
var sticky = $('.sticky');
win.on('scroll',function() {    
	var scroll = win.scrollTop();
	if (scroll < 245) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});
/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = $('.onepage-nav').height() - 20;
$('.onepage-nav nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});
/*--
	One Page Menu Open & Close Icon
-----------------------------------*/
var navCollapse = $('.navbar-collapse');
$('.navbar-collapse ul li a').on('click', function(){
	if( navCollapse.hasClass('in')){
		navCollapse.css('height', '1px').removeClass('in');
		$('.navbar-toggle').addClass('collapsed');
	}
})
/*--
	Menu Toggle
-----------------------------------*/
var menuToggle = $('.menu-toggle');
var menuNav = $('.main-menu nav');
menuToggle.on('click', function(){
	if( menuToggle.hasClass('is-active') ){
		menuNav.removeClass('menu-open');
	}else {
		menuNav.addClass('menu-open');
	}
});
/*--
	Mean Mobile Menu
------------------------*/
$('.mean-menu nav').meanmenu({
	meanScreenWidth: '990',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="icofont icofont-close"></i>',
	meanMenuOpen: '<i class="icofont icofont-navigation-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
	onePage: true,
});
/*--
	Hero Slider
-----------------------------------*/
$('#hero-slider').nivoSlider({
	animSpeed: 500,
	slices: 18,
	pauseTime: 5000,
	pauseOnHover: true,
	controlNav: false,
	prevText: '<i class="icofont icofont-long-arrow-left"></i>',
    nextText: '<i class="icofont icofont-long-arrow-right"></i>',
	afterChange: function(){ 
		var date = $('.nivo-caption .date-picker');
		date.datepicker();
		var select = $('.nivo-caption .cusselect');
		select.selectpicker();
	},
	afterLoad: function(){
		var select = $('.nivo-caption .cusselect');
		select.selectpicker();
	},
});

/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="icofont icofont-simple-up"></i>',
});
/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});

/*--
	event
-----------------------------------*/
	$('.blog-slick').slick({
	  idots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: $(".slick-nav-left"),
	  nextArrow: $(".slick-nav-right"),
	  autoplay: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 567,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});


	$('.news-blog-slick').slick({
	  idots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $(".slick-nav-left-2"),
	  nextArrow: $(".slick-nav-right-2"),
	  autoplay: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	      
	      }
	    },
	    {
	      breakpoint: 567,
	      settings: {
	       
	      }
	    }
	  ]
	});

	// product-detail-slick
	$('.product-detail-slick').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	  arrows: false
	});

/*--
	Kenburnsy Slideshow
-----------------------------------*/
var kenburneBG = $('.kenburne-slideshow');
kenburneBG.kenburnsy({
  fullscreen: true
});
/*--
	HTML5 Background Video
-----------------------------------*/
var videoBG = $('.video-bg');
videoBG.vide({
	mp4: 'video/video',
	webm: 'video/video',
	poster: 'video/banner',
}, {
	posterType: 'jpg',
	className: 'video-container'
});

/*--
	Wow js
-----------------------------------*/
new WOW().init();
/*--
	Hamburger js
-----------------------------------*/
var forEach=function(t,o,r){if('[object Object]'===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
	hamburger.addEventListener('click', function() {
	  this.classList.toggle('is-active');
	}, false);
  });
}




})(jQuery);	