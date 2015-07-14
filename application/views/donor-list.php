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
			$pagename ='Donor Details';
			include_once('breadcrums.php'); 
		?>
			<hr>
			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon user"></i><span class="break"></span>Donors</h2>
						<div class="box-icon">
							<a href="#" class="btn-setting"><i class="halflings-icon wrench"></i></a>
							<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Location</th>
									<th>Event Name</th>
									<th>Start Date</th>
									<th>End Date</th>
									<th>Amount</th>
									<th>Actions</th>
								</tr>
							</thead>   
							<tbody>							
								<?php
									$CI =& get_instance(); 
									$url = $CI->config->config['base_url'];
								
									foreach ($donors as $item)
									{ 
										//$image=$row['image_name'];
										echo '<tr>
												<td>'.$item->str_fname.'</td>
												<td class="center">'.$item->str_email.'</td>
												<td class="center">'.$item->str_city.'</td>
												<td class="center">'.$item->str_city.'</td>
												<td class="center">'.$item->str_city.'</td>
												<td class="center">'.$item->str_city.'</td>
												<td class="center">
													<a href="'.$url.'/index.php/donor/view/'.$item->int_donor_id.'" class="btn btn-mini btn-success">View</a>
													<a href="'.$url.'/index.php/donor/delete/'.$item->int_donor_id.'" onclick="return confirmdelete();"><button class="btn btn-mini btn-danger">Delete</button></a>
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
			
			

			
			
	