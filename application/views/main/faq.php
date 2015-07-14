<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'].'/main';
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$name = $this->session->userdata("name");
	$int_user_type = $this->session->userdata("int_user_type_id"); 
	
?>
<!doctype html>

<!--[if lt IE 7]><html lang="en-US" class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html lang="en-US" class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html lang="en-US" class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en-US" class="no-js">
<!--<![endif]-->

<!-- Added by SK -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- /Added by SK -->
<head>
<meta charset="utf-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>Home</title>

<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="apple-touch-icon"
	href="<?php echo $path;?>/themes/event/library/images/apple-icon-touch.html">
<link rel="icon" href="<?php echo $path;?>/themes/event/favicon.png">
<!--[if IE]>
			<link rel="shortcut icon" href="">
		<![endif]-->
<meta name="msapplication-TileColor" content="#f01d4f">
<meta name="msapplication-TileImage"
	content="<?php echo $path;?>/themes/event/library/images/win8-tile-icon.html">


<style id='rs-plugin-settings-inline-css' type='text/css'>
.tp-caption a {
	color: #fff;
	text-shadow: none;
	-webkit-transition: all 0.2s ease-out;
	-moz-transition: all 0.2s ease-out;
	-o-transition: all 0.2s ease-out;
	-ms-transition: all 0.2s ease-out
}

.tp-caption a:hover {
	color: #ffa902
}
</style>
<?php include_once('header-scripts.php');?>

<script type="text/javascript">
			jQuery(document).ready(function() {
				// CUSTOM AJAX CONTENT LOADING FUNCTION
				var ajaxRevslider = function(obj) {
				
					// obj.type : Post Type
					// obj.id : ID of Content to Load
					// obj.aspectratio : The Aspect Ratio of the Container / Media
					// obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content
					
					var content = "";

					data = {};
					
					data.action = 'revslider_ajax_call_front';
					data.client_action = 'get_slider_html';
					data.token = '9365e2d9a1';
					data.type = obj.type;
					data.id = obj.id;
					data.aspectratio = obj.aspectratio;
					
					// SYNC AJAX REQUEST
					jQuery.ajax({
						type:"post",
						url:"http://localhost/admin-ajax.php",
						dataType: 'json',
						data:data,
						async:false,
						success: function(ret, textStatus, XMLHttpRequest) {
							if(ret.success == true)
								content = ret.data;								
						},
						error: function(e) {
							console.log(e);
						}
					});
					
					 // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
					 return content;						 
				};
				
				// CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
				var ajaxRemoveRevslider = function(obj) {
					return jQuery(obj.selector+" .rev_slider").revkill();
				};

				// EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
				var extendessential = setInterval(function() {
					if (jQuery.fn.tpessential != undefined) {
						clearInterval(extendessential);
						if(typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
							jQuery.fn.tpessential.defaults.ajaxTypes.push({type:"revslider",func:ajaxRevslider,killfunc:ajaxRemoveRevslider,openAnimationSpeed:0.3});   
							// type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
							// func: the Function Name which is Called once the Item with the Post Type has been clicked
							// killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
							// openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
						}
					}
				},30);
			});
		</script>
<!--[if (gte IE 6)&(lte IE 8)]><script type="text/javascript" src="http://localhost//_content/themes/event/js/selectivizr.js?ver=1.0.2"></script><![endif]-->
<meta name="generator"
	content="Powered" />
<!--[if IE 8]><link rel="stylesheet" type="text/css" href="http://localhost//_content/plugins/js_composer/assets/css/vc-ie8.css" media="screen"><![endif]-->
<style type="text/css" data-type="vc_shortcodes-custom-css">
.vc_custom_1422352945330 {
	padding-top: 0px !important;
	padding-bottom: 0px !important;
}

.vc_custom_1423312747633 {
	padding-top: 0px !important;
	padding-bottom: 0px !important;
}

.vc_custom_1423312914173 {
	background-image:
		url(<?php echo $path;?>/uploads/2014/12/background-bg3162.png?id=26)
		!important;
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
}
</style>

</head>

<body
	class="page page-id-56 page-template-default wpb-js-composer js-comp-ver-4.4.2 vc_responsive">


<header class="header-container">

<div class="header-top">
<div class="container">
<div class="row">
<div class="col-md-6">
<ul class="contact-details clearfix">
	<li><i class="icon fa fa-paper-plane-o"></i><a
		href="mailto: info@yoursite.com">info@yoursite.com</a></li>
	<li><i class="icon fa fa-phone"></i>+ (009) 123 4567</li>
</ul>
</div>

<div class="col-md-6">
<div class="cart-social">

<div class="social-icon">
	<a href="#" class="fa fa-facebook"></a>
	<a href="#" class="twitter fa fa-twitter"></a>
	<a href="#" class="googleplus fa fa-google-plus"></a><a href="#" class="linkedin fa fa-linkedin"></a>
	<a href="#" class="flickr fa fa-flickr"></a>
	<a href="#" class="pinterest fa fa-pinterest"></a>
	<a href="#" class="tumblr fa fa-tumblr"></a>
	<a href="#" class="rss fa fa-rss"></a>
</div>


<!--<div class="">
	<a href="#" class="sb twitter">Twitter</a>
	<a href="#" class="sb facebook">Facebook</a>
	<a href="#" class="sb heart">Heart</a>
	<a href="#" class="sb linkedin">LinkedIn</a>
	<a href="#" class="sb pinterest">Pinterest</a>
	<a href="#" class="sb rss">RSS</a>
	
