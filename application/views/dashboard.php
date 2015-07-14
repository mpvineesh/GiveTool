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
			$pagename ='Dashboard';
			include_once('breadcrums.php'); 
		?>
			
					<div class="row-fluid">
				
				<div class="box black span6" onTablet="span6" onDesktop="span6">
					<div class="box-header">
						<h2><i class="halflings-icon white list"></i><span class="break"></span>Weekly Stat</h2>
						<div class="box-icon">
							<a href="#" class="btn-minimize"><i class="halflings-icon white chevron-up"></i></a>
							<a href="#" class="btn-close"><i class="halflings-icon white remove"></i></a>
						</div>
					</div>
					<!--<div class="box-content">
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
							  <i class="icon-arrow-up green"></i>
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
					</div>-->
					<div class="box-content">
						<ul class="dashboard-list metro">
							<li>
								<a href="#">
									<?php 
									if($weeklyNewUsers==''){$weeklyNewUsers = 0;}
										if($weeklyNewUsers>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$weeklyNewUsers.'</strong>
											New Users';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$weeklyNewUsers.'</strong>
											New Users';  
										}?>                        
								</a>
							</li>
						  <li>
							<a href="#">
							  <?php 
									if($weeklyNewOrganizationsAdded==''){$weeklyNewOrganizationsAdded = 0;}
										if($weeklyNewOrganizationsAdded>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$weeklyNewOrganizationsAdded.'</strong>
											New Organizations';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$weeklyNewOrganizationsAdded.'</strong>
											New Organizations';  
										}?>   
							</a>
						  </li>
						  <li>
							<a href="#">
							  <?php 
									if($weeklyNewDonorsAdded==''){$weeklyNewDonorsAdded = 0;}
										if($weeklyNewDonorsAdded>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$weeklyNewDonorsAdded.'</strong>
											New Donors';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$weeklyNewDonorsAdded.'</strong>
											New Donors';  
										}?>                                  
							</a>
						 </li>
						 
						  <li>
							<a href="#">
							<?php 
									if($weeklyNumberOfDonations==''){$weeklyNumberOfDonations = 0;}
										if($weeklyNumberOfDonations>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$weeklyNumberOfDonations.'</strong>
											New Donations';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$weeklyNumberOfDonations.'</strong>
											New Donations';  
										}?> 	
										</a>
						  </li>
						  <li>
							<a href="#">
							  <?php 
									$weeklyTotalDonationAmount = $weeklyTotalDonationAmount->flt_amount;
									if($weeklyTotalDonationAmount==''){$weeklyTotalDonationAmount = 0;}
										if($weeklyTotalDonationAmount>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>$'.round($weeklyTotalDonationAmount,2).'</strong>
											Donations Processed';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>$'.round($weeklyTotalDonationAmount,2).'</strong>
											Donations Processed';  
										}?>                         
							</a>
						  </li>
						  <li>
							<a href="#">
							  <?php 
									if($weeklyNewEvents==''){$weeklyNewEvents = 0;}
										if($weeklyNewEvents>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$weeklyNewEvents.'</strong>
											New Events';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$weeklyNewEvents.'</strong>
											New Events';  
										}?>                                
							</a>
						  </li>
						  <li>
						  <a href="#">
							  <?php 
									if($thisWeeksEvents==''){$thisWeeksEvents = 0;}
										if($thisWeeksEvents>0)
										{
											echo '<i class="icon-arrow-up green"></i>                               
											<strong>'.$thisWeeksEvents.'</strong>
											Active Events This Week';    
										}
										else
										{
											echo '<i class="icon-arrow-down red"></i>                               
											<strong>'.$thisWeeksEvents.'</strong>
											Active Events This Week';  
										}?>                                
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
					<div class="box-content" style="min-height:238px;max-height:350px;overflow:auto;">
						<ul class="dashboard-list metro">
							<!--<li class="green">
								<a href="#">
									<img class="avatar" alt="Dennis Ji" src="img/avatar.jpg">
								</a>-->
								<?php
									function cmp($a, $b){
										$ad = strtotime($a->date);
										$bd = strtotime($b->date);
										return ($ad-$bd);
									}
								$RecentActivity = (array)$RecentActivity1;
								usort($RecentActivity, 'cmp');
								$content = '';
								$i = 1;
								foreach($RecentActivity as $item)
								{
									if(($i%2)==0){
										$content .= '<li class="orange">';
										$content .= '<strong>Activity: </strong>'.$item->Activity_Name.'<br>';
										if($item->act_id==1){
											$content .= '<strong>Donor Name: </strong>'.$item->Name1.' '.$item->Name2.'<br>';
											$content .= '<strong>Amount Donated: </strong>$'.$item->Amount.'<br>';
											$content .= '<strong>Event Name: </strong>'.$item->event_name.'<br>';
											}
										else{
											$content .= '<strong>Event Name: </strong>'.$item->Name2.'<br>';											
											$content .= '<strong>Organization Name: </strong>'.$item->org_name.'<br>';	
											}
										
									$content .= '</i>';
									}
									else
									{
										$content .= '<li class="green">';
										$content .= '<strong>Activity: </strong>'.$item->Activity_Name.'<br>';
										if($item->act_id==1){
											$content .= '<strong>Donor Name: </strong>'.$item->Name1.' '.$item->Name2.'<br>';
											$content .= '<strong>Amount Donated: </strong>$'.$item->Amount.'<br>';
											$content .= '<strong>Event Name: </strong>'.$item->event_name.'<br>';
											}
										else{
											$content .= '<strong>Event Name: </strong>'.$item->Name2.'<br>';											
											$content .= '<strong>Organization Name: </strong>'.$item->org_name.'<br>';	
											}
										
									$content .= '</i>';
									}
									$i = $i+1;
								}
								echo $content;
								
								?>								    							
						</ul>
					</div>
				</div><!--/span-->
				
				
			</div>
							
					<div class="row-fluid">
						<div class="sparkLineStats span6 widget green" onTablet="span5" onDesktop="span6">
					<ul class="unstyled">					    
					    <li><span class=""></span> 
						Total Site Hits: 
						<span class="number"><?php echo $totalSiteHits->int_views; ?></span>
					    </li>
						<li><span class=""></span> 
						Distinct Site Hits: 
						<span class="number"><?php echo $distinctSiteHits; ?></span>
					    </li>
					    <li><span class=""></span>
						Total Event Hits: 
						<span class="number"><?php echo $totalEventHits->int_views; ?></span>
					    </li>
					    <li><span class=""></span>
						Distinct Site Hits: 
						<span class="number"><?php echo $distinctEventHits; ?></span>
					    </li>
					    <li><span class=""></span>
						% New Visits: 
						<span class="number"><?php echo round($percentageNewVisits,2); ?>%</span>
					    </li>
					    <li><span class=""></span>
						% Returning Visits: 
						<span class="number"><?php echo round($percentageReturningVisitors,2); ?>%</span>
					    </li>
					</ul>
					<div class="clearfix"></div>
				</div><!-- End .sparkStats -->
						<div class="span3 statbox green" onTablet="span6" onDesktop="span3">
							<div class="boxchar">USERS</div>
							<div class="number"><?php
										echo $totalUsers;								
								?><i class=""></i></div>
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
							<div class="number"><?php
										echo $totalEvents;								
								?><i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#"> read full report</a>
							</div> -->
						</div>
						<div class="span3 statbox yellow" onTablet="span6" onDesktop="span3">
							<div class="boxchar">ORGANIZATIONS</div>
							<div class="number"><?php
										echo $totalOrgs;								
								?><i class=""></i></div>
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
								  <select id="selectError" data-rel="chosen" onchange="ChangeFilterProp()">									
									<option value="0">Summary</option>
									<option value="1">By Months</option>
									<option value="2">By Organization</option>									
								  </select>								  							 
								</div>
							  </div>
							 <div class="filter-content-admin-dashboard" style="padding 0 20px 20px 20px;">
								<div id="my-filter-block-summary" style="display:none;text-align:center;">
									<h5>Total Payments and Royalty are displayed at right side</h5>
								</div>
								<div id="my-filter-block-month" style="display:none;">
									<h3 style="text-align:center;">SUMMARY BY MONTH</h3>
										<div style="padding-left:10px;">
										<select id="selectYear" data-rel="chosen">
										<option value="0">Select Year</option>
										<?php 
											  $HTMLElement = '';
											  $optionStart='<option value="';
											  $optionEnd='<option/>';
											  $i=0;
											  $yearStart = 2010;
											  $limit=100;											  
											  for($i=0;$i<$limit;$i++)
											  {
												 $year = $yearStart+$i;
												 $HTMLElement .= $optionStart;
												 $HTMLElement .= $year;
												 $HTMLElement .= '">'.$year.$optionEnd;
											  }
											 echo $HTMLElement;
											?>
										</select>
										<select id="selectMonth" data-rel="chosen">									
											<option value="0">Select Month</option>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>									
											<option value="4">April</option>									
											<option value="5">May</option>									
											<option value="6">June</option>									
											<option value="7">July</option>									
											<option value="8">August</option>									
											<option value="9">September</option>									
											<option value="10">October</option>									
											<option value="11">November</option>									
											<option value="12">December</option>																				
										</select></div>										
										  <div class="form-actions" style="padding-left:200px">
											<h2 class="btn btn-primary" id="btn-filter-month">FILTER</h2>											
										  </div>
								</div>
								<div id="my-filter-block-org" style="display:none;">
									<h3 style="text-align:center;">SUMMARY BY ORGANIZATION</h3>
									<div>
										</br><div style="display:block;padding-left:125px;">
										<select id="selectOrganization" data-rel="chosen">										
										<option value="0">Select Organization</option>
										<?php 
											  $HTMElement = '';
											  $optionStart='<option value="';
											  $optionEnd='<option/>';
											  foreach($allorgs as $allOrganization)
											  {												
												 $HTMElement .= $optionStart;
												 $HTMElement .= $allOrganization->int_organization_id;
												 $HTMElement .= '">'.$allOrganization->str_name.$optionEnd;
											}											  
											 echo $HTMElement;												
											?>
										</select></div>
										<div class="form-actions" style="padding-left:200px">
											<h2 class="btn btn-primary" id="btn-filter-org">FILTER</h2>											
										 </div>
										</div>	
								</div>
							</div>
							  <!--<div class="form-actions">
								<button type="submit" class="btn btn-primary">OK</button>
								<button class="btn">Cancel</button>
							  </div>-->
							</fieldset>
						</form>
					</div>
				</div><!--/span-->
								<script src="<?php echo $path;?>/js/jquery-1.9.1.min.js" type="text/javascript"></script>
								<script type="text/javascript">							
									function ChangeFilterProp()
									{
										var obj = document.getElementById('selectError');
										var SelectedId = obj.options[obj.selectedIndex].value;										
										if(SelectedId==0){
											document.getElementById('my-filter-block-summary').style.display = "block";
											document.getElementById('my-filter-block-month').style.display = "none";
											document.getElementById('my-filter-block-org').style.display = "none";
											}
										else if(SelectedId==1){
											document.getElementById('my-filter-block-summary').style.display = "none";								
											document.getElementById('my-filter-block-month').style.display = "block";
											document.getElementById('my-filter-block-org').style.display = "none";											
											}
										else if(SelectedId==2){
											document.getElementById('my-filter-block-summary').style.display = "none";
											document.getElementById('my-filter-block-month').style.display = "none";
											document.getElementById('my-filter-block-org').style.display = "block";
											}
									}									
								</script>
								<script>
									$(function(){
									   $('#btn-filter-month').on('click', function(){
										var year = $('#selectYear').val();	
										var month = $('#selectMonth').val();											
										if(year !=0 && month !=0){
										 $.ajax({
											  type: "GET",
											  url: "<?php echo $url;?>/index.php/dashboard/get_action",
											  data: { year: year,month: month },
											  cache:false
											})
											  .done(function( result ) {
												//alert(result);
												document.getElementById('totalDonation').innerHTML = result;
											});
									}
									else
									{
										alert("Select an Year and Month");
									}
									  });
									});
								</script>
								<script>
									$(function(){
									   $('#btn-filter-org').on('click', function(){
										var Org = $('#selectOrganization').val();											
										if(Org !=0){
										 $.ajax({
											  type: "GET",
											  url: "<?php echo $url;?>/index.php/dashboard/get_Organization_donation_summary",
											  data: { org: Org},
											  cache:false
											})
											  .done(function( result ) {
												//alert(result);
												document.getElementById('totalDonation').innerHTML = result;
											});
									}
									else
									{
										alert("Select an Organization");
									}
									  });
									});
								</script>
								<script>
									$(function(){
									   $('#selectError').on('change', function(){
										var obj = document.getElementById('selectError');
										var SelectedId = obj.options[obj.selectedIndex].value;											
										if(SelectedId==0){
										 $.ajax({
											  type: "GET",
											  url: "<?php echo $url;?>/index.php/dashboard/get_total_summary",											  
											  cache:false
											})
											  .done(function( result ) {
												//alert(result);
												document.getElementById('totalDonation').innerHTML = result;
											});
									}								
									  });
									});
								</script>
						<div class="span3 statbox green" onTablet="span6" onDesktop="span3">
							<div class="boxchar">DONATIONS</div>
							<div class="number">$<div id="totalDonation" style="display:inline;"><?php								
									$total=$donationAmount->flt_amount;
									$total=round($total,2);
									if($total=='')
										{
											$total=0;
										}
									echo $total;								
								?></div><i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#">read full report </a>
							</div> -->
						</div>
						<div class="span3 statbox blue noMargin" onTablet="span6" onDesktop="span3">
							<div class="boxchar">ROYALTY</div>
							<div class="number">$0<i class=""></i></div>
							<div class="title"></div>
							<!-- <div class="footer">
								<a href="#"> read full report</a>
							</div> -->
						</div>
			</div><!--/row-->			
			</div><!--/row-->			
			<!-- end: Content -->