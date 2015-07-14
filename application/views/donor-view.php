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
			$pagename ='View Donor Details';
			include_once('breadcrums.php'); 
		?>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>View Donor Details</h2>
				<div class="box-icon"> 
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" >
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="selectError3">Name</label>
						<div class="controls">
						 <label class="control-label"><?php echo $donor->str_fname;?></label>
						</div>
					  </div>
					 <div class="control-group">
					 	<label class="control-label" for="email">Phone</label>
						<div class="controls">
							 <label class="control-label"><?php echo $donor->str_phone;?></label>
						</div>
					 </div> 
					 <div class="control-group">
						<label class="control-label" for="name">Email</label>
						<div class="controls">
						   <label class="control-label"><?php echo $donor->str_email;?></label>
						</div>
					</div>
					 <div class="control-group">
					 	<label class="control-label" for="email">City</label>
						<div class="controls">
							 <label class="control-label"><?php echo $donor->str_city;?></label>
						</div>
					 </div> 			
					<div class="form-actions">
					  <button type="reset" class="btn goback" data="donor/manage">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->