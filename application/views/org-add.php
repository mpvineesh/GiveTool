<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
?>
<!-- start: Content -->
<div id="content" class="span10">			
			
	<ul class="breadcrumb">
		<li>
			<i class="icon-home"></i>
			<a href="index.html">Home</a>
			<i class="icon-angle-right"></i> 
		</li>
		<li>
			<i class="icon-edit"></i>
			<a href="#">Add Organization</a>
		</li>
	</ul>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>Add Organization</h2>
				<div class="box-icon">
					<a href="#" class="btn-setting"><i class="halflings-icon wrench"></i></a>
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" method="post" action="<?php echo $base_site_url;?>/user/orgadd" id="orgadd" enctype="multipart/form-data">
					<input type="hidden" name="int_org_id" value="">
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="name" type="text" name="str_name" value="" placeholder="Name" title="Name" validate="text">
						  <span class="help-inline" id="name_msg"></span>
						</div>
						 
					 </div>
					 <div class="control-group">
						<label class="control-label" for="shortname">Short Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="shortname" type="text" name="str_short_name" value="" placeholder="Short Name" title="Short Name" validate="text">
							 <span class="help-inline" id="shortname_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="email">Email</label>
						<div class="controls">
						  <input class="input-xlarge" id="email" type="text" name="str_email" value="" placeholder="Email" title="Email" validate="email">
							 <span class="help-inline" id="email_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="address1">Address Line 1</label>
						<div class="controls">
						  <input class="input-xlarge" id="address1" type="text" name="str_address1" value="" placeholder="Address Line 1" title="Address Line 1" validate="text">
							<span class="help-inline" id="address1_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="address2">Address Line 2</label>
						<div class="controls">
						  <input class="input-xlarge" id="address2" type="text" name="str_address2" value="" placeholder="Address Line 2" title="Address Line 2" validate="text">
							<span class="help-inline" id="address2_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="city">City</label>
						<div class="controls">
						  <input class="input-xlarge" id="city" type="text" name="str_city" value="" placeholder="City" title="City" validate="text">
							<span class="help-inline" id="city_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="state">State</label>
						<div class="controls">
						  <input class="input-xlarge" id="state" type="text" name="str_state" value="" placeholder="State" title="State" validate="text">
							<span class="help-inline" id="state_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="country">Country</label>
						<div class="controls">
						  <input class="input-xlarge" id="country" type="text" name="str_country" value="" placeholder="Country" title="Country" validate="text">
							<span class="help-inline" id="country_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="zip">Zip</label>
						<div class="controls">
						  <input class="input-xlarge" id="zip" type="text" name="str_zip" value="" placeholder="Zip" title="Zip" validate="numeric">
							<span class="help-inline" id="zip_msg"></span>
					 </div>
					</div>
					 <!---
					<div class="control-group">
					  <label class="control-label" for="date01">Date input</label>
					  <div class="controls">
						<input type="text" class="input-xlarge datepicker" id="date01" value="02/16/12">
					  </div>
					</div> --->

					<div class="control-group">
					  <label class="control-label" for="fileInput">Logo</label>
					  <div class="controls">
						<input class="input-file uniform_on" id="fileInput" type="file" name="img_logo">
					  </div>
					</div>    
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary" onClick="return validateForm('orgadd')";>Save</button>
					  <button type="reset" class="btn">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->