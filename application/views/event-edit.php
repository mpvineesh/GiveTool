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
					<input type="hidden" name="int_event_id" value="<?php echo $event->int_event_id;?>">
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
						<label class="control-label" for="shortname">Type</label>
						<div class="controls">
						  <select class="input-xlarge" id="type" type="text" name="int_event_type_id" title="Event Type" validate="numeric">
							<option value="">Select</option>
							<option value="1">Type 1</option>
							<?php foreach ($eventtypes as $item)
								{ 
									$sel='';
									if($event->int_event_type_id == $item->int_event_type_id)
									$sel='selected'; 
									echo '<option value="'.$item->int_event_type_id.'" '.$sel.'>'.$item->str_name.'</option>';        									
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
					  <label class="control-label" for="fileInput">Logo</label>
					  <div class="controls">
						<input class="input-file uniform_on" id="fileInput" type="file" name="img_logo">
					  </div>
					</div>    
					<div class="form-actions">
					  <button type="submit" name="btn_add" class="btn btn-primary" onClick="return validateForm('eventadd')";>Save</button>
					  <button type="reset" class="btn">Cancel</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->