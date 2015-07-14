<?php

	$CI =& get_instance(); 
	$base_site_url = $CI->config->config['base_site_url'];
	$int_user_type_id = $this->session->userdata("int_user_type_id"); 
	$bit_is_admin = $this->session->userdata("bit_is_admin"); 
	if($int_user_type_id ==1)			
		$page = '/dashboard';  
	else if($int_user_type_id ==2 && $bit_is_admin == 1)			
		$page = '/user/manageusers'; 
	else 		
		$page = '/event/manage'; 
?>
<ul class="breadcrumb">
	<li>
		<i class="icon-home"></i>
		<a href="<?php echo $base_site_url;?><?php echo $page;?>">Home</a> 
		<i class="icon-angle-right"></i>
	</li>
	<li><a href="#"><?php echo $pagename; ?></a></li>
</ul>