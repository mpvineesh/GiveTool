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

<link rel="pingback" href="">

<title>Home</title>

	
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

<?php include_once('header-top.php');?>
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
            
            <div class=" callout border-cove  show_dual_btn">
                <h2 class="title">TNC Section</h2>
                <div class="background-content clearfix">
                    <p></p>
                    <div class="both-btn clearfix">
                        <div class="find-events"></div>
                        <div class="but-ticket"></div>
                    </div>
                </div>
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