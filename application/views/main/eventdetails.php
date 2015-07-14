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

<!-- /Added by SK -->
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">


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
.input-popup{
width:49%;
display:inline;
}
.control-group{
	margin-top:8px;
}
</style>

</head>

<body
	class="page page-id-56 page-template-default wpb-js-composer js-comp-ver-4.4.2 vc_responsive">


<?php include_once('header.php');?>
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

<?php include_once('eventsearchform.php');?>
<div class="wpb_row pix-row vc_row-fluid vc_custom_1423312914173 light normal">
<div class="bg-pos-rel">
<div class="pix-con clearfix">

<div class="pix-container">
    <div class="vc_col-sm-12 wpb_column vc_column_container ">
        <div class="wpb_wrapper">
			<?php 
				if(isset($GET["ccerror"])){
					echo'<div class="alert alert-danger" role="alert"> 
						  <span class="sr-only"></span>An error occured while proccessing your payment request. Please try again.
						</div>';
				}
			?>
            <div class=" callout border-cove  show_dual_btn">
               
                <h2 class="title">Events Details</h2>
                <div class="background-content clearfix">
                    <div class="news-slider">
					    <?php 
							$CI =& get_instance(); 
							$url = $CI->config->config['base_url'];	
							foreach ($eventdetails as $item){
								echo '	
								<a href="'.$url.'/index.php/main/eventdetails/'.$item->int_event_id.'"><h2>'.$item->str_name.'</h2></a>
								<p>'.$item->str_description.'</p>	
								<p class="bold">Starts : '.date("jS F, Y", strtotime($item->start_date)).' at '.date("g:i a", strtotime($item->start_time)).'</p> 
								<p class="bold">Ends   : '.date("jS F, Y", strtotime($item->end_date)).' at '.date("g:i a", strtotime($item->end_time)).'</p>
								<p class="bold">Location : '.$item->str_city.','.$item->str_state.'</p>
								<p>Choose Amount:
									$'.$item->str_denomination1.'<input type="radio" class="pre-amount" style="display:inline;width:4%;" name="amount" value="'.$item->str_denomination1.'">
									$'.$item->str_denomination2.'<input type="radio" class="pre-amount" style="display:inline;width:4%;" name="amount" value="'.$item->str_denomination2.'">
									$'.$item->str_denomination3.'<input type="radio" class="pre-amount" style="display:inline;width:4%;" name="amount" value="'.$item->str_denomination3.'">
									$'.$item->str_denomination4.'<input type="radio" class="pre-amount" style="display:inline;width:4%;" name="amount" value="'.$item->str_denomination4.'"> 
									Custom<input id="specifyamount" type="radio" style="display:inline;width:4%;" name="amount" value="">
								</p> 
								<p class="bold" id="specify-amount" style="display:none;">Specify Donation Amount :  <input class="input-xlarge" id="specifiedamount" type="text" name="specifiedamount" title="Amount" size="5">
						 </p>'
								;				
							}		
						?>		
					</div>
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

