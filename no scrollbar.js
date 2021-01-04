		//DROPDOWN
var $menu = $('.navbar');

$(document).mouseup(e => {
	if (!$menu.is(e.target)
  && $menu.has(e.target).length === 0) { 
     $menu.removeClass('is-active')
}});

$('.toggle').on('click', () => {
  $menu.toggleClass('is-active');
});

//BACK TO TOP BUTTON
var btn = $('#myBtn');

$(window).scroll(function() {
$(window).scrollTop() > 200 ? 
    btn.addClass('show') :
    btn.removeClass('show');
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0});
});

//SCROLL INDICATOR
// When the user scrolls the page, capture scroll any percentage 
$(window).scroll(function(){
var wintop = $(window).scrollTop(), docheight = 
    
    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;
  
  		$('.progress-bar').css('width', (scrolled + '%'));
});

//THEME
const theme = localStorage.getItem('theme');
if (theme) {document.body.classList.add(theme)};

$("#lightButton").click(function(){
	$("body").addClass("light");
	$("body").removeClass("dark solarized solarized-dark");
	localStorage.setItem('theme', 'light');
	});

$("#darkButton").click(function(){
	$("body").addClass("dark");
	$("body").removeClass("light solarized solarized-dark");
	localStorage.setItem('theme', 'dark');
	});

$("#solarizedButton").click(function(){
	$("body").addClass("solarized");
	$("body").removeClass("dark light solarized-dark");
	localStorage.setItem('theme', 'solarized');
	});

$("#solarizedDarkButton").click(function(){
	$("body").addClass("solarized-dark");
	$("body").removeClass("dark solarized light");
	localStorage.setItem('theme', 'solarized-dark');
	});


//SIDENAV
$(document).ready(function(){
	$(".wrapper-menu").on("click", function(){
		$(".sidenav").toggleClass("sidenav-active");
	});
	});

//SIDENAV ICON
const $wrapperMenu = $('.wrapper-menu');
$(document).ready(function(){
	$(".wrapper-menu").on("click", function(){
		$wrapperMenu.toggleClass("open");
	});
});