</div>

--><!--<h3>min</h3>
<p>
	<a href="#" class="sb min twitter">Twitter</a>
	<a href="#" class="sb min facebook">Facebook</a>
	<a href="#" class="sb min heart">Heart</a>
	<a href="#" class="sb min linkedin">LinkedIn</a>
	<a href="#" class="sb min pinterest">Pinterest</a>
	<a href="#" class="sb min podcast">Podcast</a>
	<a href="#" class="sb min rss">RSS</a>
	<a href="#" class="sb min share_this">Share</a>
	<a href="#" class="sb min star">Star</a>
	<a href="#" class="sb min vimeo">Vimeo</a>
</p>


-->
<div class="pix-cart">
	<div class="cart-trigger">
		<div class="">
			<span class="pix-no-items"></span> 
			<span class="pix-woo-price"><span class="amount">&pound;0.00</span></span> 
			<a class="pix-cart-contents" href="#" title="Login"><span class="fa "></span>
		<!--<span class="pix-item-icon">Login</span>
	-->
			<span class="">Login</span></a>
			
		</div>
		<div class="woo-cart-dropdown">
			<div class="widget woocommerce widget_shopping_cart">
				<h2 class="widgettitle">user name <input type="text"></h2>
				<h2 class="widgettitle">password <input type="password"></h2>
				<button name="event_search" value="1" type="submit" class="btn btn-md btn-pri">Login</button>
				<div class="widget_shopping_cart_content"></div>
			</div>
		</div>
	</div>
</div>

<div class="pix-cart">
	<div class="cart-trigger">
		<div class="">
			<span class="pix-no-items"></span> 
			<span class="pix-woo-price"><span class="amount">&pound;0.00</span></span> 
			<a class="pix-cart-contents" href="#" title="Login"><span class="fa "></span>
		<!--<span class="pix-item-icon">Login</span>-->
			<span class="md-trigger" data-modal="modal-1">Sign Up</span></a>			
			<div class="md-modal md-effect-1" id="modal-1">
			<div class="md-content">
				<h3>Modal Dialog</h3>
				<div>
					<p>This is a modal window. You can do the following things with it:</p>
					<ul>
						<li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
						<li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
						<li><strong>Close:</strong> click on the button below to close the modal.</li>
					</ul>
					<button class="md-close">Close me!</button>
				</div>
			</div>
		</div>
			
		
			
				
				
		
		<div class="md-overlay"></div><!-- the overlay element -->

		<!-- classie.js by @desandro: https://github.com/desandro/classie -->
		<script src="<?php echo $path;?>/js/classie.js"></script>
		<script src="<?php echo $path;?>/js/modalEffects.js"></script>

		<!-- for the blur effect -->
		<!-- by @derSchepp https://github.com/Schepp/CSS-Filters-Polyfill -->
		<script>
			// this is important for IEs
			var polyfilter_scriptpath = '/js/';
		</script>
		<script src="<?php echo $path;?>/js/cssParser.js"></script>
		<script src="<?php echo $path;?>/js/css-filters-polyfill.js"></script>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		</div>
		
	</div>
</div>


</div>
</div>
</div>
</div>
</div>
<div class="main-header affix clearfix">
<div class="container">
<div class="inner-header">
<h1><a href="#" id="logo">[COMPANY NAME]</a></h1>
<div id="sb-search" class="sb-search">
<form role="search" method="get"
	action="#"><input
	class="sb-search-input" placeholder="Search" type="text" value=""
	name="s" id="s"> <input class="sb-search-submit" type="submit"
	id="searchsubmit" value=""> <span class="sb-icon-search"></span>
</form>
</div>


<div class="mobile-menu-icon"><i class="fa fa-bars"></i></div>
<?php include_once('navmenu.php');?>
<!-- NAV --></div>
</div>
</div>
</header>
<!-- HEADER -->

<section id="post-56"
	class="post-56 page type-page status-publish hentry clearfix">



</div>
</div>

</div>
</div>
</div>

</div>


<!-- SK1  -->


<?php include_once('eventsearchform.php');?>


</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>

</div>
</div>
</div>
</div>
<div class="wpb_row pix-row vc_row-fluid vc_custom_1423312914173 light normal">
<div class="bg-pos-rel">
<div class="pix-con clearfix">
<div class="pix-container">
    <div class="vc_col-sm-12 wpb_column vc_column_container ">
        <div class="wpb_wrapper">
            <p>answer and questions</p>
            <table border="0">
                <tr><td>Question: what is ......?</td></tr>
                <tr><td>answer : this is.......</td></tr>
            </table>
            <!--<div class=" callout border-cover  show_dual_btn">
                <h2 class="title">rollover strip</h2>
                <div class="background-content clearfix">
                    <p></p>
                    <div class="both-btn clearfix">
                        <div class="find-events"></div>
                        <div class="but-ticket"></div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>

</div>
</div>
</div>
</div>

 
</div>
<!------------------------------------Foooter----------------------------------------------------------->
<?php include_once('footer.php'); ?>


<?php include_once('footer-scripts.php'); ?>

</body>


<!-- Mirrored from themeinnwit.com/eventonwp/home2/ by SK Website Copier/3.x [XR&CO'2014], Fri, 17 Apr 2015 16:36:26 GMT -->
</html>
<!-- end of site. what a ride! -->