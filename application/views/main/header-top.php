<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'].'/main';
	$resource_path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$name = $this->session->userdata("name");
	$loggedin = $this->session->userdata("loggedin");
	$int_user_type = $this->session->userdata("int_user_type_id"); 
	
?>
<div class="header-top">
<div class="container">
<div class="row">
<div class="col-md-5">
<ul class="contact-details clearfix">
	<li><i class="icon fa fa-paper-plane-o"></i><a
		href="mailto: info@yoursite.com">info@yoursite.com</a></li>
	<li><i class="icon fa fa-phone"></i>+ (009) 123 4567</li>
</ul>
</div>

<div class="col-md-7">
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

<?php if($loggedin==1){ ?>

<div class="pix-cart">
	<div class="cart-trigger">
		<div class="">
			<span class="pix-no-items"></span> 
			<span class="" style="color:yellow;">Welcome <?php echo $name; ?></span>
			<a class="pix-cart-contents" href="<?php echo $base_site_url;?>/user/logout" title="Login"><span class="fa "></span>
				<span class="">Logout</span>
			</a>
			
			<?php if($int_user_type==1 || $int_user_type==2){ ?>
				<a class="pix-cart-contents" href="<?php echo $base_site_url;?>/dashboard" title="Login"><span class="fa "></span>
					<span class=""><img src="<?php echo $resource_path;?>/img/dashboard.png" height="24" width="24"></span>
				</a>
			<?php } else if($int_user_type==3){ ?>
				<a class="pix-cart-contents" href="#" id="my-profile">
					<span>
						<img src="<?php echo $resource_path;?>/img/myprofile.png" height="24" width="24">
					</span>
				</a>
				<input type="button" class="md-trigger" data-toggle="modal" data-target="#modal-1" id="profile-popup" style="display:none;">
			<?php } ?>
		</div>
	</div>
</div>
<?php }else{ ?>


<div class="pix-cart">
	<div class="cart-trigger">
		<div class="">
			<span class="pix-no-items"></span> 
			<span class="pix-woo-price"><span class="amount">&pound;0.00</span></span> 
			<a class="pix-cart-contents" href="#" title="Login"><span class="fa "></span>
			<span class="">Login</span></a>			
		</div>
		<div class="woo-cart-dropdown">
			<div class="widget woocommerce widget_shopping_cart">
				<form class="form-horizontal" action="<?php echo $base_site_url;?>/login/authenticate" method="post">
					<h2 class="widgettitle">user name <input type="text" name="username"></h2>
					<h2 class="widgettitle">password <input type="password" name="password"></h2>
					<button name="event_search" value="1" type="submit" class="btn btn-md btn-pri">Login</button>
					<div class="widget_shopping_cart_content"></div>
				</form>
			</div>
		</div>
	</div>
</div>
<?php } ?>
<div class="pix-cart">
	<div class="cart-trigger">
		<div class="">
		<?php if($loggedin!=1){ ?>
			<span class="pix-no-items"></span> 
			<span class="pix-woo-price"><span class="amount">&pound;0.00</span></span> 
			<a class="pix-cart-contents" href="#" title="Login"><span class="fa "></span>
			<span class="md-trigger" data-toggle="modal" data-target="#modal-1">Sign Up</span></a>
		<?php } ?>
			
			 <!--Start Modal -->
			  <div class="modal fade" id="modal-1" role="dialog">
				<div class="modal-dialog">
				
				  <!-- Modal content-->
				  <div class="modal-content" id="frm_donor">
					<div class="modal-header">
					  <button type="button" class="close" data-dismiss="modal">&times;</button>
					  <h4 class="modal-title">Sign Up</h4>
					</div>
					<form class="form-horizontal" action="<?php echo $base_site_url;?>/user/donorsignup" method="post" id="signup"  role="form">				
						<input type="hidden" name="email_unique"  id="email_unique" value="0" field="email" usertype="donor">
						<div class="modal-body">
					 		<input type="hidden"  name="int_donor_id"  value="0" >
							<div class="control-group">
								<label class="control-label" for="name">First Name</label>
								<div class="controls">
								  <input class="form-control" id="fname" type="text" title="First Name" name="str_fname" validate="text" value="" placeholder="First Name">
								  <span class="help-inline" id="fname_msg"></span>
								</div>
								
							</div>
							<div class="control-group">
								<label class="control-label" for="lname">Last Name</label>
								<div class="controls">
								  <input class="form-control" id="lname" type="text" title="Last Name" name="str_lname" validate="text" value="" placeholder="Last Name">
								  <span class="help-inline" id="lname_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="email">Email</label>
								<div class="controls">
								  <input class="form-control" id="email" type="text" name="str_email"  title="Email" validate="email"  value="" placeholder="Email">
								   <span class="help-inline" id="email_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="address">Street Address</label>
								<div class="controls">
								  <input class="form-control" id="address" type="text" name="str_address"  title="Address" validate="text"  value="" placeholder="Street Address">
								   <span class="help-inline" id="address_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="city">City</label>
								<div class="controls">
								  <input class="form-control" id="city" type="text" name="str_city"  title="City" validate="text"  value="" placeholder="City">
								   <span class="help-inline" id="city_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="state">State</label>
								<div class="controls">
								  <input class="form-control" id="state" type="text" name="str_state"  title="State" validate="text"  value="" placeholder="State">
								   <span class="help-inline" id="state_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="zip">Zip</label>
								<div class="controls">
								  <input class="form-control" id="zip" type="text" name="str_zip"  title="Zip" validate="numeric"  value="" placeholder="Zip">
								   <span class="help-inline" id="zip_msg"></span>
								</div>
							</div>				
							<div class="control-group">
								<label class="control-label" for="phone">Phone</label>
								<div class="controls">
								  <input class="form-control" id="phone" type="text" name="str_phone"  title="Phone" validate="phone"  value="" placeholder="Phone">
								   <span class="help-inline" id="phone_msg"></span>
								</div>
							</div>
									
					  
					  
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
						<button class="btn btn-success" type="submit" id="btn-signup1" value="1" name="event_search" onClick="return validateForm('signup');">Signup</button>

					</div>
					</form>	
				  </div>
				  
				</div>
			  </div>
			  <!--End Modal -->
			
			
			
			
			<div class="md-overlay"></div>
	
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
		
		</div>
		
	</div>
</div>



</div>
</div>
</div>
</div>
</div>