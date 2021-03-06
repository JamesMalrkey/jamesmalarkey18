<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Website</title>
<meta charset="UTF-8">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>
  input,
textarea,
button,
select,div,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
	
html {
    scroll-behavior: smooth;
}
/*TOPNAV*/
.topnav {
	padding-top: 4px;
}
/*SIDENAV*/
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--bg-sidenav);
    overflow-x: hidden;
    transition: width 0.5s;
    padding-top: 10px;
}
.sidenav-active {
	width: 180px;
}
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 20px;
    color: var(--sidenav-text);
    display: inline-block;
    transition: 0.3s;
	white-space: nowrap;
}
.sidenav a:hover {
    color: var(--sidenav-text-ho);
}
.wrapper-menu {
    float: right;
    width: 26px;
    height: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease-out;
    margin-top: -1px;
	outline: none;
	background-color: inherit;
	user-select: none;
}
.wrapper-menu.open {
    transform: rotate(-45deg);
}
.line-menu {
    background-color: var(--bg-menu);
    border-radius: 5px;
    width: 100%;
    height: 6px;
    margin-top: 2px;
}
.line-menu.half {
    width: 50%;
}
.line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
}
.open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
}
.line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
}
.open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
}
.wrapper-menu:active {
    transform: translateY(1.2px);
	outline: none;
}
/*body*/
body {
    margin: 0 7px 0 7px;
    padding: 0;
    font-family: sans-serif;
    color: var(--text);
    background: var(--bg);
    transition: background 1s, color 1s;
    word-wrap: break-word;
}
/*DROPDOWN*/
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
a {
    color: currentColor;
    text-decoration: none;
}
.navbar {
    display: flex;
    justify-content: space-evenly;
	width: 100%;
}

.dropdown-content {
	position: absolute;
    z-index: 1;
	visibility: hidden;
	pointer-events: auto;
	transition: visibility 0.5s, opacity 0.5s;
    opacity: 0;
	display: flex;
	list-style: none;
	margin-left: 2px;
}

.show {
	opacity: 1;
	transition-delay: 0s;
	visibility: visible;
	pointer-events: auto;
}

