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

<link rel="apple-touch-icon" href="<?php echo $path;?>/themes/event/library/images/apple-icon-touch.html">
<link rel="icon" href="<?php echo $path;?>/themes/event/favicon.png">
<!--[if IE]><link rel="shortcut icon" href=""><![endif]-->
<meta name="msapplication-TileColor" content="#f01d4f">
<meta name="msapplication-TileImage" content="<?php echo $path;?>/themes/event/library/images/win8-tile-icon.html">

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



<?php include_once('header.php');?>
<!-- HEADER -->

<section id="post-56"
	class="post-56 page type-page status-publish hentry clearfix">

<section itemprop="articleBody">
<div
class="wpb_row pix-row vc_row-fluid vc_custom_1422352945330 dark normal">
<div class="bg-pos-rel">
<div class="pix-con clearfix">
<div class="pix-container">
<div class="vc_col-sm-12 wpb_column vc_column_container ">
<div class="wpb_wrapper" id="esearch">
<div class="wpb_revslider_element wpb_content_element">
<div id="rev_slider_1_1_wrapper"
	class="rev_slider_wrapper fullwidthbanner-container"
	style="margin: 0px auto; background-color: #E9E9E9; padding: 0px; margin-top: 0px; margin-bottom: 0px; max-height: 550px;">
<!-- START REVOLUTION SLIDER 4.6.5 fullwidth mode -->
<div id="rev_slider_1_1" class="rev_slider fullwidthabanner"
	style="display: none; max-height: 550px; height: 550px;">
