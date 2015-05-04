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
			<a href="#">Edit Organization</a>
		</li>
	</ul>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>Edit Organization</h2>
				<div class="box-icon">
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" method="post" action="<?php echo $base_site_url;?>/user/orgupdate">
					<input type="hidden" name="int_org_id" value="<?php echo $org->int_organization_id;?>" >
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_name" value="<?php echo $org->str_name;?>" placeholder="Name">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Short Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_short_name" value="<?php echo $org->str_short_name;?>" placeholder="Short Name">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Email</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_email" value="<?php echo $org->str_email;?>" placeholder="Email">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Address Line 1</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_address1" value="<?php echo $org->str_address1;?>" placeholder="Address Line 1">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Address Line 2</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_address2" value="<?php echo $org->str_address2;?>" placeholder="Address Line 2">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">City</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_city" value="<?php echo $org->str_city;?>" placeholder="City">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">State</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_state" value="<?php echo $org->str_state;?>" placeholder="State">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Country</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_country" value="<?php echo $org->str_country;?>" placeholder="Country">
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Zip</label>
						<div class="controls">
						  <input class="input-xlarge" id="focusedInput" type="text" name="str_zip" value="<?php echo $org->str_zip;?>" placeholder="Zip">
						</div>
					 </div>
					 <!---
					<div class="control-group">
					  <label class="control-label" for="date01">Date input</label>
					  <div class="controls">
						<input type="text" class="input-xlarge datepicker" id="date01" value="02/16/12">
					  </div>
					</div> -->

					<div class="control-group">
					  <label class="control-label" for="fileInput">Logo</label>
					  <div class="controls">
						<input class="input-file uniform_on" id="fileInput" type="file" name="img_logo">
					  </div>
					</div>    
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary">Save</button>
					  <button type="reset" class="btn">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->