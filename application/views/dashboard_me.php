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
					<a href="index.php">Home</a> 
					<i class="icon-angle-right"></i>
				</li>
				<li><a href="#">Dashboard</a></li>
			</ul>
					<div class="row-fluid">
				
				<div class="box black span6" onTablet="span6" onDesktop="span6">
					<div class="box-header">
						<h2><i class="halflings-icon white list"></i><span class="break"></span>Weekly Stat</h2>
						<div class="box-icon">
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<ul class="dashboard-list metro">
							<li>
								<a href="#">
									<i class="icon-arrow-up green"></i>                               
									<strong>92</strong>
									New Comments                                    
								</a>
							</li>
						  <li>
							<a href="#">
							  <i class="icon-arrow-down red"></i>
							  <strong>15</strong>
							  New Registrations
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-minus blue"></i>
							  <strong>36</strong>
							  New Articles                                    
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-comment yellow"></i>
							  <strong>45</strong>
							  User reviews                                    
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-arrow-up green"></i>                               
							  <strong>112</strong>
							  New Comments                                    
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-arrow-down red"></i>
							  <strong>31</strong>
							  New Registrations
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-minus blue"></i>
							  <strong>93</strong>
							  New Articles                                    
							</a>
						  </li>
						  <li>
							<a href="#">
							  <i class="icon-comment yellow"></i>
							  <strong>256</strong>
							  User reviews                                    
							</a>
						  </li>
						</ul>
					</div>
				</div><!--/span-->
				
				<div class="box black span6" onTablet="span6" onDesktop="span6">
					<div class="box-header">
						<h2><i class="halflings-icon white user"></i><span class="break"></span>Recent Activity</h2>
						<div class="box-icon">
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<ul class="dashboard-list metro">
							<li class="green">
								<a href="#">
									<!--<img class="avatar" alt="Dennis Ji" src="img/avatar.jpg">-->
								</a>
								<strong>Name:</strong> Dennis Ji<br>
								<strong>Since:</strong> Jul 25, 2012 11:09<br>
								<strong>Status:</strong> Approved             
							</li>
							
							<li class="blue">
								<a href="#">
									<!--<img class="avatar" alt="Dennis Ji" src="img/avatar.jpg">-->
								</a>
								<strong>Name:</strong> Dennis Ji<br>
								<strong>Since:</strong> Jul 25, 2012 11:09<br>
								<strong>Status:</strong> Updated                                 
							</li>
							<li class="red">
								<a href="#">
									<!--<img class="avatar" alt="Dennis Ji" src="img/avatar.jpg">-->
								</a>
								<strong>Name:</strong> Dennis Ji<br>
								<strong>Since:</strong> Jul 25, 2012 11:09<br>
								<strong>Status:</strong> Banned                                  
							</li>
							<li class="yellow">
								<a href="#">
									<!--<img class="avatar" alt="Dennis Ji" src="img/avatar.jpg">-->
								</a>
								<strong>Name:</strong> Dennis Ji<br>
								<strong>Since:</strong> Jul 25, 2012 11:09<br>
								<strong>Status:</strong> Pending                                
							</li>
							
						</ul>
					</div>
				</div><!--/span-->
				
				
			</div>
							
					<div class="row-fluid">
						<div class="sparkLineStats span6 widget green" onTablet="span5" onDesktop="span6">
					<ul class="unstyled">
					    
					    <li><span class=""></span> 
						Pageviews: 
						<span class="number">781</span>
					    </li>
					    <li><span class=""></span>
						Pages / Visit: 
						<span class="number">2,19</span>
					    </li>
					    <li><span class=""></span>
						Avg. Visit Duration: 
						<span class="number">00:02:58</span>
					    </li>
					    <li><span class=""></span>
						% New Visits: 
						<span class="number">70,79%</span>
					    </li>
					    <li><span class=""></span>
						% Returning Visitor: 
						<span class="number">29,21%</span>
					    </li>
					</ul>
					<div class="clearfix"></div>
				</div><!-- End .sparkStats -->
						<div class="span3 statbox green" onTablet="span6" onDesktop="span3">
							<div class="boxchar">USERS</div>
							<div class="number">123<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<button data-toggle="modal" data-target="#news-view">read full report</button>
								<a href="#"> read full report</a>
							</div> -->
						</div>
						
						<!----Pop Up Starts------>
						<!-- <div class="modal fade in" id="news-view" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" >
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
										<h4 class="modal-title text-center" id="myModalLabel">New view</h4>
									</div>
									<div class="modal-body">
										<h4>Pop up</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto vero harum odio pariatur eum eius iure nemo commodi magni libero modi omnis reprehenderit minus, error et, cum laborum facilis assumenda!
										</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sapiente dolore, quibusdam enim sit architecto! Non ipsa id, perspiciatis, commodi aspernatur maxime similique minus ipsum porro rerum at.</p>
									</div>
									<div class="modal-footer">
									    <button type="button"  class="btn btn-default" data-dismiss="modal">Close</button>
									    <a href="#"  data-toggle="modal" data-target="#all-view" class="btn btn-primary">Save changes</a>
									</div>
								</div>
							</div>
						</div> -->
						<!----Pop Up Starts Ends------>
						
						<div class="span3 statbox blue noMargin" onTablet="span6" onDesktop="span3">
							<div class="boxchar">EVENTS</div>
							<div class="number">982<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#"> read full report</a>
							</div> -->
						</div>
						<div class="span3 statbox yellow" onTablet="span6" onDesktop="span3">
							<div class="boxchar">ORGANIZATIONS</div>
							<div class="number">678<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#"> read full report</a>
							</div> -->
						</div>	
					</div>		

			<div class="row-fluid">
				<div class="span8 widget" onTablet="span7" onDesktop="span8">
					<!--<div id="stats-chart2"  style="height:282px" ></div>-->
				</div>
			</div>
			
			<div class="row-fluid sortable">
				<div class="box span6">
					<div class="box-header" data-original-title>
						<h2><i class="halflings-icon edit"></i><span class="break"></span>FILTER </h2>
						<div class="box-icon">
							<!-- <a href="#" class="btn-setting"><i class="halflings-icon wrench"></i></a> -->
							<a href="#" class="btn-minimize"><i class="halflings-icon chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon remove"></i></a>
						</div>
					</div>
					<div class="box-content">
						<form class="form-horizontal">
							<fieldset>
							  <div class="control-group">
								<label class="control-label" for="selectError">Filter By</label>
								<div class="controls">
								  <select id="selectError" data-rel="chosen">
									<option value="1">select</option>
									<option value="">1.Summary</option>
									<option value="">2.By Months</option>
									<option value="">3.By Organization</option>
								  </select>
								 
								</div>
							  </div>
							  <div class="form-actions">
								<button type="submit" class="btn btn-primary">OK</button>
								<button class="btn">Cancel</button>
							  </div>
							</fieldset>
						</form>
					</div>

				</div><!--/span-->
						<div class="span3 statbox green" onTablet="span6" onDesktop="span3">
							<div class="boxchar">DONATIONS</div>
							<div class="number">123<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#">read full report </a>
							</div> -->
						</div>
						<div class="span3 statbox blue noMargin" onTablet="span6" onDesktop="span3">
							<div class="boxchar">ROYALTY</div>
							<div class="number">982<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#"> read full report</a>
							</div> -->
						</div>
			</div><!--/row-->

			
	
			<!-- end: Content -->