<ul>
	<!-- SLIDE  1 -->
	<li data-transition="fade,parallaxhorizontal,scaledownfromright"	data-slotamount="7" data-masterspeed="300"
		data-thumb="http://localhost/_content/uploads/2015/01/Banner-bg-1-320x200.png"	data-saveperformance="off" data-title="Slide 1"><!-- MAIN IMAGE -->
	<img src="<?php echo $resource_path;?>/img/banner-1.jpg"	alt="Banner-bg-1" data-bgposition="center top" data-bgfit="cover"	data-bgrepeat="no-repeat"> <!-- LAYERS --> <!-- LAYER NR. 1 -->
	<div class="tp-caption event-on-1 sft tp-resizeme" data-x="center"
		data-hoffset="0" data-y="100" data-speed="300" data-start="300"
		data-easing="Power3.easeOut" data-splitin="none" data-splitout="none"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6800"
		data-endspeed="200"
		style="z-index: 5; max-width: auto; max-height: auto; white-space: nowrap;">event
	. professional . compaign</div>

	<!-- LAYER NR. 2 -->
	<div class="tp-caption event-on-2 sft tp-resizeme" data-x="center"
		data-hoffset="0" data-y="120" data-speed="500" data-start="400"
		data-easing="Power4.easeIn" data-splitin="none" data-splitout="none"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6700"
		data-endspeed="300"
		style="z-index: 6; max-width: auto; max-height: auto; white-space: nowrap;">We organise Compaign and Events to make this world a better place to live</div>

	<!-- LAYER NR. 3 -->
	<div class="tp-caption button-1 sfl tp-resizeme" data-x="528"
		data-y="200" data-speed="600" data-start="500"
		data-easing="Power3.easeIn" data-splitin="none" data-splitout="none"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6700"
		data-endspeed="300"
		style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap;"><a
		href="#">View Events</a></div>

	<!-- LAYER NR. 4 -->
	<!--<div class="tp-caption button-1 sfr tp-resizeme" data-x="701"
		data-y="200" data-speed="800" data-start="550"
		data-easing="Power4.easeIn" data-splitin="none" data-splitout="none"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6700"
		data-endspeed="300"
		style="z-index: 8; max-width: auto; max-height: auto; white-space: nowrap;"><a
		href="#">Buy Now</a></div>

	--><!-- LAYER NR. 5 -->
	<!--<div class="tp-caption sfb" data-x="center" data-hoffset="0"
		data-y="center" data-voffset="160" data-speed="1200" data-start="600"
		data-easing="Power3.easeIn" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-end="6700" data-endspeed="300"
		style="z-index: 9;"><img
		src="<?php echo $path;?>/uploads/2015/01/banner_1.jpg" alt=""></div>-->
	</li>
	<!-- SLIDE  -->
	<li data-transition="random" data-slotamount="7" data-masterspeed="300"
		data-thumb="http://localhost/_content/uploads/2015/01/Banner-bg-2-320x200.png"
		data-saveperformance="off" data-title="Slide 2"><!-- MAIN IMAGE -->
	<img src="<?php echo $resource_path;?>/img/banner-2.jpg"
		alt="Banner-bg-2" data-bgposition="center top" data-bgfit="cover"
		data-bgrepeat="no-repeat"> <!-- LAYERS --> <!-- LAYER NR. 1 -->
	<div class="tp-caption black sft tp-resizeme" data-x="center"
		data-hoffset="0" data-y="center" data-voffset="-106" data-speed="300"
		data-start="500" data-easing="Power3.easeInOut" data-splitin="none"
		data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-end="6700" data-endspeed="300"
		style="z-index: 5; max-width: auto; max-height: auto; white-space: nowrap;">Events and Compaigns</div>

	<!-- LAYER NR. 2 -->
	<div class="tp-caption sfl" data-x="426" data-y="158" data-speed="400"
		data-start="550" data-easing="Power3.easeInOut"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6700"
		data-endspeed="300" style="z-index: 6;"><img
		src="<?php echo $path;?>/uploads/2015/01/R-line.png" alt=""></div>

	<!-- LAYER NR. 3 -->
	<div class="tp-caption sfr" data-x="855" data-y="158" data-speed="500"
		data-start="580" data-easing="Power3.easeInOut"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-end="6700"
		data-endspeed="300" style="z-index: 7;"><img
		src="<?php echo $path;?>/uploads/2015/01/R-line.png" alt=""></div>

	<!-- LAYER NR. 4 -->
	<div class="tp-caption impact-all-of-your-visitors sfl tp-resizeme"
		data-x="center" data-hoffset="0" data-y="center" data-voffset="-29"
		data-speed="700" data-start="620" data-easing="Power3.easeInOut"
		data-splitin="none" data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-end="6700" data-endspeed="300"
		style="z-index: 8; max-width: auto; max-height: auto; white-space: nowrap;">Thankyou for Supporting this</div>

	<!-- LAYER NR. 5 -->
	<div class="tp-caption we-are-here-to-help-you sfr tp-resizeme"
		data-x="center" data-hoffset="0" data-y="center" data-voffset="47"
		data-speed="900" data-start="650" data-easing="Power3.easeInOut"
		data-splitin="none" data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-end="6700" data-endspeed="300"
		style="z-index: 9; max-width: auto; max-height: auto; white-space: nowrap;">We
	are here to help you</div>

	<!-- LAYER NR. 6 -->
	<div class="tp-caption view--features sfb tp-resizeme" data-x="center"
		data-hoffset="0" data-y="center" data-voffset="140" data-speed="300"
		data-start="700" data-easing="Power3.easeInOut" data-splitin="none"
		data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-end="6700" data-endspeed="300"
		style="z-index: 10; max-width: auto; max-height: auto; white-space: nowrap;"><a
		href="#">View Events</a></div>
	</li>
	<!-- SLIDE  -->
	<li data-transition="random" data-slotamount="7" data-masterspeed="300"
		data-thumb="http://localhost/_content/uploads/2015/01/Banner-bg-3-320x200.png"
		data-saveperformance="off" data-title="Slide 3"><!-- MAIN IMAGE -->
	<img src="<?php echo $resource_path;?>/img/banner-3.jpg"
		alt="Banner-bg-3" data-bgposition="center top" data-bgfit="cover"
		data-bgrepeat="no-repeat"> <!-- LAYERS --> <!-- LAYER NR. 1 -->
	<div class="tp-caption sfl" data-x="150" data-y="240" data-speed="300"
		data-start="300" data-easing="Power3.easeInOut"
		data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed="300"
		style="z-index: 5;"><img
		src="<?php echo $path;?>/uploads/2015/01/R-line.png" alt=""></div>

	<!-- LAYER NR. 2 -->
	<div
		class="tp-caption we-bring-your-dreams-to-life-you-feel-better-again sfl tp-resizeme"
		data-x="150" data-y="275" data-speed="500" data-start="400"
		data-easing="Power3.easeInOut" data-splitin="none"
		data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-endspeed="300"
		style="z-index: 6; max-width: auto; max-height: auto; white-space: nowrap;">We
	bring your dreams to life you feel<br>
	better again</div>

	<!-- LAYER NR. 3 -->
	<div class="tp-caption view--features sfl tp-resizeme" data-x="150"
		data-y="400" data-speed="700" data-start="500"
		data-easing="Power3.easeInOut" data-splitin="none"
		data-splitout="none" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-endspeed="300"
		style="z-index: 7; max-width: auto; max-height: auto; white-space: nowrap;"><a
		href="#">VIEW EVENTS</a></div>

	<!-- LAYER NR. 4 -->
	<!--<div class="tp-caption sfr" data-x="right" data-hoffset="-148"
		data-y="156" data-speed="300" data-start="600"
		data-easing="Power3.easeInOut" data-elementdelay="0.1"
		data-endelementdelay="0.1" data-endspeed="300" style="z-index: 8;"><img
		src="<?php echo $path;?>/uploads/2015/01/banner_1.jpg" alt=""></div>-->
	</li>
