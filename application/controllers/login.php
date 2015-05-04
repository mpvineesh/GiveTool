<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class Login extends MY_Controller {

	 
	public function index() {
	 
		$this->load->view('login');
	}
	
	public function authenticate()
	{	 
		$this->load->library('session');
		$CI =& get_instance(); 
		$base_url = $CI->config->config['base_url'];
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mLogin'); 
		//$username = $_POST['username'];
		//$password = $_POST['password'];
		//$user  = $this->user_model->checklogin($username,$password); 
		$res = 1; 
		//if(count($user) ==0 )
		//	$res = 0;
		if($res == 0){
			header('Location:'.$url.'?loginfailed'); 
		}else{  
			/*$this->session->set_userdata('loggedin', '1');
			$this->session->set_userdata('user_type', $user[0]->int_user_type_id);
			$this->session->set_userdata('int_user_id', $user[0]->int_user_id);
			$this->session->set_userdata('int_merchant_id', $user[0]->int_merchant_id);*/
			
			$this->session->set_userdata('loggedin', '1');
			$this->session->set_userdata('user_type', 'admin');
			$this->session->set_userdata('int_user_id', '1');
			
			$user_data = $this->session->all_userdata();  
			header('Location:'.$url.'/dashboard');  
		} 
	}
	public function resetpassword()
	{	
		$this->load->library('session');
		$CI =& get_instance(); 
		$base_url = $CI->config->config['base_url'];
		$url = $CI->config->config['base_site_url'];
		$this->load->model('user_model'); 
		$email = $_POST['email'];
		$user  = $this->user_model->getuserbyemail($email); 
		$res = 1; 
		if(count($user) ==0 )
			$res = 0;
		if($res == 0){
			header('Location:'.$url.'?mailsent&resetfailed'); 
		}else{   
			$password = $user[0]->str_password;
			$to=$email;
			$subject="Lost Password";
			$message=$password;
			$from = "info@smartipage.com";
			$headers = "From:" . $from;
			mail($to,$subject,$message,$headers);
			header('Location:'.$url.'?mailsent');
		} 
	}
	public function logout()
	{	
		$this->load->library('session');
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url']; 
		$this->session->sess_destroy();
		$user_data = $this->session->all_userdata(); 
		 
		header('Location:'.$url); 
	}
	
	public function edit($userid)
	{	
		$this->checklogin();
		$this->load->model('demo_model');
		$user = $this->demo_model->getuser($userid);
		
		$data = array();
		$data['user'] = $user;
		$data['id'] = 1;
		$this->load->view('update',$data);
		//$this->load->view('welcome_message');
	}
	public function delete($userid)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('demo_model');
		$user = $this->demo_model->delete($userid);
		
		$data = array();
		$data['user'] = $user;
		$data['id'] = 1;
		header('Location:'.$url.'index.php/demo/listusers'); 
	//	$this->load->view('edit_form',$data);
		//$this->load->view('welcome_message');
	}
	public function save()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('demo_model');
		$fname = $this->input->post('fname');
		$lname = $this->input->post('lname');
		$age = $this->input->post('age');
		$address = $this->input->post('address');
		$data = array();
		$data['users.fname'] = $fname;
		$data['users.lname'] = $lname;
		$data['users.age'] = $age;
		$data['users.address'] = $address;
		$userid = $this->demo_model->add($data);
		$users  = $this->demo_model->get();
		$data = array();
		$data['user'] = $users;
		$data['id'] = 1;
		header('Location:'.$url.'index.php/demo/listusers'); 
	}
	public function update()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('demo_model');
		$fname = $this->input->post('fname');
		$lname = $this->input->post('lname');
		$age = $this->input->post('age');
		$address = $this->input->post('address');
		$data = array();
		$data['users.fname'] = $fname;
		$data['users.lname'] = $lname;
		$data['users.age'] = $age;
		$data['users.address'] = $address;
		$data['users.id'] = $this->input->post('id');
		$userid = $this->demo_model->edit($data['users.id'],$data);
		$users  = $this->demo_model->get();
		$data = array();
		$data['user'] = $users;
		$data['userid'] = 1;
		header('Location:'.$url.'index.php/demo/listusers'); 
	}
	
	

}