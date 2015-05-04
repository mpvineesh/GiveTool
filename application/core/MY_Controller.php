<?php
class MY_Controller extends CI_Controller 
{
    public function checklogin() 
    {    
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url']; 
        if(!$this->session->userdata("loggedin")) {
            	header('Location:'.$url); 
        }
    }
}