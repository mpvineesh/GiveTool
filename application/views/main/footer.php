<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'].'/main';
	$path1 = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$name = $this->session->userdata("name");
	$int_user_type = $this->session->userdata("int_user_type_id"); 
	$int_user_id = $this->session->userdata("int_user_id"); 
	if($int_user_id =='')
		$int_user_id=0; 
?>
<footer class="footer col3" role="contentinfo">



<div class="main-footer">
<div id="inner-footer" class="container">
	<div id="text-2" class="widget widget_text clearfix ">
		<h2 class="title">About Us<span class="border"></span></h2>
		<div class="textwidget">Dynamically administrate equity invested
		networks via competitive human capital. Quickly orchestrate back end
		services whereas user manufactured products. Collaboratively fashion
		emerging metrics through real-time customer service. Progressively
		iterate dynamic interfaces after mission critical. Distinctively
		underwhelm plug-and-play meta-services and leading-edge paradigms.</div>
		</div>
		<div id="pix_recent_post-3" class="widget recentpost clearfix ">
			<h2 class="title">Recent Events<span class="border"></span></h2>
			<div class="sidebar-post-widget">
				<ul>

					<?php 
						$CI =& get_instance(); 
						$url = $CI->config->config['base_url'];	
						foreach ($recentevents as $item){
							echo '	
								<li class="clearfix">
									<div class="postimg">
										<img src="'.$base_path.'/uploads/events/'.$item->int_event_id.'/logo/'.$item->str_logo.'" alt="" width="70" height="70">
																			</div>
									<div class="content ">
									<p><a href="'.$url.'/index.php/main/eventdetails/'.$item->int_event_id.'">'.$item->str_name.'</a></p>
									<span class="meta">'.$item->start_date.'</span></div>
								</li>
								
								';				
						}		
					?>		

					

				</ul>
			</div>
		</div>
		<div id="pix_popular_post-3" class="widget popularpost clearfix ">
			<h2 class="title">Contact Us<span class="border"></span></h2>
			<div class="textwidget">
				<p>Address: Dynamically administrate equity invested<p>
				<p>Address1: networks via competitive human capital<p>
				<p>Address2: services whereas user manufactured <p>
				<p>Address3: emerging metrics through real-time<p>
				<p>Address3: emerging metrics through real-time<p>
			</div>
		</div>
	</div>
</div>


<div id="copyright">
<div class="container">
<div class="copyright row">
<div class="col-md-6">
<p>© 2015 <a href="">Home</a> ,
All Rights Reserved.</p>
</div>
<div class="col-md-6">
	<div class="social-icon pull-right"><a href="#"
	class="facebook fa fa-facebook"></a><a href="#"
	class="twitter fa fa-twitter"></a><a href="#"
	class="googleplus fa fa-google-plus"></a><a href="#"
	class="linkedin fa fa-linkedin"></a><a href="#"
	class="flickr fa fa-flickr"></a><a href="#"
	class="pinterest fa fa-pinterest"></a><a href="#"
	class="tumblr fa fa-tumblr"></a><a href="#" class="rss fa fa-rss"></a>
	</div>
	
</div>


</div>
</div>
</div>
</footer>
<script type="text/javascript">
		jQuery(document).ready(function ($) {
		<?php 
				if(isset($_GET["loginfailed"])){
					echo 'alert("Invalid credentials");';
				}
				if(isset($_GET["updated"])){
					echo 'alert("Password Updated Successfully");';
				}
		?>	
		// Save Ratings
		$("#btn-signup").live("click", function(e){
			e.preventDefault();
			
			var _this = $(this);
			var options = {
				url:'<?php  echo $base_path; ?>/index.php/main/signup'
				, type:'post'                       
			};
			options.data = $("form#signup").serialize();
			options.error	= function(e){
				console.log( e.responseText );
			};
			options.success = function(d){
				alert('You will get a confirmation mail soon');
				document.getElementById("signup").reset(); 
				 $( "#closepopup" ).trigger( "click" );
			}; 
			$.ajax(options);
			return false;
			
		});
		$("#btn-donate").bind("click", function(e){
			$( "#btn-donate-modal" ).trigger( "click" );
			e.preventDefault();
			<?php if($int_user_id >0){ ?>
			var _this = $(this);
			var options = {
				url:'<?php  echo $base_path; ?>/index.php/main/getdonordata/<?php  echo $int_user_id ; ?>'
				, type:'get'                       
			}; 
			options.error	= function(e){
				console.log( e.responseText );
			};
			options.success = function(d){ 
				// $( "#form-fields" ).html(d);
				 var amount = $( "#specifiedamount" ).val();
				 $("#cr-amount" ).val(amount); 
			}; 
			$.ajax(options);
			<?php } ?>
			
		});
		$("#my-profile").bind("click", function(e){
			$("#profile-popup" ).trigger( "click" ); 
			<?php if($int_user_id >0){ ?>
			var _this = $(this);
			var options = {
				url:'<?php  echo $base_path; ?>/index.php/donor/myprofile/<?php  echo $int_user_id ; ?>'
				, type:'get'                       
			}; 
			options.error	= function(e){
				console.log( e.responseText );
			};
			options.success = function(d){ 
				$( "#frm_donor" ).html(d);
				
			}; 
			$.ajax(options);
			<?php } ?>
			
		});
		<?php if(isset($updatepassword) && $updatepassword == 1){ ?>
			$("#cp_user_id" ).val(<?php echo $int_user_id;?>); 
			$("#password-update-popup" ).trigger( "click" ); 			 
		<?php } ?>
		<?php if(isset($updatepassword) &&$updatepassword == 0){ ?>		
			$("#btnUpdatePassword" ).hide(); 		 
			$("#update-content").html('This link is expired'); 		 
			$("#password-update-popup" ).trigger( "click" ); 		 
		<?php } ?>	
	});
		
		
	</script>

<script src="<?php echo $path1;?>/js/validate.js"></script>
<script src="<?php echo $path;?>/js/custom.js"></script>