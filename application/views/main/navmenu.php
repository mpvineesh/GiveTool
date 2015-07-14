<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url'];
	$path = $CI->config->config['resource_path'].'/main';
	$base_path = $CI->config->config['base_path'];
	$base_site_url = $CI->config->config['base_site_url'];
	$name = $this->session->userdata("name");
	$int_user_type = $this->session->userdata("int_user_type_id"); 
	
?>

<nav class="main-nav mobile-menu" role="navigation">
<ul id="menu-main-menu" class="nav top-nav cf">
	
	<li id="menu-item-145" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-145 pix-submenu external">
		<a href="<?php echo $base_site_url;?>/main/home">Home</a>
	</li>
	<li id="menu-item-46" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-46 pix-submenu external">
		<a href="<?php echo $base_site_url;?>/main/events">Events</a>
	</li>
	<li id="menu-item-55" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-55 pix-submenu external">
		<a href="<?php echo $base_site_url;?>/main/faq">FAQ</a>
	</li>
	<li id="menu-item-119" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119 pix-submenu external">
		<a href="<?php echo $base_site_url;?>/main/tnc">Tnc</a>
	</li> 
</ul>
</nav>