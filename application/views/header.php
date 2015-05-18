<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'];
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$name = $this->session->userdata("name");
	$int_user_type = $this->session->userdata("int_user_type_id"); 
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	
	<!-- start: Meta -->
	<meta charset="utf-8">
	<title>Admin</title>
	<meta name="description" content="Bootstrap Metro Dashboard">
	<meta name="author" content="Dennis Ji">
	<meta name="keyword" content="Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
	<!-- end: Meta -->
	
	<!-- start: Mobile Specific -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- end: Mobile Specific -->
	
	<!-- start: CSS -->
	<link id="bootstrap-style" href="<?php echo $path;?>/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo $path;?>/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link id="base-style" href="<?php echo $path;?>/css/style.css" rel="stylesheet">
	<link id="base-style-responsive" href="<?php echo $path;?>/css/style-responsive.css" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext' rel='stylesheet' type='text/css'>
	<!-- end: CSS -->
	
	
	<link id="base-style-responsive" href="<?php echo $path;?>/css/bootstrap-timepicker.min.css" rel="stylesheet">
	<link id="bootstrap-style" href="<?php echo $path;?>/css/custom.css" rel="stylesheet">
	<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<link id="ie-style" href="<?php echo $path;?>/css/ie.css" rel="stylesheet">
	<![endif]-->
	
	<!--[if IE 9]>
		<link id="ie9style" href="<?php echo $path;?>/css/ie9.css" rel="stylesheet">
	<![endif]-->
		
	<!-- start: Favicon -->
	<link rel="shortcut icon" href="<?php echo $path;?>/img/favicon.ico">
	<!-- end: Favicon -->
	
		
		
		
</head>

