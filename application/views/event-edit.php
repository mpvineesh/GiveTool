<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$pagename = 'Edit Event';
?>
<!-- start: Content -->
<div id="content" class="span10">			
			
	<?php include_once('breadcrums.php'); ?>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>Edit Event</h2>
				<div class="box-icon">
					<a href="#" class="btn-setting"><i class="halflings-icon wrench"></i></a>
					<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
					<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
				</div>
			</div>
			<div class="box-content">
				<form class="form-horizontal" method="post" action="<?php echo $base_site_url;?>/event/eventupdate" id="eventadd" enctype="multipart/form-data">
					<input type="hidden" name="int_event_id" value="<?php echo $int_event_id;?>">
					<input type="hidden" name="int_org_user_id" value="0">
					<fieldset>
					 <div class="control-group">
						<label class="control-label" for="focusedInput">Name</label>
						<div class="controls">
						  <input class="input-xlarge" id="name" type="text" name="str_name" placeholder="Event Name" title="Event Name" validate="text" value="<?php echo $event->str_name;?>">
						  <span class="help-inline" id="name_msg"></span>
						</div>
						 
					 </div>
					 <div class="control-group">
						<label class="control-label" for="shortname">Organization</label>
						<div class="controls">
						  <select id="selectError3" name="int_organization_id">
							<?php foreach ($organizations as $item)
								{ 
									$sel='';
									if($event->int_organization_id == $item->int_organization_id)
									$sel='selected'; 
									echo '<option value="'.$item->int_organization_id.'" '.$sel.'>'.$item->str_name.'</option>';        									
								}
							?>
						  </select>
						  <span class="help-inline" id="type_msg"></span>
					 </div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="description">Description</label>
						<div class="controls">
						  <textarea id="description" class="span4" name="str_description" value="" placeholder="Description" title="Description" validate="text"><?php echo $event->str_description;?></textarea>
						  <span class="help-inline" id="description_msg"></span>
					 </div>
					</div>
					<div class="control-group">
						<label class="control-label" for="startdate">Start Date</label>
						<div class="controls">
							<input id="startdate" class="input-medium datepicker" type="text" value="<?php echo date("d/m/Y", strtotime($event->start_date));?>" name="start_date" validate="date" title="Start Date">
							<span class="help-inline" id="startdate_msg"></span>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="starttime">Start Time</label>
						<div class="controls">
							 <div class="input-append bootstrap-timepicker">
								<input id="starttime" type="text" class="input-small" validate="time" name="start_time"  title="Start Time" value="<?php echo date('h:i A', strtotime($event->start_time));?>">
								<span class="add-on"><i class="icon-time"></i></span>
							</div>
							<span class="help-inline" id="starttime_msg"></span>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="enddate">End Date</label>
						<div class="controls">
							<input id="enddate" class="input-medium datepicker" type="text" name="end_date" value="<?php echo date("d/m/Y", strtotime($event->end_date));?>" validate="date"    title="End Date"> 
							<span class="help-inline" id="enddate_msg"></span>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="endtime">End Time</label>
						<div class="controls">
							 <div class="input-append bootstrap-timepicker">
								<input id="endtime" type="text" class="input-small" validate="time" name="end_time" title="End Time" value="<?php echo date('h:i A', strtotime($event->end_time));?>">
								<span class="add-on"><i class="icon-time"></i></span>
							</div>
							<span class="help-inline" id="endtime_msg"></span>
						</div>
					</div>
					 <div class="control-group">
						<label class="control-label" for="str_city">City</label>
						<div class="controls">
						  <input class="input-xlarge" id="str_city" type="text" name="str_city" value="<?php echo $event->str_city;?>" placeholder="City" validate="text">
						  <span class="help-inline" id="str_city_msg"></span>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="str_state">State</label>
						<div class="controls">
						  <input class="input-xlarge" id="str_state" type="text" name="str_state" value="<?php echo $event->str_state;?>" placeholder="State" validate="text">
							<span class="help-inline" id="str_state_msg"></span>
						</div>
					 </div>
					 <div class="control-group">
						<label class="control-label" for="str_country">Country</label>
						<div class="controls">
						  <input class="input-xlarge" id="str_country" type="text" name="str_country" value="<?php echo $event->str_country;?>" placeholder="Country" validate="text">
						  <span class="help-inline" id="str_country_msg"></span>
						</div>
					 </div>
					<div class="control-group">
					  <label class="control-label" for="fileInput">Logo</label>
					  <div class="controls">
						<input class="input-file uniform_on" id="fileInput" type="file" name="img_logo">
					  </div>
					</div>  
					<div class="control-group">
						<label class="control-label" for="amount1">Event Denominations</label>
						<div class="controls">
						  <input class="input-xlarge" id="amount1" type="text" size=6 name="flt_amount1" placeholder="Amount 1" title="Amount 1" validate="numeric"  value="<?php echo $event->str_denomination1;?>">
						  <span class="help-inline" id="amount1_msg"></span>
						</div>						 
					</div>	 
					 		 
					<div class="control-group">
						<label class="control-label" for="amount2"></label>
						<div class="controls">
						  <input class="input-xlarge" id="amount2" size=6 type="text" name="flt_amount2" placeholder="Amount 2" title="Amount 2" validate="numeric"  value="<?php echo $event->str_denomination2;?>">
						  <span class="help-inline" id="amount2_msg"></span>
						</div>
						 
					 </div>	
					<div class="control-group">
						<label class="control-label" for="amount3"></label>
						<div class="controls">
						  <input class="input-xlarge" id="amount3" size=6 type="text" name="flt_amount3"  placeholder="Amount 3" title="Amount 3" validate="numeric"  value="<?php echo $event->str_denomination3;?>">
						  <span class="help-inline" id="amount3_msg"></span>
						</div>						 
					 </div>		 		
					<div class="control-group">
						<label class="control-label" for="amount4"></label>
						<div class="controls">      
						  <input class="input-xlarge" id="amount4" size=6 type="text" name="flt_amount4"   placeholder="Amount 4" title="Amount 4" validate="numeric"  value="<?php echo $event->str_denomination4;?>">
						  <span class="help-inline" id="amount4_msg"></span>
						</div>						 
					 </div>					
					<div class="control-group"  style="display:none;">
						<label class="control-label" for="amount5"></label>
						<div class="controls">      
						  <input class="input-xlarge" id="amount5" size=6 type="text" name="flt_amount5" placeholder="Amount 5" title="Amount 5" value="0">
						  <span class="help-inline" id="amount5_msg"></span>
						</div>						 
					</div>
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary" onClick="return validateForm('eventadd')";>Save</button>
					  <button type="reset" class="btn goback" data="event/manage">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->