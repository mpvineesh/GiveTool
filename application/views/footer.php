<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
?>
</div><!--/#content.span10-->
		</div><!--/fluid-row-->
		
	<div class="modal hide fade" id="myModal">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">�</button>
			<h3>Settings</h3>
		</div>
		<div class="modal-body">
			<p>Here settings can be configured...</p>
		</div>
		<div class="modal-footer">
			<a href="#" class="btn" data-dismiss="modal">Close</a>
			<a href="#" class="btn btn-primary">Save changes</a>
		</div>
	</div>
	<div class="modal hide fade" id="adminSettings">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">
				<a class="btn-close" href="#"><i class="halflings-icon remove"></i></a>
			</button>
			<h3>Settings</h3>
		</div>
		<div class="modal-body">
		<form class="form-horizontal" method="post" action="/user/orgadd">
				  <fieldset>
			<div class="control-group">
				<label class="control-label" for="focusedInput">Current Password</label>
				<div class="controls">
				  <input class="input-xlarge" id="focusedInput" type="password" name="str_password" value="" placeholder="Current Password">
				</div>
			 </div>
			 <div class="control-group">
				<label class="control-label" for="focusedInput">New Password</label>
				<div class="controls">
				  <input class="input-xlarge" id="focusedInput" type="password" name="str_new_password" value="" placeholder="New Password">
				</div>
			 </div>
			 <div class="control-group">
				<label class="control-label" for="focusedInput">Retype Password</label>
				<div class="controls">
				  <input class="input-xlarge" id="focusedInput" type="password" name="str_new_password_1" value="" placeholder="Retypr Password">
				</div>
			 </div>
			  </fieldset>
				</form>   
		</div>
		<div class="modal-footer">
			<a href="#" class="btn" data-dismiss="modal">Close</a>
			<a href="#" class="btn btn-primary">Save changes</a>
		</div>
	</div>
	<div class="clearfix"></div>
	
	<footer>

		<p>
			<span style="text-align:left;float:left">&copy; 2013 <a href="http://jiji262.github.io/Bootstrap_Metro_Dashboard/" alt="Bootstrap_Metro_Dashboard">Bootstrap Metro Dashboard</a></span>
			
		</p>

	</footer>
	
	<!-- start: JavaScript-->

	<script src="<?php echo $path;?>/js/jquery-1.9.1.min.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery-migrate-1.0.0.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery-ui-1.10.0.custom.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.ui.touch-punch.js"></script>

	<script src="<?php echo $path;?>/js/modernizr.js"></script>

	<script src="<?php echo $path;?>/js/bootstrap.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.cookie.js"></script>

	<!---<script src='<?php echo $path;?>/js/fullcalendar.min.js'></script> --->

	<script src='<?php echo $path;?>/js/jquery.dataTables.min.js'></script>

	<script src="<?php echo $path;?>/js/excanvas.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery.flot.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery.flot.pie.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery.flot.stack.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery.flot.resize.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.chosen.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.uniform.min.js"></script>
	
	<script src="<?php echo $path;?>/js/jquery.cleditor.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.noty.js"></script>

	<script src="<?php echo $path;?>/js/jquery.elfinder.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.raty.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.iphone.toggle.js"></script>

	<script src="<?php echo $path;?>/js/jquery.uploadify-3.1.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.gritter.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.imagesloaded.js"></script>

	<script src="<?php echo $path;?>/js/jquery.masonry.min.js"></script>

	<script src="<?php echo $path;?>/js/jquery.knob.modified.js"></script>

	<script src="<?php echo $path;?>/js/jquery.sparkline.min.js"></script>

	<script src="<?php echo $path;?>/js/counter.js"></script>

	<script src="<?php echo $path;?>/js/retina.js"></script>
	<script src="<?php echo $path;?>/js/validate.js"></script>

	<script src="<?php echo $path;?>/js/custom.js"></script>
	<script src="<?php echo $path;?>/js/bootstrap-timepicker.min.js"></script>
	<!-- end: JavaScript-->
	<script type="text/javascript">
		$(document).ready(function() {
			$('.dropmenu').live('click',function(){
				var id = this.id; 
				var sign = $('.sign_'+id).html();
				if(sign=="-"){
					$('.sign_'+id).html('+');
				}else{
					$('.sign_'+id).html('-');
				}				
			});
		});
	</script>
	<script type="text/javascript">
		$('#starttime').timepicker();
		$('#endtime').timepicker();
	</script>
</body>
</html>
