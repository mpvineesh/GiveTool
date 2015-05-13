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
			<a href="#">Add Organization User</a>
		</li>
	</ul>
	
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
				<form class="form-horizontal" id="useradd" method="post" action="<?php echo $base_site_url;?>/user/saveorguser">
				<input type="hidden" name="int_org_user_id" value="<?php echo $int_org_user_id;?>">
				  <fieldset>
					 <div class="control-group">
						<label class="control-label" for="selectError3">Organization</label>
						<div class="controls">
						  <select id="selectError3" name="int_organization_id">
							<?php foreach ($orgs as $item)
								{ 
									$sel='';
									if($orguser->int_organization_id == $item->int_organization_id)
									$sel='selected'; 
									echo '<option value="'.$item->int_organization_id.'" '.$sel.'>'.$item->str_name.'</option>';        									
								}
							?>
						  </select>
						</div>
					  </div>
					 <div class="control-group">
						<label class="control-label" for="name">Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="name" type="text" name="str_name" title="Name" validate="text" value="<?php echo $orguser->str_name;?>" placeholder="Name">
						  <span class="help-inline" id="name_msg"></span>
						</div>
					 </div>
					
					 <div class="control-group">
						<label class="control-label" for="email">Email</label>
						<div class="controls">
						  <input class="input-xlarge" id="email" type="text" name="str_email" title="Email" validate="email" value="<?php echo $orguser->str_email;?>" placeholder="Email">
						   <span class="help-inline" id="email_msg"></span>
						</div>
					 </div>
					<div class="control-group">
						<label class="control-label" for="password">Password</label>
						<div class="controls">
						  <input class="input-xlarge" id="password" type="password" name="str_password" title="Password" validate="text" value="<?php echo $orguser->str_password;?>" placeholder="Password">
						  <span class="help-inline" id="password_msg"></span>
						</div>
					 </div>    
					<div class="control-group">
						<label class="control-label" for="confirm-password">Confirm Password</label>
						<div class="controls">
						  <input class="input-xlarge" id="confirm-password" type="password" name="str_password1" title="Retype Password" validate="text" value="<?php echo $orguser->str_password;?>" placeholder="Confirm Password">
						  <span class="help-inline" id="confirm-password_msg"></span>
						</div>
					 </div>   
					<div class="control-group">
						<label class="control-label">Enable Admin Privilages</label>
						<div class="controls"> 
							<input type="checkbox" <?php if($orguser->bit_is_admin ==1) echo 'checked="checked"'; ?> name="bit_is_admin" value="1"> 
						</div>
					 </div>
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary" onClick="return validateForm('useradd')";>Save</button>
					  <button type="reset" class="btn goback">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->