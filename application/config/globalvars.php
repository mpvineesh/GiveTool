<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| File and Directory Modes
|--------------------------------------------------------------------------
|
| These prefs are used when checking and setting modes when working
| with the file system.  The defaults are fine on servers with proper
| security, but you may wish (or even need) to change the values in
| certain environments (Apache running a separate process for each
| user, PHP under CGI with Apache suEXEC, etc.).  Octal values should
| always be used to set the mode correctly.
|
*/

$config['resource_path']= 'aaa';
$islocal = strpos($_SERVER['HTTP_HOST'], 'localhost');
if($islocal !== false){
	$config['resource_path'] = 'http://localhost:8081/GiveTool/resources';
	$config['site_title']='Quite Giant';
	$config['base_site_url']='http://localhost:8081/GiveTool/index.php';
	$config['base_path'] = 'http://localhost:8081/GiveTool';
	$config['base_url'] = 'http://localhost:8081/GiveTool';
}else{
	$config['resource_path'] = 'http://testsite.sitespace.co.in/resources';
	$config['site_title']='Quite Giant';
	$config['base_site_url']='http://testsite.sitespace.co.in/index.php';
	$config['base_path'] = 'http://testsite.sitespace.co.in';
	$config['base_url'] = 'http://testsite.sitespace.co.in';
}
/*
|--------------------------------------------------------------------------
| File Stream Modes
|--------------------------------------------------------------------------
|
| These modes are used when working with fopen()/popen()
|
*/


/* End of file constants.php */
/* Location: ./application/config/constants.php */