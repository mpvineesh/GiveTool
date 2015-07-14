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
			$pagename ='Add Organization User';
			include_once('breadcrums.php'); 
		?>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>Add Organization User</h2>
				<div class="box-icon"> 
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" method="post" id="useradd" action="<?php echo $base_site_url;?>/user/saveorguser">
					<input type="hidden" name="int_org_user_id" value="<?php echo $int_org_user_id;?>">
					<input type="hidden" name="int_user_id" value="0">
					<input type="hidden" name="email_unique"  id="email_unique" value="0" field="email" usertype="orguser">
					<input type="hidden" name="passwordstrength"  id="passwordstrength"  value="0">
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="selectError3">Organization</label>
						<div class="controls">
						  <select id="orga-id" name="int_organization_id" title="Organization" validate="numeric">
							<option value=""> Select </option>
							<?php foreach ($orgs as $item)
								{ 
									$sel='';
									//if($content->int_content_type_id == $item->int_content_type_id)
									//$sel='selected'; 
									echo '<option value="'.$item->int_organization_id.'" '.$sel.'>'.$item->str_name.'</option>';        									
								}
							?>
						  </select>
						  <span class="help-inline" id="orga-id_msg"></span>
						</div>
					  </div>
					 <div class="control-group">
						<label class="control-label" for="name">Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="name" type="text" title="Name" name="str_name" validate="text" value="" placeholder="Name">
						  <span class="help-inline" id="name_msg"></span>
						</div>
					 </div>
					
					 <div class="control-group">
						<label class="control-label" for="email">Email</label>
						<div class="controls">
						  <input class="input-xlarge" id="email" type="text" name="str_email"  title="Email" validate="email"  value="" placeholder="Email">
						   <span class="help-inline" id="email_msg"></span>
						</div>
					 </div>
					<div class="control-group">
						<label class="control-label" for="password">Password</label>
						<div class="controls">
						  <input class="input-xlarge" id="password" type="password" name="str_password" title="Password" validate="text"  value="" placeholder="Password">
						  <span class="help-inline" id="passstrength"></span>
						  <span class="help-inline" id="password_msg"></span>
						</div>
					 </div>    
					<div class="control-group">
						<label class="control-label" for="confirm-password">Confirm Password</label>
						<div class="controls">
						  <input class="input-xlarge" id="confirm-password" type="password" name="str_password1" title="Retype Password" validate="text"  value="" placeholder="Confirm Password">
						  <span class="help-inline" id="confirm-password_msg"></span>
						</div>
					 </div>    
					<div class="control-group" id="field-enable-admin">
						<label class="control-label" id="label-enable-admin">Enable Admin Privilages</label>
						<div class="controls">
						  <label class="checkbox inline">
							<div class="checker"><span><input id="enable-admin" type="checkbox" name="bit_is_admin" value="1"></span></div> 
						  </label>
						</div>
					 </div>
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary" onClick="return validateForm('useradd')";>Save</button>
					  <button type="reset" class="btn goback" data="user/manageusers">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->