<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
?>
<!-- start: Content -->
<div id="content" class="span10">			
			
	<?php
			$pagename ='View Organization';
			include_once('breadcrums.php'); 
		?>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>View Organization</h2>
				<div class="box-icon">
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" >
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Name</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_name;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Short Name</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_short_name;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Email</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_email;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Address Line 1</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_address1;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Address Line 2</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_address2;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">City</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_city;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">State</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_state;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Country</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_country;?></label>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Zip</label>
						<div class="controls">
							 <label class="control-label"><?php echo $org->str_zip;?></label>
						</div>
					 </div>
					 <!---
					<div class="control-group">
					  <label class="control-label" for="date01">Date input</label>
					  <div class="controls">
						<input type="text" class="input-xlarge datepicker" id="date01" value="02/16/12">
					  </div>
					</div> -->

					 
					<div class="form-actions">
					  <button type="reset" class="btn goback" data="user/manageorg">Back</button>
					</div>
				  </fieldset>
				</form>
			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->