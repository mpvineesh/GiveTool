<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$pagename = 'Events';
?>

<!-- start: Content -->
	<div id="content" class="span10">		
		<?php include_once('breadcrums.php'); ?>
		<a href="<?php echo $base_site_url;?>/event/add"><span class=""><button class="btn btn-small btn-success pull-right">Add Event</button></span></li></br>                                 
		<hr>
		
		<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header">
						<h2><i class="halflings-icon white list"></i><span class="break"></span>Events </h2>
						<div class="box-icon">
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Organization</th>
									<th>Duration</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>   
							<tbody>							
								<?php
									$CI =& get_instance(); 
									$url = $CI->config->config['base_url'];
								
									foreach ($events as $item)
									{ 
										//$image=$row['image_name'];
										echo '<tr>
												<td>'.$item->str_name.'</td>
												<td class="center">'.$item->str_name.'</td>
												<td class="center">'.$item->str_name.'</td>
												<td class="center">
													<span class="label label-success">Active</span>
												</td>
												<td class="center">
													<a href="'.$url.'/index.php/user/edituser/'.$item->int_event_id.'"><button class="btn btn-mini btn-primary">Edit</button></a>
													<a href="'.$url.'/index.php/user/viewuser/'.$item->int_event_id.'" class="btn btn-mini btn-success">View</a>
													<a href="'.$url.'/index.php/user/deleteorguser/'.$item->int_event_id.'" onclick="return confirmdelete();"><button class="btn btn-mini btn-danger">Delete</button></a>
												</td>
											</tr>		';
									}
									
								?>			
							</tbody>
					  </table>             
					</div>
				</div><!--/span-->
			
			</div><!--/row-->
		
	</div><!--/.fluid-container-->
	
			<!-- end: Content -->