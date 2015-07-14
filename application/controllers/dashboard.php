<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class Dashboard extends MY_Controller {

	/* 	Author: Ulkarsh
		Version: 1.00
		Description: Newly added for Admin Dashboard*/
		
		/*public function getDashboardDetails()
		{
			$this->checklogin();
		
			$this->load->model('mUser');
			$users = $this->mUser->getTotalUsers();
			
			$data = array();
			$data['totalUsers'] = $users;
			
			$this->load->view('header');
			$this->load->view('org-list',$data);
			$this->load->view('footer');
		}*/	
		
		
	
	
	public function index() {
		/*$this->checklogin();
		$this->load->view('header');
		$this->load->view('dashboard');
		$this->load->view('footer');*/
		//getDashboardDetails();
		//Modified for dashboard change
			$this->checklogin();
		
			$this->load->model('adashboard');
			$users = $this->adashboard->getTotalUsers();
			$organizationsCount = $this->adashboard->getTotalOrg();
			$eventsCount = $this->adashboard->getTotalEvents();
			$totalDonationAmount = $this->adashboard->getTotalDonationAmount();
			$allOrganizations = $this->adashboard->getAllOrganizations();
			$weeklyNewUsersAdded = $this->adashboard->getWeeklyNewUsersAdded();
			$weeklyNewOrganizationsAdded= $this->adashboard->getWeeklyNewOrganizationsAdded();
			$weeklyNewDonorsAdded= $this->adashboard->getWeeklyNewDonorsAdded();
			$weeklyNumberOfDonations= $this->adashboard->getWeeklyNumberOfDonations();
			$weeklyTotalDonationAmount= $this->adashboard->getWeeklyTotalDonationAmount();
			$weeklyNewEvents= $this->adashboard->getWeeklyNewEvents();
			$thisWeeksEvents= $this->adashboard->getThisWeeksEvents();
			$RecentActivity= $this->adashboard->getRecentActivity();
			$totalSiteHits = $this->adashboard->getTotalSiteHits();
			$distinctSiteHits = $this->adashboard->getDistinctSiteHits();
			$totalEventHits = $this->adashboard->getTotalEventHits();
			$distinctEventHits = $this->adashboard->getDistinctEventHits();
			$percentageNewVisitors = $this->get_percentage($totalSiteHits->int_views,$distinctSiteHits);
			$percentageReturningVisitors = $this->get_percentage($totalSiteHits->int_views,$totalSiteHits->int_views-$distinctSiteHits);
			
			$data = array();
			$data['totalUsers'] = $users;
			$data['totalOrgs'] = $organizationsCount;
			$data['totalEvents'] = $eventsCount;
			$data['donationAmount'] = $totalDonationAmount;
			$data['allorgs'] = $allOrganizations;
			$data['weeklyNewUsers'] = $weeklyNewUsersAdded;
			$data['weeklyNewOrganizationsAdded'] = $weeklyNewOrganizationsAdded;
			$data['weeklyNewDonorsAdded'] = $weeklyNewDonorsAdded;
			$data['weeklyNumberOfDonations'] = $weeklyNumberOfDonations;
			$data['weeklyTotalDonationAmount'] = $weeklyTotalDonationAmount;
			$data['weeklyNewEvents'] = $weeklyNewEvents;			
			$data['thisWeeksEvents'] = $thisWeeksEvents;
			$data['RecentActivity1'] = $RecentActivity;			
			$data['totalSiteHits'] = $totalSiteHits;
			$data['distinctSiteHits'] = $distinctSiteHits;
			$data['totalEventHits'] = $totalEventHits;
			$data['distinctEventHits'] = $distinctEventHits;
			$data['percentageReturningVisitors']=$percentageReturningVisitors;
			$data['percentageNewVisits']=$percentageNewVisitors;
			
			$this->load->view('header');
			$this->load->view('dashboard',$data);
			$this->load->view('footer');
	}
	
	public function get_percentage($denominator,$numerator)
	{
		if($denominator >0)
			$result=$numerator/$denominator;
		else
			$result=0;
			
		return $result;
	}
	
	public function get_action()
	{
		$this->checklogin();
		$year = $this->input->get('year');
		$month = $this->input->get('month');	
		$this->load->model('adashboard');
		$result = $this->adashboard->getTotalDonationByMonthAndYear($month,$year);
		//$result = $month;
		$result = round($result->flt_amount,2);
		if($result=='')
		{
			$result=0;
		}
		echo $result;		
	}
	
	public function get_Organization_donation_summary()
	{
		//$this->checklogin();
		$orgid = $this->input->get('org');		
		$this->load->model('adashboard');
		$result = $this->adashboard->get_Organization_donation_summary($orgid);
		//$result = $month;
		$result = round($result->flt_amount,2);
		if($result=='')
		{
			$result=0;
		}
		echo $result;		
	}
	
	public function get_total_summary()
	{
		$this->checklogin();			
		$this->load->model('adashboard');
		$result = $this->adashboard->getTotalDonationAmount();
		//$result = $month;
		$result = round($result->flt_amount,2);
		if($result=='')
		{
			$result=0;
		}
		echo $result;		
	}
	
	/*Author Ulkarsh - New addition ends*/	
	public function authenticate()
	{	
		$this->load->library('session');
		$CI =& get_instance(); 
		$base_url = $CI->config->config['base_url'];
		$url = $CI->config->config['base_site_url'];
		$this->load->model('login_model'); 
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
			header('Location:'.$base_url.'/dashboard');  
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