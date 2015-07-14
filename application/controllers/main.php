<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class Main extends MY_Controller {

	 
	public function index() {
	//testing
		
		
		
		//$this->sendEmail($from,$sender,$to,$subject,$message);
		
		$this->load->model('mMain');
		$events = $this->mMain->getevents();
		$locations = $this->mMain->getlocations();
		$recentevents = $this->mMain->getrecentevents();
		$organizations = $this->mMain->getorganizations();
		$upcomingevents = $this->mMain->getupcomingevents();
		$popularevents = $this->mMain->getpopularevents();
		/*added by ulkarsh*/
		$this->mMain->updateSiteVisitors($_SERVER['REMOTE_ADDR']);
		/*addition completed - ulkarsh*/
		
		$data['events'] = $events;
		$data['recentevents'] = $recentevents;
		$data['organizations'] = $organizations;
		$data['locations'] = $locations;
		$data['upcomingevents'] = $upcomingevents;
		$data['popularevents'] = $popularevents;
		$this->load->view('main/home',$data);	      
	}
	public function home() {
	
	
		
		//$this->sendMail($from,$sender,$to,$subject,$message);
		$this->load->model('mMain');
		$events = $this->mMain->getevents();
		$upcomingevents = $this->mMain->getupcomingevents();
		$popularevents = $this->mMain->getpopularevents();
		$locations = $this->mMain->getlocations();
		
		
		$recentevents = $this->mMain->getrecentevents();
		$organizations = $this->mMain->getorganizations(); 
		
		$data = array();
		$data['events'] = $events;
		$data['recentevents'] = $recentevents;
		$data['organizations'] = $organizations;
		$data['upcomingevents'] = $upcomingevents;
		$data['popularevents'] = $popularevents;
		$data['locations'] = $locations;
		$this->load->view('main/home',$data);	         
	}
	
	
	public function updatepassword($int_user_id,$uniquestring) {
	
		//$this->sendMail($from,$sender,$to,$subject,$message);
		$this->load->model('mMain');
		$events = $this->mMain->getevents();
		$upcomingevents = $this->mMain->getupcomingevents();
		$popularevents = $this->mMain->getpopularevents();
		$locations = $this->mMain->getlocations();
		$recentevents = $this->mMain->getrecentevents();
		$organizations = $this->mMain->getorganizations(); 
		
		$data = array();
		$validkey = $this->mMain->validateuniquestring($int_user_id,$uniquestring); 
		if(sizeof($validkey) > 0){
			$data['updatepassword'] = 1;
			$data['int_user_id'] = $int_user_id;
		}else{
			$data['updatepassword'] = 0;
		}
		$data['events'] = $events;
		$data['recentevents'] = $recentevents;
		$data['organizations'] = $organizations;
		$data['upcomingevents'] = $upcomingevents;
		$data['popularevents'] = $popularevents;
		$data['locations'] = $locations;
		$this->load->view('main/home',$data);	         
	}
	public function events() {
		$this->load->model('mMain');
		$events = $this->mMain->getevents();
		$mostcontributedevents = $this->mMain->getmostcontributedevents();
		$recentevents = $this->mMain->getrecentevents();
		$popularevents = $this->mMain->getpopularevents();
		$upcomingevents = $this->mMain->getupcomingevents();
		$organizations = $this->mMain->getorganizations();
		$locations = $this->mMain->getlocations();
		
		$data = array();
		$data['events'] = $events;
		$data['locations'] = $locations;
		$data['recentevents'] = $recentevents;
		$data['popularevents'] = $popularevents;
		$data['upcomingevents'] = $upcomingevents;
		$data['mostcontributedevents'] = $mostcontributedevents;
		$this->load->view('main/events',$data);	         
	}
	public function eventdetails($int_event_id) {
		$this->load->model('mMain');
		$recentevents = $this->mMain->getrecentevents();
		$eventdetails = $this->mMain->geteventdetails($int_event_id);
		$this->mMain->updateviews($int_event_id,$_SERVER['REMOTE_ADDR']);
		$locations = $this->mMain->getlocations();
		
		$data = array();
		$data['eventdetails'] = $eventdetails;
		$data['recentevents'] = $recentevents;
		$data['locations'] = $locations;
		$data['int_event_id'] = $int_event_id;
		$this->load->view('main/eventdetails',$data);	         
	}
	public function searchevent($type) {
		$this->load->model('mMain');
		$recentevents = $this->mMain->getrecentevents(); 
		$locations = $this->mMain->getlocations();
		if($type != 'find'){
			$events = $this->mMain->geteventsbysearch('0',0,0);
		}else if($this->input->post() || isset($_GET["find"])){
			$keyword= $this->input->post('keyword');
			$date = $this->input->post('date');
			$location = $this->input->post('location');
			$events = $this->mMain->geteventsbysearch($keyword,$date,$location);
		}else{
			$events = $this->mMain->getevents();
		}		
		
		$organizations = $this->mMain->getorganizations();
		
		$data = array();
		$data['events'] = $events;
		$data['type'] = $type;
		$data['locations'] = $locations;
		$data['recentevents'] = $recentevents;
		$this->load->view('main/eventssearch',$data);	               
	}
	public function tnc() {
		$this->load->model('mMain');
		$recentevents = $this->mMain->getrecentevents();
		$locations = $this->mMain->getlocations();
		$data = array();
		$data['recentevents'] = $recentevents;
		$this->load->view('main/tnc',$data);	      
	}
	
	public function faq() {
		$this->load->model('mMain');
		$recentevents = $this->mMain->getrecentevents();
		$locations = $this->mMain->getlocations();
		$data = array();
		$data['recentevents'] = $recentevents;
		$data['locations'] = $locations;
		$this->load->view('main/faq',$data);	      
	}
	
	
	
	public function success() {		
		 	
		$this->load->model('mUser');		 
		$data['title'] = 'Thank You';		
		  
		$this->load->model('mMain');
		$recentevents = $this->mMain->getrecentevents();
		$data = array();
		$data['recentevents'] = $recentevents;
		$this->load->view('main/payment-success',$data);   
	}
	public function donate($int_event_id)
	{
		if($this->input->post()){
			
			$this->load->model('mUser')	;		
			
			$str_credit_card_no = $this->input->post('str_credit_card_no');
			$str_credit_card_no_encrypted = $this->encrypt_text($str_credit_card_no);
			$int_user_id = $this->input->post('int_user_id');
			//var_dump($this->input->post());exit;
			$donordata = array();
			$str_fname = $this->input->post('str_fname');
			$str_lname = $this->input->post('str_lname');
			$str_email = $this->input->post('str_email');
			$str_phone = $this->input->post('str_phone');
			$str_address = $this->input->post('str_address');
			$str_city = $this->input->post('str_city');
			$str_zip = $this->input->post('str_zip');
			$str_state = $this->input->post('str_state');
			$str_cc_type = $this->input->post('str_cc_type');
			
			$str_credit_card_no = $this->input->post('str_credit_card_no');
			$str_state = $this->input->post('str_state');
			$str_name_on_card = $this->input->post('str_name_on_card');
			$str_expire_on = $this->input->post('str_expire_on');
			$str_cvv = $this->input->post('str_cvv');
			$int_user_id = $this->input->post('int_user_id');
			$flt_amount = $this->input->post('flt_amount');
			
			
			// PaypalPayments
			$sandbox = TRUE;
 
			// Set PayPal API version and credentials.
			$api_version = '85.0';
			$api_endpoint = $sandbox ? 'https://api-3t.sandbox.paypal.com/nvp' : 'https://api-3t.paypal.com/nvp';
			$api_username = $sandbox ? 'SANDBOX_USERNAME_GOES_HERE' : 'LIVE_USERNAME_GOES_HERE';
			$api_password = $sandbox ? 'SANDBOX_PASSWORD_GOES_HERE' : 'LIVE_PASSWORD_GOES_HERE';
			$api_signature = $sandbox ? 'SANDBOX_SIGNATURE_GOES_HERE' : 'LIVE_SIGNATURE_GOES_HERE';
			// Store request params in an array
			$request_params = array
					(
					'METHOD' => 'DoDirectPayment', 
					'USER' => 'platfo_1255077030_biz_api1.gmail.com', 
					'PWD' => '1255077037', 
					'SIGNATURE' => 'Abg0gYcQyxQvnf2HDJkKtA-p6pqhA1k-KTYE0Gcy1diujFio4io5Vqjf', 
					'VERSION' => '122', 
					'PAYMENTACTION' => 'Sale',                   
					'IPADDRESS' => $_SERVER['REMOTE_ADDR'],
					'CREDITCARDTYPE' => $str_cc_type, // 'VISA'
					'ACCT' =>$str_credit_card_no,  // '4660997962602322'                       
					'EXPDATE' => $str_expire_on,  // '022018'         
					'CVV2' => $str_cvv , // '176'
					'FIRSTNAME' => $str_fname , // 'Tester'
					'LASTNAME' => $str_lname , // 'Testerson'
					'STREET' => $str_address, // '707 W. Bay Drive'
					'CITY' => $str_city, 
					'STATE' => 'CA',                     
					'COUNTRYCODE' => 'US', 
					'ZIP' => '95131', 
					'AMT' => $flt_amount, // '100.00'
					'CURRENCYCODE' => 'USD', 
					'DESC' => 'Testing Payments Pro'
					);
					
			// Loop through $request_params array to generate the NVP string.
			$nvp_string = '';
			foreach($request_params as $var=>$val)
			{
				$nvp_string .= '&'.$var.'='.urlencode($val);    
			}					
			
			// Send NVP string to PayPal and store response
			$curl = curl_init();
					curl_setopt($curl, CURLOPT_VERBOSE, 1);
					curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
					curl_setopt($curl, CURLOPT_TIMEOUT, 30);
					curl_setopt($curl, CURLOPT_URL, $api_endpoint);
					curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
					curl_setopt($curl, CURLOPT_POSTFIELDS, $nvp_string);
			 
			$result = curl_exec($curl);     
			curl_close($curl);		



			// Parse the API response
			$nvp_response_array = explode('&',$result);
			if(count($nvp_response_array) == 10){
			
				$result = explode('=',$nvp_response_array[2]);
				$result = $result[1];
				$str_paypal_transaction_id = explode('=',$nvp_response_array[9]);
				$str_paypal_transaction_id = $str_paypal_transaction_id[1];

			}else{				
				header('Location:'.$url.'/index.php/main/eventdetails/'.$int_event_id.'?ccerror'); 
			}	
			$donationdata= array();
			if($int_user_id > 0){					
				$donationdata['tbl_donation.int_user_id'] = $this->input->post('int_user_id');					
			}else{			
				/* ------------------Add User ------------------------*/
				$userdata = array();
				$userdata['tbl_user.str_login'] = $str_email;
				$userdata['tbl_user.str_password'] = 'password';
				$userdata['tbl_user.int_user_type_id'] = 3; // 2- Organization/University		
				
				/* ------------------Add Organization ------------------------*/
				$donordata = array();
				$donordata['tbl_donor.str_fname'] = $str_fname;
				$donordata['tbl_donor.str_lname'] = $str_lname;
				$donordata['tbl_donor.str_email'] = $str_email;
				$donordata['tbl_donor.str_phone'] = $str_phone;
				$donordata['tbl_donor.str_address'] = $str_address;
				$donordata['tbl_donor.str_city'] = $str_city;
				$donordata['tbl_donor.str_state'] = $str_state;
				$donordata['tbl_donor.str_zip'] = $str_zip;	
				$donordata['tbl_donor.date_created'] =  date('Y-m-d');	
				
				$int_user_id = $this->mUser->add($userdata);
				$donordata['tbl_donor.int_user_id'] = $int_user_id;
				$int_donor_id = $this->mUser->adddonor($donordata);				
				$donationdata['tbl_donation.int_user_id'] = $int_user_id;
			
			}
			
			$donationdata['tbl_donation.flt_amount'] = $this->input->post('flt_amount');
			$donationdata['tbl_donation.date'] = date('Y-m-d');
			$donationdata['tbl_donation.str_paypal_transaction_id'] = $str_paypal_transaction_id;
			$donationdata['tbl_donation.int_event_id'] = $int_event_id;
						
			/*$int_user_id = $this->mUser->updatedonorbyuserid($int_user_id,$donordata);	*/		
			$this->mUser->adddonation($donationdata);

			// var_dump($result);				 
			// var_dump($nvp_response_array);exit;		
		}	
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];	
		// Start Send Profile Creation Mail
		$to = $str_email;
		$subject = 'Welcome to Quite Giants';
		$toname = $str_fname;
		$line1  = "We have created your <strong>Donor Profile</strong> to make donations for Events";
		$line2  = "Now you can use your <strong>Give Tool Donor Profile</strong> to  donate money quickly and seamlessly mobility  for the events in our <strong>QuiteGiant Website </strong>";
		$line3  = "<strong>Please note your GiveTool Login Details:</strong>";
		$line4  = ' <table cellpadding="0" cellspacing="0" width="100%" border="0" style="border: 5px solid #eeeff1;">
						<tr>
							<td bgcolor="#f9f9fa" style="padding: 8px 0 8px 100px; border-bottom: 1px solid #dedede;"	width="50%">User Name/Email</td>
							<td style="padding: 8px 0 8px 50px; border-bottom: 1px solid #dedede;">'.$str_email.'</td>
						</tr>
						<tr>
							<td bgcolor="#f9f9fa" style="padding: 8px 0 8px 100px; border-bottom: 1px solid #dedede;">Creation Date</td>
							<td style="padding: 8px 0 8px 50px; border-bottom: 1px solid #dedede;">'.date("D M j Y G:i:s").'</td>
						</tr>
						<tr>
							<td bgcolor="#f9f9fa" style="padding: 8px 0 8px 100px; border-bottom: 1px solid #dedede;">Phone Number</td>
							<td style="padding: 8px 0 8px 50px; border-bottom: 1px solid #dedede;">'.$str_phone.'</td>
						</tr>
					</table>';
		$this->sendHTMLEmail($toname,$to,$subject,$line1,$line2,$line3,$line4);
		// End Send Profile Creation Mail
		
		/*
		
		$content = '<h3>Thanks for Sign Up!!</h3></br>
			<p>You have created donor profile in our site</p>
			<p>You can use the following credential next time you login our site</p>
			<p>Username : '.$str_email.'</p>
			<p>Password : password</p>		
		';
		$this->sendMail($str_email,$subject,$content);
		$subject = 'Donation Confirmation';
		$content = '<h3>Thanks for your donation!!</h3></br>
			<p>You have made a donation of '.$flt_amount.'</p>
			<p>You can use the following credential next time you login our site</p>
			<p>Username : '.$str_email.'</p>
			<p>Password : password</p>		
		';
		$this->sendMail($str_email,$subject,$content);
		*/
		header('Location:'.$url.'/index.php/main/success'); 
	}
	
	
	public function changestatus()
	{
		if($this->input->post()){
			$this->load->model('mUser');
			$int_org_user_id = $this->input->post('id');
			$row = $this->mUser->getorganizationuser($int_org_user_id);	
			$status = ($row->chr_status == 'A')?'I':'A';
			$data['chr_status'] = $status;
			$this->mUser->editorguser( $int_org_user_id, $data);
			echo json_encode(array('success'=>'true', 'status'=>$status)); exit;
		}		
	}

	public function editorganization($int_org_id) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$org = $this->mUser->getorganization($int_org_id); 
		$data = array();
		$data['org'] = $org;
		$this->load->view('header');
		$this->load->view('org-edit',$data);
		$this->load->view('footer');
	         
	}

	public function vieworganization($int_org_id) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$org = $this->mUser->getorganization($int_org_id); 
		$data = array();
		$data['org'] = $org;
		$this->load->view('header');
		$this->load->view('org-view',$data);
		$this->load->view('footer');
	         
	}

	public function adduser() {
	
		$this->checklogin();
		$this->load->model('mUser');
		$orgs = $this->mUser->getorganizations();
		$orguser = $this->mUser->getorganizationuser(1);
		$data = array();
		$data['orgs'] = $orgs;
		$data['orguser'] = $orguser;
		$data['int_org_user_id'] = 0;
		$data['title'] = 'Add Organization User';
		
		$this->load->view('header');
		$this->load->view('user-add',$data);
		$this->load->view('footer');
	         
	}
	
	public function edituser($int_org_user_id) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$orgs = $this->mUser->getorganizations();
		$orguser = $this->mUser->getorganizationuser($int_org_user_id);
		$data = array();
		$data['orgs'] = $orgs;
		$data['orguser'] = $orguser;
		$data['int_org_user_id'] = $int_org_user_id;
		$data['title'] = 'Edit Organization User';
		
		$this->load->view('header');
		$this->load->view('user-edit',$data);
		$this->load->view('footer');
	         
	}

	public function viewuser($int_org_user_id) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$orgs = $this->mUser->getorganizations();
		$orguser = $this->mUser->getorganizationuserdetail($int_org_user_id);
		$data = array();
		$data['orgs'] = $orgs;
		$data['orguser'] = $orguser;
		$data['int_org_user_id'] = $int_org_user_id;
		$data['title'] = 'View Organization User';		
		$this->load->view('header');
		$this->load->view('user-view',$data);
		$this->load->view('footer');	         
	}

	public function getdonordata($int_user_id) {
	
		$this->load->model('mMain');
		$donor = $this->mMain->getdonordetails($int_user_id);
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];	
		$base_site_url = $CI->config->config['base_site_url'];					
		if(count($donor) >0){
			foreach ($donor as $item){
				echo '<input type="hidden" name="int_user_id" value="'.$item->int_user_id.'">
						<div class="control-group">
							<div class="controls">
							  <input class="form-control input-popup" required id="cr-fname" size="50" type="text" title="First Name" name="str_fname" validate="text" value="'.$item->str_fname.'" placeholder="First Name"> 
							  <input class="form-control input-popup" required id="cr-lname" size="50" type="text" title="Last Name" name="str_lname" validate="text" value="'.$item->str_lname.'" placeholder="Last Name">
							</div>
						</div>
						<div class="control-group">
							<div class="controls">
							  <input class="form-control input-popup" required id="cr-address" size="60" type="text" title="Address" name="str_address" validate="text" value="'.$item->str_address.'" placeholder="Address"> 
							  <input class="form-control input-popup" required id="cr-city" size="30"  type="text" title="City" name="str_city" validate="text" value="'.$item->str_city.'" placeholder="City">
							</div>
						</div>
						<div class="control-group">
							<div class="controls">
							  <input class="form-control input-popup" required id="cr-state"  size="30" type="text" title="State" name="str_state" validate="text" value="'.$item->str_state.'" placeholder="State">
							  <input class="form-control input-popup" required id="cr-zip"  size="6" type="text" title="Zip" name="str_zip" validate="text" value="'.$item->str_zip.'" placeholder="Zip">
							</div>					
						</div>	
						<div class="control-group">
							<div class="controls">
							  <input class="form-control input-popup" required id="cr-phone"  size="12" type="text" title="Phone" name="str_phone" validate="phone" value="'.$item->str_phone.'" placeholder="Phone">
							  <input class="form-control input-popup" required id="cr-email"  size="40" type="text" title="Email" name="str_email" validate="email" value="'.$item->str_email.'" placeholder="Email">
							</div>					
						</div>
					';
				}
		}else{
			echo '
					<input type="hidden" name="int_user_id" value="0">
					<div class="control-group">
						<div class="controls">
						  <input class="form-control input-popup" required id="cr-fname" size="50" type="text" title="First Name" name="str_fname" validate="text" value="" placeholder="First Name"> 
						  <input class="form-control input-popup" required id="cr-lname" size="50" type="text" title="Last Name" name="str_lname" validate="text" value="" placeholder="Last Name">
						</div>
					</div>
					<div class="control-group">
						<div class="controls">
						  <input class="form-control input-popup" required id="cr-address" size="60" type="text" title="Address" name="str_address" validate="text" value="" placeholder="Address"> 
						  <input class="form-control input-popup" required id="cr-city" size="30"  type="text" title="City" name="str_city" validate="text" value="" placeholder="City">
						</div>
					</div>
					<div class="control-group">
						<div class="controls">
						  <input class="form-control input-popup" required id="cr-state"  size="30" type="text" title="State" name="str_state" validate="text" value="" placeholder="State">
						  <input class="form-control input-popup" required id="cr-zip"  size="6" type="text" title="Zip" name="str_zip" validate="text" value="" placeholder="Zip">
						</div>					
					</div>	
					<div class="control-group">
						<div class="controls">
						  <input class="form-control input-popup" required id="cr-phone"  size="12" type="text" title="Phone" name="str_phone" validate="phone" value="" placeholder="Phone">
						  <input class="form-control input-popup" required id="cr-email"  size="40" type="text" title="Email" name="str_email" validate="email" value="" placeholder="Email">
						</div>					
					</div>							
				';			
		}
		
	}
	public function profile($int_user_id) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$user = $this->mUser->getprofile($int_user_id);
		$data = array();
		$data['orguser'] = $user;
		$data['int_user_id'] = $int_user_id;
		$data['title'] = 'User Profile';		
		$this->load->view('header');
		$this->load->view('profile',$data);
		$this->load->view('footer');	         
	}
	public function manageusers() {
		$this->load->model('mUser');
		$users = $this->mUser->getorgusers();
		$data = array();
		$data['users'] = $users;
		$data['title'] = 'Organization Users';		
		$this->checklogin();
		$this->load->view('header');
		$this->load->view('manage-users',$data);
		$this->load->view('footer');
	         
	}
	public function resetpassword(){
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
	public function logout(){	
		$this->load->library('session');
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url']; 
		$this->session->sess_destroy();
		$user_data = $this->session->all_userdata(); 
		 
		header('Location:'.$url); 
	}
	public function signup()	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mMain');		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_fname = $this->input->post('str_fname');
		$str_lname = $this->input->post('str_lname');
		$str_email = $this->input->post('str_email');
		$str_address = $this->input->post('str_address');
		$str_state = $this->input->post('str_state');
		$str_city = $this->input->post('str_city');
		$str_zip = $this->input->post('str_zip');
		$str_phone = $this->input->post('str_phone');
		$int_donor_id = $this->input->post('int_donor_id');
		$str_password = 'password';
		
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add User ------------------------*/
		$userdata = array();
		$userdata['tbl_user.str_login'] = $str_email;
		$userdata['tbl_user.str_password'] = $str_password;
		$userdata['tbl_user.int_user_type_id'] = 4; // 4- Donor	
		
		/* ------------------Add Donor ------------------------*/
		$donordata = array();
		$donordata['tbl_donor.str_fname'] = $str_fname;
		$donordata['tbl_donor.str_lname'] = $str_lname;
		$donordata['tbl_donor.str_email'] = $str_email;
		$donordata['tbl_donor.str_address'] = $str_address;
		$donordata['tbl_donor.str_state'] = $str_state;
		$donordata['tbl_donor.str_city'] = $str_city;
		$donordata['tbl_donor.str_zip'] = $str_zip;
		$donordata['tbl_donor.str_phone'] = $str_phone;
		
		if($int_donor_id > 0){
			$donordata['tbl_donor.int_donor_id'] = $int_donor_id;  
			$int_donor_id = $this->mMain->editdonor($int_donor_id,$donordata);
		}else{
			$int_donor_id = $this->mMain->adddonor($donordata);
		}
		$subject = 'Your Donor Profile has been created';
		$content = '<h3>Thanks for Sign Up!!</h3></br>
			<p>You have created donor profile in our site</p>
			<p>You can use the following credential next time you login our site</p>
			<p>Username : '.$str_email.'</p>
			<p>Password : password</p>		
		';
		$this->sendMail($str_email,$subject,$content);
		header('Location:'.$url.'/main/home'); 
	}

	public function sendMail($to,$subject,$message)	{
		
		$from = "admin@givetool.com";
		$headers = "From:" . $from;
		mail($to,$subject,$message,$headers);
		header('Location:'.$url.'index.php/demo/listusers'); 
	}
	
	public function imageupload($img,$fieldname,$dir,$id)	{
		$session_id='1'; //$session id
		$path = "uploads/org/".$id."/";
		
		if (!file_exists($path)) {
			mkdir($path, 0777, true); 
			mkdir($path."/logo", 0777, true);
			
		}
		$path = $path.$dir."/";
		$result = array();
		$result['error'] = 0;
		$result['content'] = '';
		
		
		$valid_formats = array("jpg", "png", "gif", "bmp");
		if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
			{
				$name = $img[$fieldname]['name'];
				$size = $img[$fieldname]['size'];
				
				if(strlen($name))
					{
						list($txt, $ext) = explode(".", $name);
						if(in_array($ext,$valid_formats))
						{
						if($size<(1024*1024))
							{
								$actual_image_name = time().substr(str_replace(" ", "_", $txt), 5).".".$ext;
								$tmp = $img[$fieldname]['tmp_name'];
								if(move_uploaded_file($tmp, $path.$actual_image_name))
								{							
											
										//echo "<img src='uploads/".$actual_image_name."'  class='preview'>";
										//echo "<h2>Image Uploaded Successfully</h2>";
											

											$uploadedfile = $path.$actual_image_name;
											$src = imagecreatefromjpeg($uploadedfile);
											list($width,$height)=getimagesize($path.$actual_image_name);

											//$newwidth=800;
											$newwidth=$width;
											$newheight=($height/$width)*$newwidth;
											$tmp=imagecreatetruecolor($newwidth,$newheight);

											//$newwidth1=420;
											$newheight1=242;
											$newwidth1=($width/$height)*$newheight1;
											$tmp1=imagecreatetruecolor($newwidth1,$newheight1);

											imagecopyresampled($tmp,$src,0,0,0,0,$newwidth,$newheight,$width,$height);
											imagecopyresampled($tmp1,$src,0,0,0,0,$newwidth1,$newheight1,$width,$height);
											$imagename=	$img[$fieldname]['name'];			
											$filename = $path.''.$img[$fieldname]['name'];
											//$filename1 = "images/projects/thumbs/". $img[$fieldname]['name'];

											imagejpeg($tmp,$filename,100);
											//imagejpeg($tmp1,$filename1,100);
											
											imagedestroy($src);
											imagedestroy($tmp);
											imagedestroy($tmp1);
											unlink($uploadedfile);
											$result['error'] = 0;
											$result['content'] = $img[$fieldname]['name'];
											
								}else{
									$result['error'] = 1;
									$result['content'] ='failed';
								}
							}else{
								$result['error'] = 1;
								$result['content'] ='Image file size max 1 MB';
							}
						}else{
							$result['error'] = 1;
							$result['content'] ='Invalid file format..';
						}
					}else{
						$result['error'] = 1;
						$result['content'] ='Please select image..!';
					}
					
				
			}
			return $result;
		}
		
	

}