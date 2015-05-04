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
				<li><a href="#">Organization Users</a></li>
			</ul>
			<a href="<?php echo $base_site_url;?>/user/adduser"><span class=""><button class="btn btn-small btn-success pull-right">Add User</button></span></li></br>                                 
		<hr>
			<div class="row-fluid sortable">		
				<div class="box span12">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon user"></i><span class="break"></span>Organization Users</h2>
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
									<th>Organization</th>
									<th>Role</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>   
							<tbody>							
								<?php
									$CI =& get_instance(); 
									$url = $CI->config->config['base_url'];
								
									foreach ($users as $item)
									{ 
										//$image=$row['image_name'];
										echo '<tr>
												<td>'.$item->str_name.'</td>
												<td class="center">'.$item->str_org_name.'</td>
												<td class="center">'.$item->str_name.'</td>
												<td class="center">
													<span class="label label-success">Active</span>
												</td>
												<td class="center">
													<a href="'.$url.'/index.php/user/edituser/'.$item->int_org_user_id.'"><button class="btn btn-mini btn-primary">Edit</button></a>
													<a href="'.$url.'/index.php/user/viewuser/'.$item->int_org_user_id.'" class="btn btn-mini btn-success">View</a>
													<a href="'.$url.'/index.php/user/deleteorguser/'.$item->int_org_user_id.'" onclick="return confirmdelete();"><button class="btn btn-mini btn-danger">Delete</button></a>
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