</ul>
<div class="tp-bannertimer"></div>
</div>


<style scoped>
.tp-caption.black,.black {
	font-size: 36px;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}

.tp-caption.event-on-1,.event-on-1 {
	font-size: 16px;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	font-style: italic;
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}

.tp-caption.event-on-2,.event-on-2 {
	font-size: 32px;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}

.tp-caption.button-1,.button-1 {
	font-size: 16px;
	font-weight: 600;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	padding: 10px 25px;
	text-shadow: none;
	text-transform: uppercase;
	background-color: transparent;
	border-width: 1px;
	border-color: rgb(255, 255, 255);
	border-style: solid
}

.tp-caption.impact-all-of-your-visitors,.impact-all-of-your-visitors {
	font-size: 60px;
	font-weight: 700;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}

.tp-caption.we-are-here-to-help-you,.we-are-here-to-help-you {
	font-size: 36px;
	font-weight: 400;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}

.tp-caption.view--features,.view--features {
	font-size: 18px;
	font-weight: 600;
	font-family: "Source Sans Pro";
	color: #ffffff;
	text-decoration: none;
	padding: 10px 20px 10px 20px;
	text-shadow: none;
	background-color: transparent;
	text-transform: uppercase;
	border-width: 1px;
	border-color: rgb(255, 255, 255);
	border-style: solid
}

.tp-caption.we-bring-your-dreams-to-life-you-feel-better-again,.we-bring-your-dreams-to-life-you-feel-better-again
	{
	font-size: 36px;
	line-height: 50px;
	font-family: "Source Sans Pro";
	color: rgb(255, 255, 255);
	text-decoration: none;
	text-shadow: none;
	background-color: transparent;
	border-width: 0px;
	border-color: rgb(0, 0, 0);
	border-style: none
}
</style>

