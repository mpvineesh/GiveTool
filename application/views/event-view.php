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
			$pagename ='View Events';
			include_once('breadcrums.php'); 
	?>
	
	<div class="row-fluid sortable">
		<div class="box span12">
			<div class="box-header" data-original-title>
				<h2><i class="halflings-icon edit"></i><span class="break"></span>View Event</h2>
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
						  <label class="control"><?php echo $event->str_name;?></label>
						</div>
						 
					 </div>
			
					 <div class="control-group">
						<label class="control-label" for="description">Description</label>
						<div class="controls">
						  <label class=""><?php echo $event->str_description;?></label>
					</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="startdate">Start Date</label>
						<div class="controls">
							<label class=" "><?php echo date("d/m/Y", strtotime($event->start_date));?></label>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="starttime">Start Time</label>
						<div class="controls">
							 <div class="input-append bootstrap-timepicker">
								<label class=" "><?php echo date('h:i A', strtotime($event->start_time));?></label>
							</div>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="enddate">End Date</label>
						<div class="controls">
							<label class=" "><?php echo date("d/m/Y", strtotime($event->end_date));?></label>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="endtime">End Time</label>
						<div class="controls">
							<div class="input-append bootstrap-timepicker">
								<label class=" "><?php echo date('h:i A', strtotime($event->end_time));?></label>
							</div> 
						</div>
					</div>
					
					<div class="form-actions">
					  <button type="reset" class="btn goback" data="event/manage">Back</button>
					</div>
				  </fieldset>
				</form>   

			</div>
		</div><!--/span-->

	</div><!--/row-->

</div><!--/.fluid-container-->	
<!-- end: Content -->