<body>
	<input type="hidden" id="base-url" value="<?php echo $base_site_url;?>">
		<!-- start: Header -->
	<div class="navbar">
		<div class="navbar-inner">
			<div class="container-fluid">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".top-nav.nav-collapse,.sidebar-nav.nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>
				<a class="brand" href="index.html"><span>Give Tool Admin</span></a>
								
				<!-- start: Header Menu -->
				<div class="nav-no-collapse header-nav">
					<ul class="nav pull-right">
						<!---<li class="dropdown hidden-phone">
							<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
								<i class="halflings-icon white warning-sign"></i>
							</a>
							<ul class="dropdown-menu notifications">
								<li class="dropdown-menu-title">
 									<span>You have 11 notifications</span>
									<a href="#refresh"><i class="icon-repeat"></i></a>
								</li>	
                            	<li>
                                    <a href="#">
										<span class="icon blue"><i class="icon-user"></i></span>
										<span class="message">New user registration</span>
										<span class="time">1 min</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon green"><i class="icon-comment-alt"></i></span>
										<span class="message">New comment</span>
										<span class="time">7 min</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon green"><i class="icon-comment-alt"></i></span>
										<span class="message">New comment</span>
										<span class="time">8 min</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon green"><i class="icon-comment-alt"></i></span>
										<span class="message">New comment</span>
										<span class="time">16 min</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon blue"><i class="icon-user"></i></span>
										<span class="message">New user registration</span>
										<span class="time">36 min</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon yellow"><i class="icon-shopping-cart"></i></span>
										<span class="message">2 items sold</span>
										<span class="time">1 hour</span> 
                                    </a>
                                </li>
								<li class="warning">
                                    <a href="#">
										<span class="icon red"><i class="icon-user"></i></span>
										<span class="message">User deleted account</span>
										<span class="time">2 hour</span> 
                                    </a>
                                </li>
								<li class="warning">
                                    <a href="#">
										<span class="icon red"><i class="icon-shopping-cart"></i></span>
										<span class="message">New comment</span>
										<span class="time">6 hour</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon green"><i class="icon-comment-alt"></i></span>
										<span class="message">New comment</span>
										<span class="time">yesterday</span> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="icon blue"><i class="icon-user"></i></span>
										<span class="message">New user registration</span>
										<span class="time">yesterday</span> 
                                    </a>
                                </li>
                                <li class="dropdown-menu-sub-footer">
                            		<a>View all notifications</a>
								</li>	
							</ul>
						</li>--->
						<!-- start: Notifications Dropdown -->
						<!---<li class="dropdown hidden-phone">
							<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
								<i class="halflings-icon white tasks"></i>
							</a>
							<ul class="dropdown-menu tasks">
								<li class="dropdown-menu-title">
 									<span>You have 17 tasks in progress</span>
									<a href="#refresh"><i class="icon-repeat"></i></a>
								</li>
								<li>
                                    <a href="#">
										<span class="header">
											<span class="title">iOS Development</span>
											<span class="percent"></span>
										</span>
                                        <div class="taskProgress progressSlim red">80</div> 
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="header">
											<span class="title">Android Development</span>
											<span class="percent"></span>
										</span>
                                        <div class="taskProgress progressSlim green">47</div> 
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="header">
											<span class="title">ARM Development</span>
											<span class="percent"></span>
										</span>
                                        <div class="taskProgress progressSlim yellow">32</div> 
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="header">
											<span class="title">ARM Development</span>
											<span class="percent"></span>
										</span>
                                        <div class="taskProgress progressSlim greenLight">63</div> 
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="header">
											<span class="title">ARM Development</span>
											<span class="percent"></span>
										</span>
                                        <div class="taskProgress progressSlim orange">80</div> 
                                    </a>
                                </li>
								<li>
                            		<a class="dropdown-menu-sub-footer">View all tasks</a>
								</li>	
							</ul>
						</li>-->
						<!-- end: Notifications Dropdown -->
						<!-- start: Message Dropdown -->
						<!--<li class="dropdown hidden-phone">
							<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
								<i class="halflings-icon white envelope"></i>
							</a>
							<ul class="dropdown-menu messages">
								<li class="dropdown-menu-title">
 									<span>You have 9 messages</span>
									<a href="#refresh"><i class="icon-repeat"></i></a>
								</li>	
                            	<li>
                                    <a href="#">
										<span class="avatar"><img src="<?php echo $path;?>/img/avatar.jpg" alt="Avatar"></span>
										<span class="header">
											<span class="from">
										    	Admin
										     </span>
											<span class="time">
										    	6 min
										    </span>
										</span>
                                        <span class="message">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                        </span>  
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="avatar"><img src="<?php echo $path;?>/img/avatar.jpg" alt="Avatar"></span>
										<span class="header">
											<span class="from">
										    	Dennis Ji
										     </span>
											<span class="time">
										    	56 min
										    </span>
										</span>
                                        <span class="message">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                        </span>  
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="avatar"><img src="<?php echo $path;?>/img/avatar.jpg" alt="Avatar"></span>
										<span class="header">
											<span class="from">
										    	Dennis Ji
										     </span>
											<span class="time">
										    	3 hours
										    </span>
										</span>
                                        <span class="message">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                        </span>  
                                    </a>
                                </li>
								<li>
                                    <a href="#">
										<span class="avatar"><img src="<?php echo $path;?>/img/avatar.jpg" alt="Avatar"></span>
										<span class="header">
											<span class="from">
										    	Dennis Ji
										     </span>
											<span class="time">
										    	yesterday
										    </span>
										</span>
                                        <span class="message">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                        </span>  
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
										<span class="avatar"><img src="<?php echo $path;?>/img/avatar.jpg" alt="Avatar"></span>
										<span class="header">
											<span class="from">
										    	Dennis Ji
										     </span>
											<span class="time">
										    	Jul 25, 2012
										    </span>
										</span>
                                        <span class="message">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                                        </span>  
                                    </a>
                                </li>
								<li>
                            		<a class="dropdown-menu-sub-footer">View all messages</a>
								</li>	
							</ul>
						</li> -->
						<!-- end: Message Dropdown -->
						<!-- <li>
							<a class="btn" href="#">
								<i class="halflings-icon white wrench"></i>
							</a>
						</li> -->
						<!-- start: User Dropdown -->
						<li class="dropdown">
							<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
								<i class="halflings-icon white user"></i> <?php echo $name;?>
								<span class="caret"></span>
							</a>
							<ul class="dropdown-menu">
								<li class="dropdown-menu-title">
 									<span>Account Settings</span>
								</li>
								<li><a href="#" class="btn-admin-setting"><i class="halflings-icon lock "></i> Change Password</a></li>
								<li><a href="<?php echo $base_site_url;?>/user/profile/<?php echo $this->session->userdata('int_user_id'); ?>" class="btn-admin-setting"><i class="halflings-icon user "></i> Profile</a></li>
								<li><a href="<?php echo $base_site_url;?>/user/logout"><i class="halflings-icon off"></i> Logout</a></li>
							</ul>
						</li>
						<!-- end: User Dropdown -->
					</ul>
				</div>
				<!-- end: Header Menu -->
				
			</div>
		</div>
	</div>
	<!-- start: Header -->
	
	<div class="container-fluid-full">
		<div class="row-fluid">
				
			<!-- start: Main Menu -->
			<div id="sidebar-left" class="span2">
				<div class="nav-collapse sidebar-nav">
					<ul class="nav nav-tabs nav-stacked main-menu">
						<li><a href="<?php echo $base_site_url;?>"><i class="icon-bar-chart"></i><span class="hidden-tablet"> Dashboard</span></a></li>	
						
						<!--<li>
							<a class="dropmenu" href="#" id="org"><i class="icon-folder-close-alt"></i><span class="hidden-tablet"> Organization Mgmnt (<span class="sign_org">+</span>)</span></a>
							<ul>
								<li><a class="submenu" href="<?php echo $base_site_url;?>/user/organization"><i class="icon-list"></i><span class="hidden-tablet"> Organizations</span></a></li>
								<li><a class="submenu" href="<?php echo $base_site_url;?>/user/organizationuser"><i class="icon-list"></i><span class="hidden-tablet"> Users</span></a></li>
							</ul>	
						</li>	-->					
						<!--<li><a href="<?php echo $base_site_url;?>/user/organization"><i class="icon-tasks"></i><span class="hidden-tablet"> Organizations</span></a></li>	-->		
						<?php if($int_user_type == 1){ ;?>
						<li><a href="<?php echo $base_site_url;?>/user/manageorg"><i class="icon-tasks"></i><span class="hidden-tablet"> Organization Mgmnt</span></a></li>	
						<?php };?>
						<li><a href="<?php echo $base_site_url;?>/user/manageusers"><i class="icon-tasks"></i><span class="hidden-tablet"> User Mgmnt</span></a></li>	
						<li>
							<a class="dropmenu" href="#" id="org"><i class="icon-folder-close-alt"></i><span class="hidden-tablet"> Event Mgmnt(<span class="sign_org">+</span>)</span></a>
							<ul>
								<li><a class="submenu" href="<?php echo $base_site_url;?>/event/manage"><i class="icon-list"></i><span class="hidden-tablet"> Event Dashboard</span></a></li>
								<li><a class="submenu" href="<?php echo $base_site_url;?>/event/activeevents"><i class="icon-list"></i><span class="hidden-tablet"> Active Events</span></a></li>
								<li><a class="submenu" href="<?php echo $base_site_url;?>/event/eventhistory"><i class="icon-list"></i><span class="hidden-tablet"> Events History</span></a></li>
							</ul>	
						</li>
						<li><a href="<?php echo $base_site_url;?>/donor/manage"><i class="icon-tasks"></i><span class="hidden-tablet"> Donor Details</span></a></li>
						<li><a href="<?php echo $base_site_url;?>/user/logout"><i class="icon-lock"></i><span class="hidden-tablet"> Logout</span></a></li>
					</ul>
				</div>
			</div>
			<!-- end: Main Menu -->
			
			<noscript>
				<div class="alert alert-block span10">
					<h4 class="alert-heading">Warning!</h4>
					<p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> enabled to use this site.</p>
				</div>
			</noscript>