<script type="text/javascript">

				/******************************************
					-	PREPARE PLACEHOLDER FOR SLIDER	-
				******************************************/
				

				var setREVStartSize = function() {
					var	tpopt = new Object();
						tpopt.startwidth = 1366;
						tpopt.startheight = 550;
						tpopt.container = jQuery('#rev_slider_1_1');
						tpopt.fullScreen = "off";
						tpopt.forceFullWidth="on";

					tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
				};

				/* CALL PLACEHOLDER */
				setREVStartSize();


				var tpj=jQuery;
				tpj.noConflict();
				var revapi1;

				tpj(document).ready(function() {

				if(tpj('#rev_slider_1_1').revolution == undefined){
					revslider_showDoubleJqueryError('#rev_slider_1_1');
				}else{
				   revapi1 = tpj('#rev_slider_1_1').show().revolution(
					{	
												dottedOverlay:"none",
						delay:7000,
						startwidth:1366,
						startheight:550,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:3,
						
												
						simplifyAll:"off",

						navigationType:"bullet",
						navigationArrows:"none",
						navigationStyle:"preview2",

						touchenabled:"on",
						onHoverStop:"off",
						nextSlideOnWindowFocus:"off",

						swipe_threshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						
												
												
						keyboardNavigation:"off",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						shadow:0,
						fullWidth:"on",
						fullScreen:"off",

												spinner:"spinner0",
												
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						shuffle:"off",

						autoHeight:"off",
						forceFullWidth:"on",
						
						
						
						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,

												hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0					});



									}
				});	/*ready*/

			</script></div>
<!-- END REVOLUTION SLIDER --></div>

</div>
</div>

</div>
</div>
</div>

</div>


<!-- SK1  -->

<?php include_once('eventsearchform.php');?>
<div class="wpb_row pix-row vc_row-fluid dark normal">
	<div class="bg-pos-rel">
		<div class="pix-con clearfix">
			<div class="pix-container">
				<div class="vc_col-sm-12 wpb_column vc_column_container ">
					<div class="wpb_wrapper">
						<div class="tabs event-tab upcoming-popular-tab">
							<ul class="clearfix">
								<li><a href="#tabs1624964006">Upcoming Events</a></li>
								<li><a href="#tabs1586584945">Popular Events</a></li>
							</ul>
							<div id="tabs1624964006">
								<div class="event-container">
									<div class="row">
										<?php 
											$CI =& get_instance(); 
											$url = $CI->config->config['base_url'];	
											foreach ($upcomingevents as $item){
												echo '	
													<div class="col-md-3">
														<div class="event bg">
															<div class="eventsimg">
																<img src="'.$base_path.'/uploads/events/'.$item->int_event_id.'/logo/'.$item->str_logo.'" alt="">
															</div>
															<div class="event-content">
																<h3 class="title">'.$item->str_name.'</h3>
																<p>'.$item->str_description.'</p>
																<a href="'.$url.'/index.php/main/eventdetails/'.$item->int_event_id.'" class="btn btn-solid btn-blue btn-md">View Detail</a>
															</div>
															<div class="links three clearfix"></div>
														</div>
													</div>	
												';				
											}		
										?>		
									</div>
								</div>
							</div>
							<div id="tabs1586584945">
								<div class="event-container">
									<div class="row">
										<?php 
											$CI =& get_instance(); 
											$url = $CI->config->config['base_url'];	
											foreach ($popularevents as $item){
												echo '	
													<div class="col-md-3">
														<div class="event bg">
															<div class="eventsimg">
																<img src="'.$base_path.'/uploads/events/'.$item->int_event_id.'/logo/'.$item->str_logo.'" alt="">
															</div>
															<div class="event-content">
																<h3 class="title">'.$item->str_name.'</h3>
																<p>'.$item->str_description.'</p>
																<a href="'.$url.'/index.php/main/eventdetails/'.$item->int_event_id.'" class="btn btn-solid btn-blue btn-md">View Detail</a>
															</div>
															<div class="links three clearfix"></div>
														</div>
													</div>	
												';				
											}		
										?>
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
<div class=" callout border-cover  show_dual_btn">
<h2 class="title"><span>so What are You Waiting For</span></h2>
<div class="background-content clearfix">
<p>Believe in delivering best and successfull events and compaigns.</p>
<div class="both-btn clearfix">
<div class="find-events"><a href="<?php echo $url;?>/index.php/main/home#esearch">Find Events</a></div>

