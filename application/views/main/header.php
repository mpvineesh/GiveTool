
<?php
	$CI =& get_instance(); 
	$url = $CI->config->config['base_url']; 
	$base_site_url = $CI->config->config['base_site_url']; 
	
?><header class="header-container">

<?php include_once('header-top.php');?>
<div class="main-header affix clearfix">
<div class="container">
<div class="inner-header">
<h1><a href="#" id="logo">[COMPANY NAME]</a></h1>
 

<div class="mobile-menu-icon"><i class="fa fa-bars"></i></div>

<?php include_once('navmenu.php');?>
<!-- NAV --></div>
</div>
</div>
</header>
<input type="hidden" id="base-url" value="<?php echo $base_site_url;?>">
<input id="validate" type="hidden" name="validate" value="0">