<!--Start Modal -->
			  <div class="modal fade" id="modal-2" role="dialog">
				<div class="modal-dialog">
				
				  <!-- Modal content-->
				  <div class="modal-content">
					<div class="modal-header">
					  <button type="button" class="close" data-dismiss="modal">&times;</button>
					  <h3 class="modal-title">Donate</h3>
					</div>
					
					<form class="form-horizontal" action="<?php echo $base_site_url;?>/main/donate/<?php echo $int_event_id;?>" method="post" id="frm-donate" role="form">				
						<div class="modal-body">
							<div class="control-group">
								<div class="controls">
									<span class="error" id="cr-error"></span>
								</div>
							</div>
							<div class="control-group">
								<div class="controls">
									<span>You should enter your billing address here</span>
								</div>
							</div>
					 		<input type="hidden"  name="int_donor_id"  value="0" >
								<div id="form-fields">									
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="cr-fname" size="50" type="text" title="First Name" name="str_fname" validate="text" value="" placeholder="First Name"> 
										  <input class="form-control input-popup" required id="cr-lname" size="50" type="text" title="Last Name" name="str_lname" validate="text" value="" placeholder="Last Name">
										</div>
									</div>
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="cr-address" size="60" type="text" title="Address" name="str_address" validate="text" value="" placeholder="Address"> 
										  <input class="form-control input-popup" required id="cr-city" size="30"  type="text" title="City" name="str_city" validate="text" value="" placeholder="City">
										</div>
									</div>
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="cr-state"  size="30" type="text" title="State" name="str_state" validate="text" value="" placeholder="State">
										  <input class="form-control input-popup" required id="cr-zip"  size="6" type="text" title="Zip" name="str_zip" validate="text" value="" placeholder="Zip">
										</div>					
									</div>	
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="cr-phone"  size="12" type="text" title="Phone" name="str_phone" validate="phone" value="" placeholder="Phone">
										  <input class="form-control input-popup" required id="cr-email"  size="40" type="text" title="Email" name="str_email" validate="email" value="" placeholder="Email">
										</div>					
									</div>	
								</div>
									<div class="control-group">
										<div class="controls">
								 		  <input class="form-control input-popup" required id="str_name_on_card" size="50" type="text" title="Name on the Credit Card" name="str_name_on_card" validate="text" value="" placeholder="Name on the Credit Card">
										  <input class="form-control input-popup" required id="str_credit_card_no" type="text" title="Credit Card Number" name="str_credit_card_no" validate="creditcard" value="" placeholder="Credit Card Number">
										</div>					
									</div>		
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="str_expire_on" type="text" size="4" title="Expiry Date" name="str_expire_on" validate="text" value="" placeholder="Expiry Date (MMYY)">
										  <input class="form-control input-popup" required id="str_cvv" type="text" size="3" title="CVV" name="str_cvv" validate="cvv" value="" placeholder="CVV Code">
										</div>					
									</div>			
									<div class="control-group">
										<div class="controls">
										  <input class="form-control input-popup" required id="cr-amount" type="text" size="6"  title="Doation Amount" name="flt_amount" validate="text" value="" placeholder="Donation Amount">
										  <select class="form-control input-popup" required id="cr-str_cc_type" type="text" title="CC Type" name="str_cc_type" validate="text" >
											  <option value="VISA">VISA</option>
											 <option value="MASTERCARD">MasterCard</option>
										  </select>
										</div>					
									</div>						
								
								<div class="checkbox">
									<label><input  id="tnc" title="Accept T&C" name="tnc" type="checkbox"> Accept <a href="<?php echo $base_site_url;?>/main/tnc" target="_blank">Terms and Conditions</a></label>
								</div>
							</div>
							<div class="modal-footer">									
								<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
								<button class="btn btn-success" style="display:inline;" type="submit"  value="1" name="event_search" onClick="return validateDonateForm('frm-donate');">Donate</button>
							</div>
						</form>	
				  </div>
				  
				</div>
			  </div>
			  <!--End Modal -->




<div class="wpb_row pix-row vc_row-fluid vc_custom_1423312747633 light normal"	style="background-color: #735cb0 !important;">
    <div class="bg-pos-rel">
        <div class="pix-con clearfix">
            <div class="pix-container">
                <div class="vc_col-sm-12 wpb_column vc_column_container ">
                    <div class="wpb_wrapper">
                        <section class="eventform newsection">
                            <div class="container">
                               <input name="donate" type="submit" id="btn-donate" class="btn btn-md btn-pri" value="Donate Now" style="width:1150px;">
							   <button id="btn-donate-modal" class="md-trigger" data-toggle="modal" data-target="#modal-2" style="display:none;"> </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!------------------------------------Foooter----------------------------------------------------------->
<?php include_once('footer.php'); ?>


<?php include_once('footer-scripts.php'); ?>
        
<div class="md-overlay"></div><!-- the overlay element -->

<!-- classie.js by @desandro: https://github.com/desandro/classie -->
<script src="<?php echo $path;?>/js/classie.js"></script> 

<!-- for the blur effect -->
<!-- by @derSchepp https://github.com/Schepp/CSS-Filters-Polyfill -->
<script>
	// this is important for IEs
	var polyfilter_scriptpath = '/js/';
</script>
<script src="<?php echo $path;?>/js/cssParser.js"></script>
<script src="<?php echo $path;?>/js/css-filters-polyfill.js"></script>
<script src="<?php echo $path;?>/js/custom.js"></script>
        
        
        
</body>



<!-- Mirrored from themeinnwit.com/eventonwp/home2/ by SK Website Copier/3.x [XR&CO'2014], Fri, 17 Apr 2015 16:36:26 GMT -->
</html>
<!-- end of site. what a ride! -->