<div class="but-ticket"><a href="<?php echo $url;?>/index.php/main/events">View All Events</a></div>

<span class="round">or</span></div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div> 
<div class="wpb_row pix-row vc_row-fluid light normal">
	<div class="bg-pos-rel">
		<div class="pix-con clearfix">
			<div class="pix-container">
				<div class="vc_col-sm-12 wpb_column vc_column_container ">
					<div class="wpb_wrapper">
						<h2 class="main-title title sub-title-con   size-lg alignCenter"
						style="font-weight: 300;">Partner Organizations</h2>
						<p class="sub-title ">Organisation which beleive in us and has supported to bring this to next level.</p>
						<div class="wpb_row row speaker">
							
							<?php 
								$CI =& get_instance(); 
								$url = $CI->config->config['base_url'];	
								foreach ($organizations as $item){
									echo '	
										<div class="col-md-3">
											<div class="event bg">
												<div class="eventsimg">
													<img src="'.$base_path.'/uploads/org/'.$item->int_organization_id.'/logo/'.$item->str_logo.'" alt="">
												</div>
												<div class="event-content">
													<h2 class="title">'.$item->str_name.'</h2>
													<p class="job">'.$item->str_short_name.'</p>
													<p>Test Description Test Description Test Description Test Description Test Description </p>
												</div>
												<div class="social-icon links clearfix five"></div>
											</div>
										</div>
									';				
								}		
							?>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
</section>

</section>

<input type="button" class="md-trigger" data-toggle="modal" data-target="#changepassword" id="password-update-popup" style="display:none;">
			
<div class="modal fade" id="changepassword" role="dialog">
	<div class="modal-dialog">

	  <!-- Modal content-->
	  <div class="modal-content">
		<div class="modal-header">
		  <button type="button" class="close" data-dismiss="modal">&times;</button>
		  <h3 class="modal-title">Update Password</h3>
		</div>
		
		<form class="form-horizontal" action="<?php echo $base_site_url;?>/user/savepassword/<?php if($updatepassword == 1){  echo $int_user_id;}?>" method="post" id="frm-changepassword" role="form">				
			<input type="hidden" id="cp_user_id" value="">
			<div class="modal-body" id="update-content">
				<div class="control-group">
					<div class="controls">
						<span class="error" id="cr-error"></span>
					</div>
				</div>
				<input type="hidden"  name="int_donor_id"  value="0" >	
				<div class="control-group">
					<label class="control-label" for="lname">Password</label>
					<div class="controls">
					  <input class="form-control" id="password" type="password" title="Password" name="str_password" validate="text" value="" placeholder="Password">
					  <span class="help-inline" id="password_msg"></span>
					</div>
				</div>					
				<div class="control-group">
					<label class="control-label" for="email">Retype Password</label>
					<div class="controls">
					  <input class="form-control" id="retypepassword" type="password" title="Retype Password" name="str_retype_password" validate="text" value="" placeholder="Retype Password">
					  <span class="help-inline" id="retypepassword_msg"></span>
					</div>
				</div>			
						
			</div>
			<div class="modal-footer">									
				<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
				<button class="btn btn-success" id="btnUpdatePassword" style="display:inline;" type="submit"  value="1" name="updatepassword" onClick="return validateForm('frm-changepassword');">Update</button>
			</div>
		</form>	
	  </div>
	  
	</div>
</div>
<!--End Modal -->


<?php include_once('footer-scripts.php'); ?>
<?php include_once('footer.php'); ?>
</body>


<!-- Mirrored from themeinnwit.com/eventonwp/home2/ by SK Website Copier/3.x [XR&CO'2014], Fri, 17 Apr 2015 16:36:26 GMT -->
</html>
<!-- end of site. what a ride! -->