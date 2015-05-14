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
				<li><a href="#">Organizations</a></li>
			</ul>
			<a href="<?php echo $base_site_url;?>/user/addorganization"><span class=""><button class="btn btn-small btn-success pull-right">Add New</button></span></li></br>                                 
		<hr>
			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon user"></i><span class="break"></span>Organizations</h2>
						<div class="box-icon">
							<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<table class="table table-striped table-bordered bootstrap-datatable datatable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Short Name</th>
									<th>Email</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>   
							<tbody>							
								<?php
									$CI =& get_instance(); 
									$url = $CI->config->config['base_url'];
								
									foreach ($organizations as $item)
									{ 
										$className = ($item->chr_status == 'A')?'btn-success':'btn-danger';
										$status = ($item->chr_status == 'A')?'Active':'Inactive';	//$image=$row['image_name'];
										//$image=$row['image_name'];
										echo '<tr>
												<td>'.$item->str_name.'</td>
												<td class="center">'.$item->str_short_name.'</td>
												<td class="center">'.$item->str_email.'</td>
												<td class="center">
													<a class="btn btn-mini changeStatus '.$className.'"  data="'.$item->int_organization_id.'">'.$status.'</a>
												</td>
												<td class="center">
													<a href="'.$url.'/index.php/user/editorganization/'.$item->int_organization_id.'"><button class="btn btn-mini btn-primary">Edit</button></a>
													<a href="'.$url.'/index.php/user/vieworganization/'.$item->int_organization_id.'" class="btn btn-mini btn-success">View</a>
													<a href="'.$url.'/index.php/user/deleteorg/'.$item->int_organization_id.'" onclick="return confirmdelete();"><button class="btn btn-mini btn-danger">Delete</button></a>
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