/* Themes */
:root{
/*GRAY && BLACK*/
--white: #ffffff;
--gray0: #f2f2f2;
--gray1: #e6e6e6;
--gray2: #d9d9d9;
--gray3: #cccccc;
--gray4: #bfbfbf;
--gray5: #b3b3b3;
--gray6: #a6a6a6;
--gray7: #999999;
--gray8: #8c8c8c;
--gray9: #808080;
--gray10: #737373;
--gray11: #666666;
--gray12: #595959;
--gray13: #4d4d4d;
--gray14: #404040;
--gray15: #333333;
--gray16: #262626;
--gray17: #1a1a1a;
--gray18:#121212;
--black: #000000;
/*BLUE*/
--blue0: #80a7b3;
--blue1: #709ca9;
--blue2: #60919f;
--blue3: #56828f;
--blue4: #4d7480;
--blue5: #436570;
--blue6: #395760;
--blue7: #304850;
--blue8: #263a40;
--blue9: #1d2b30;
--blue10: #131d20;
/*YELLOW*/
--yellow0: #f8f7ed;
--yellow1: #faf9ea;
--yellow2: #f6f3d5;
--yellow3: #f2edc0;
--yellow4: #ede8ab;
--yellow5: #e9e296;
--yellow6: #e0d66c;
--yellow7: #dbd057;
--yellow8: #d7ca42;
--yellow9: #d2c52d;
--yellow10: #bdb128;
}
/*THEME Light*/
.light {
--bg: var(--gray0);
--text: var(--black);
--border-color: var(--gray5);
--bg-sidenav: var(--gray4);
--bg-menu: var(--gray10);
--con-background: var(--gray2);
--bar-background: var(--gray10);
--scroll-bg: var(--gray2);
--scroll-thumb-bg: var(--gray10);
--scroll-hover-bg: var(--gray12);
--tool-bg: var(--gray5);
--tool-co: var(--gray0);
--tool-border: var(--gray8);
--sidenav-text: var(--gray15);
--sidenav-text-ho: var(--gray0);
--bg-submit: var(--gray2);
--hover-submit: var(--gray6);
--select-bg: var(--gray10);
--select-co: var(--white);
--scrollBtn-bg: var(--gray10);
--scrollBtn-hover: var(--gray11);
--scrollBtn-co: var(--white);
--circle: linear-gradient(#ffffff 0%, #f8f8f8 10%, #e6e6e6 50%, #cccccc 100%);
}
.light::before {
    background: var(--white);
}
/*THEME Dark*/
.dark {
--bg: var(--gray16);
--text: var(--gray0);
--border-color: var(--gray5);
--bg-sidenav: var(--gray9);
--bg-menu: var(--gray3);
--con-background: var(--gray10);
--bar-background: var(--gray3);
--scroll-bg: var(--gray10);
--scroll-thumb-bg: var(--gray3);
--scroll-hover-bg: var(--gray1);
--tool-bg: var(--gray0);
--tool-co: var(--gray8);
--tool-border: var(--gray6);
--sidenav-text: var(--gray0);
--sidenav-text-ho: var(--gray15);
--bg-submit: var(--gray8);
--hover-submit: var(--gray5);
--select-bg: var(--gray3);
--select-co: var(--white);
--scrollBtn-bg: var(--gray3);
--scrollBtn-hover: var(--gray2);
--scrollBtn-co: var(--black);
--circle: linear-gradient(#404040 0%, #333333 10%, #262626 50%, #000000 100%);
}
.dark::before {
    background: var(--gray12);
}
/*THEME Solarized*/
.solarized {
--bg: var(--yellow0);
--text: var(--black);
--bg-sidenav: var(--yellow1);
--bg-menu: var(--yellow10);
--border-color: var(--gray5);
--con-background: var(--yellow5);
--bar-background: var(--yellow10);
--scroll-bg: var(--yellow5);
--scroll-thumb-bg: var(--yellow10);
--scroll-hover-bg: var(--yellow9);
--tool-bg: var(--yellow3);
--tool-co: var(--yellow10);
--tool-border: var(--yellow6);
--sidenav-text: var(--yellow8);
--sidenav-text-ho: var(--yellow10);
--bg-submit: var(--yellow10);
--hover-submit: var(--yellow8);
--select-bg: var(--yellow10);
--select-co: var(--white);
--scrollBtn-bg: var(--yellow10);
--scrollBtn-hover: var(--yellow9);
--scrollBtn-co: var(--yellow3);
--circle: linear-gradient(#f8f7ed 0%, #faf9ea 10%, #f6f3d5 50%, #f2edc0 100%);
}
.solarized::before {
    background: var(--yellow1);
}
/*THEME Solarized-dark*/
.solarized-dark {
--bg: var(--blue8);
--bg-sidenav: var(--blue7);
--bg-menu: var(--blue2);
--border-color: var(--gray5);
--text: var(--gray0);
--con-background: var(--blue6);
--bar-background: var(--blue2);
--scroll-bg: var(--blue6);
--scroll-thumb-bg: var(--blue2);
--scroll-hover-bg: var(--blue4);
--tool-bg: var(--blue7);
--tool-co: var(--blue0);
--tool-border: var(--blue5);
--sidenav-text: var(--blue2);
--sidenav-text-ho: var(--blue0);
--bg-submit: var(--blue2);
--hover-submit: var(--blue4);
--select-bg: var(--blue2);
--select-co: var(--white);
--scrollBtn-bg: var(--blue2);
--scrollBtn-hover: var(--blue0);
--scrollBtn-co: var(--blue10);
--circle: linear-gradient(#304850 0%, #263a40 10%, #1d2b30 50%, #131d20 100%);
}
.solarized-dark::before {
    background: var(--blue9);
}
	
/*HEADER*/
.header {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    margin-left: -8px;
}
/*SCROLL INDICATOR*/
.progress-container {
    width: 110%;
    height: 3px;
    background: var(--con-background);
    border-radius: 1px;
}
.progress-bar {
    height: 3px;
    background: var(--bar-background);
    width: 0%;
    border-radius: 3px;
}
/*CONTENT*/
.content {
    margin: auto;
    width: 95%;
}

/*SCROLLBAR*/
::-webkit-scrollbar {
display: none;
}
/*TEXT SELECTION*/
::selection {
	color: var(--select-co);
	background-color: var(--select-bg);
}
/*SCROLL TO TOP BUTTON*/
#myBtn {
  display: inline-block;
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 1000;
  font-size: 22px;
  border: none;
  outline: none;
  background-color: var(--scrollBtn-bg);
  color: var(--scrollBtn-co);
  cursor: pointer;
  padding: 5px;
  border-radius: 25px;
  opacity: 0;
  visibility: hidden;
  transition: background-color .3s, opacity .8s, visibility .5s;
  user-select: none;
}

#myBtn:hover {
  background-color: var(--scrollBtn-hover);
}

#myBtn.show {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

/*THEME BUTTON*/
.circle{
    background: var(--circle);
    border-radius: 50%;
    display: flex;  
    position: absolute;
    border: 2px solid var(--gray3);
    border-radius: 25px;
    margin-top: -25px;
    cursor: pointer;
  }

* {
	box-sizing: border-box;
}
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

/*Typical device breakpoints*/
@media only screen and (min-width: 200px) {
    /*CONTENT*/
	.content{
        font-size: 16px;
        }

    /*THEME BUTTON*/
	.circle{
  height: 25px;
  width: 25px;
}
/*DROPDOWN*/
.dropdown-content{margin-top: 0px;}
	.dropdown-content a::before {
        content: ' ';
        border: 2px solid var(--border-color);
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: middle;
        display: flex;
        cursor: pointer;
        margin-right: 3px;
    }
    /*BODY*/
	body {transition: background 0.5s, color 0.5s;}
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    /*CONTENT*/
	.content{
	font-size: 16px;
    }
    /*THEME BUTTON*/
	.circle{
  height: 25px;
  width: 25px;
}
/*DROPDOWN*/
.dropdown-content{margin-top: 0px;}
.dropdown-content a::before {
        content: ' ';
        border: 2px solid var(--border-color);
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        vertical-align: middle;
        display: flex;
        cursor: pointer;
        margin-right: 3px;
    }
    /*BODY*/
	body {transition: background 0.5s, color 0.5s;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    /*CONTENT*/
	.content{
	font-size: 16px;
	}
	/* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
	
	/*ZOOM*/
.zoom:hover {
	transition: transform .2s;
    -ms-transform: scale(1.07); /* IE 9 */
    -webkit-transform: scale(1.07); /* Safari 3-8 */
    transform: scale(1.07);
}
/*DROPDOWN*/
.dropdown-content a::before {
    content: ' ';
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
	display: flex;
	cursor: pointer;
	margin-right: 3px;
}
.dropdown-content{margin-top: -5px;}

/*THEME BUTTON*/
.circle{
    height: 20px;
    width: 20px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    /*CONTENT*/
    .content{
	font-size: 16px;
	}
	/* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
	/*ZOOM*/
.zoom:hover {
	transition: transform .2s;
    -ms-transform: scale(1.07); /* IE 9 */
    -webkit-transform: scale(1.07); /* Safari 3-8 */
    transform: scale(1.07);
}
/*DROPDOWN*/
.dropdown-content a::before {
    content: ' ';
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
	display: flex;
	cursor: pointer;
	margin-right: 3px;
}
.dropdown-content{margin-top: -5px;}

/*THEME BUTTON*/
.circle{
    height: 20px;
    width: 20px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.content{
	font-size: 18px;
	}
	/*ZOOM*/
.zoom:hover {
	transition: transform .2s;
    -ms-transform: scale(1.07); /* IE 9 */
    -webkit-transform: scale(1.07); /* Safari 3-8 */
    transform: scale(1.07);
}
/*DROPDOWN*/
.dropdown-content a::before {
    content: ' ';
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
	display: flex;
	cursor: pointer;
	margin-right: 3px;
}
.dropdown-content{margin-top: -5px;}

/*THEME BUTTON*/
.circle{
    height: 20px;
    width: 20px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    /*CONTENT*/
	.content{
	font-size: 18px;
	}
	/*ZOOM*/
.zoom:hover {
	transition: transform .2s;
    -ms-transform: scale(1.07); /* IE 9 */
    -webkit-transform: scale(1.07); /* Safari 3-8 */
    transform: scale(1.07);
}
/*DROPDOWN*/
.dropdown-content a::before {
    content: ' ';
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
	display: flex;
	cursor: pointer;
	margin-right: 3px;
}
.dropdown-content{margin-top: -5px;}

/*THEME BUTTON*/
.circle{
    height: 20px;
    width: 20px;
  }
 }
</style>
</head>
<body>
<div class="topnav">
<!--SIDENAV-->
<div class="wrapper-menu" title="Menu">
  <div class="line-menu half start"></div>
  <div class="line-menu"></div>
  <div class="line-menu half end"></div>
</div>
<div class="sidenav"  ng-app="myApp">
<a href="G:\HTML & CSS\Website\Contact\contactList.htm">Contact Us</a>
<a href="G:\HTML & CSS\Website\Vocabulary\Vocabulary.html">Vocabulary</a></div>
<div ng-view></div>

<!--DDROPDOWN-->
<nav class="navbar"><div onclick="dropToggle()" class="circle dropa zoom" title="Theme"></div>
  <ul id="dropdown" class="dropdown-content">
    <li class="zoom"> <a class="light dropa" id="lightButton" title="Light"></a></li>
    <li class="zoom"> <a class="dark dropa" id="darkButton"  title="Dark"></a> </li>
    <li class="zoom"> <a id="solarizedButton" class="solarized dropa"  title="Solarized"></a></li>
    <li class="zoom"> <a class="solarized-dark  dropa" id="solarizedDarkButton" title="Solarized Dark"></a> </li>
  </ul>
</nav>
	</div>
<!--CONTENT-->
<div class="header">
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
</div>
<div class="content">
  <h3>Scroll Down to See The Effect</h3>
  <p>We have created a "progress bar" to <b>show how far a page has been scrolled</b>.</p>
  <p>It also <b>works when you scroll back up</b>.</p>
  <p>It is even <b>responsive</b>! Resize the browser window to see the effect.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
</div>
<a id="myBtn" title="Go to top" class="material-icons">&#xe316;</a> 
<script>
function dropToggle(){
  document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, .dropa')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

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
</script>
</body>
</html>
