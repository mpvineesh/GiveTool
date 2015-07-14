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
			$pagename ='Organizations';
			include_once('breadcrums.php'); 
		?>
		<a href="<?php echo $base_site_url;?>/user/addorganization"><span class=""><button class="btn btn-small btn-success pull-right">Add Organization</button></span></li></br>                                 
		<hr>
		<div class="row-fluid">			
			<div class="box black span12 noMargin" onTablet="span12" onDesktop="span12">
				<div class="box-header">
					<h2><i class="halflings-icon white list"></i><span class="break"></span>Organizations </h2>
					<div class="box-icon">
						<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
						<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
					</div>
				</div>
				<div class="box-content">
					<ul class="tickets metro">
						<?php
							/*$perpage=1;
							if(isset($_GET['page']))
								$page=$_GET['page'];
							else
								$page=1;
							$from = (($page-1)*$perpage)+1;
							$rowpage=mysql_num_rows($products);// echo $rowpage;exit;
							$to = $from+$rowpage-1;
							//echo 'Showing Records '.$from.' to '.$to.' of '.$totalrecordcount;
							
							
							$i=$from;
							$n = mysql_num_rows($products);
							if($n < 2)
								$pageafterdelete = $page-1;
							else
								$pageafterdelete = $page;*/
							
							foreach ($organizations as $item)
							{ 
								echo '<li class="ticket">
										<a href="#">
											<span class="content">
												<span class="avatar"><img src="'.$path.'/img/avatar.jpg" alt="Avatar"></span>
												<span class="name">Dennis Ji</span>
												<span class="priority">[Delete</span>
												<span class="status">Status: [ Complete ]</span>
												<span class="date">+</span>
											</span>	                                                        
										</a>
									</li>';						
							}
							//paging
						?>					  
					</ul>
				</div>
			</div><!--/span-->
			
		</div>
	</div><!--/.fluid-container-->
	
			<!-- end: Content -->