<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class Event extends MY_Controller {

	 
	public function index() {
	
		$this->checklogin();
		$this->load->view('includes/header');
		$this->load->view('home');
		$this->load->view('includes/footer');	         
	}
	
	public function manage() {	
		$this->checklogin();		
		$this->load->model('mEvent');	
		
		$int_user_id = $this->session->userdata("int_user_id"); 
		$events = $this->mEvent->getevents($int_user_id); 	
		$data = array();
		$data['organizations'] = '';		                          
		$data['events'] = $events ;		
		$this->load->view('header');
		$this->load->view('event-list',$data);
		$this->load->view('footer');	         
	}
	
	public function activeevents() {	
		$this->checklogin();		
		$this->load->model('mEvent');	
		$int_user_id = $this->session->userdata("int_user_id"); 
		$events = $this->mEvent->getactiveevents($int_user_id ); 	
		$data = array();
		$data['organizations'] = '';		
		$data['events'] = $events ;		
		$this->load->view('header');
		$this->load->view('events-active',$data);
		$this->load->view('footer');	         
	}
	
	public function eventhistory() {	
		$this->checklogin();		
		$this->load->model('mEvent');	
		$int_user_id = $this->session->userdata("int_user_id"); 
		$events = $this->mEvent->getoldevents($int_user_id); 	
		$data = array();
		$data['organizations'] = '';		
		$data['events'] = $events ;		
		$this->load->view('header');
		$this->load->view('event-history',$data);
		$this->load->view('footer');	         
	}
	public function add() {	
		$this->checklogin();	 			
		$this->load->model('mUser');
		$organizations = $this->mUser->getorganizations();
		$data = array();
		$data['organizations'] = $organizations;
		  		
		$this->load->view('header');
		$this->load->view('event-add',$data);
		$this->load->view('footer');	         
	}
	
	public function eventadd(){
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mEvent');
		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_name = $this->input->post('str_name');
		$int_event_type_id = $this->input->post('int_event_type_id');
		$str_description = $this->input->post('str_description');
		$start_date = date("Y-m-d", strtotime($this->input->post('start_date')));
		$start_time = $this->input->post('start_time'); 
		$start_time = date("G:i", strtotime($start_time));
		$end_date = date("Y-m-d", strtotime($this->input->post('end_date')));
		$end_time = $this->input->post('end_time');	
		$end_time = date("G:i", strtotime($end_time));	 		
		$str_city = $this->input->post('str_city');
		$str_state = $this->input->post('str_state');
		$str_country = $this->input->post('str_country');	
		$img_logo = $this->input->post('img_logo');
		$int_event_user_id = $this->input->post('int_event_user_id');
		$int_organization_id = $this->input->post('int_organization_id');
		//echo date('h:i A', strtotime($end_time));exit;
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add Event ------------------------*/
		$eventdata = array();
		$eventdata['tbl_event.str_name'] = $str_name;
		$eventdata['tbl_event.int_event_type_id'] = $int_event_type_id;
		$eventdata['tbl_event.str_description'] = $str_description;
		$eventdata['tbl_event.start_date'] = $start_date;
		$eventdata['tbl_event.start_time'] = $start_time;
		$eventdata['tbl_event.end_date'] = $end_date;
		$eventdata['tbl_event.end_time'] = $end_time;
		
		$eventdata['tbl_event.str_city'] = $str_city;
		$eventdata['tbl_event.str_state'] = $str_state;
		$eventdata['tbl_event.str_country'] = $str_country;		
		
		$eventdata['tbl_event.date_created'] = date('Y-m-d');
		$eventdata['tbl_event.chr_status'] = 'A';
		$eventdata['tbl_event.int_event_user_id'] = $int_event_user_id;
		$eventdata['tbl_event.int_organization_id'] = $int_organization_id;
		$int_event_id = $this->mEvent->add($eventdata); 
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			$imgupload[0] = $this->imageupload($imgarray,'img_logo','event',$int_event_id);
			$str_logo_image =  $imgupload[0]['content'];
			
			$eventdata['tbl_event.str_logo'] = $str_logo_image;
			$int_event_id = $this->mEvent->edit($int_event_id,$eventdata);
		} 
		
		/* ------------------ Begin Insert Event Denominations ------------------------*/
		$str_denomination1 = $this->input->post('flt_amount1');
		$chr_denomination_type1 = 'A';
		$str_denomination2 = $this->input->post('flt_amount2');
		$chr_denomination_type2 = 'A';
		$str_denomination3 = $this->input->post('flt_amount3');
		$chr_denomination_type3 = 'A'; 
		$str_denomination4 = $this->input->post('flt_amount4');
		$chr_denomination_type4 = 'A'; 
		$str_denomination5 = $this->input->post('flt_amount5');
		$chr_denomination_type5 ='A';
		
		$denominationdata = array();
		$denominationdata['tbl_event_denomination.int_event_id'] = $int_event_id;
		$denominationdata['tbl_event_denomination.str_denomination1'] = $str_denomination1;
		$denominationdata['tbl_event_denomination.str_denomination2'] = $str_denomination2;
		$denominationdata['tbl_event_denomination.str_denomination3'] = $str_denomination3;
		$denominationdata['tbl_event_denomination.str_denomination4'] = $str_denomination4;
		$denominationdata['tbl_event_denomination.str_denomination5'] = $str_denomination5;
		$denominationdata['tbl_event_denomination.chr_denomination_type1'] = $chr_denomination_type1;
		$denominationdata['tbl_event_denomination.chr_denomination_type2'] = $chr_denomination_type2;
		$denominationdata['tbl_event_denomination.chr_denomination_type3'] = $chr_denomination_type3;
		$denominationdata['tbl_event_denomination.chr_denomination_type4'] = $chr_denomination_type4;
		$denominationdata['tbl_event_denomination.chr_denomination_type5'] = $chr_denomination_type5;
		$denominationdata['tbl_event_denomination.int_event_id'] = $int_event_id;
		$int_event_denomination_id = $this->mEvent->savedenomination($denominationdata);
		/* ------------------ End  Insert Event Denominatisavedenominationons  ------------------------*/
		
		
		
		
		
		header('Location:'.$url.'/event/manage'); 
	}
	
	public function eventupdate(){
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mEvent');
		
		/*--------------Begin Get Form Variables --------------*/
		$str_name = $this->input->post('str_name'); 
		$int_event_type_id = $this->input->post('int_event_type_id');
		$str_description = $this->input->post('str_description');
		$start_date = date("Y-m-d", strtotime($this->input->post('start_date')));
		$start_time = $this->input->post('start_time'); 
		$start_time = date("G:i", strtotime($start_time));
		$end_date = date("Y-m-d", strtotime($this->input->post('end_date')));
		$end_time = $this->input->post('end_time');	
		$end_time = date("G:i", strtotime($end_time)); 		
		$str_city = $this->input->post('str_city');
		$str_state = $this->input->post('str_state');
		$str_country = $this->input->post('str_country');		
		$img_logo = $this->input->post('img_logo');
		$int_event_user_id = $this->input->post('int_event_user_id');
		$int_event_id = $this->input->post('int_event_id');
		$int_organization_id = $this->input->post('int_organization_id');
		//echo date('h:i A', strtotime($end_time));exit;
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add Event ------------------------*/
		$eventdata = array();
		$eventdata['tbl_event.str_name'] = $str_name;
		$eventdata['tbl_event.int_event_type_id'] = $int_event_type_id;
		$eventdata['tbl_event.str_description'] = $str_description;
		$eventdata['tbl_event.start_date'] = $start_date;
		$eventdata['tbl_event.start_time'] = $start_time;
		$eventdata['tbl_event.end_date'] = $end_date;
		$eventdata['tbl_event.end_time'] = $end_time;
		
		$eventdata['tbl_event.str_city'] = $str_city;
		$eventdata['tbl_event.str_state'] = $str_state;
		$eventdata['tbl_event.str_country'] = $str_country;	
		
		$eventdata['tbl_event.date_created'] = date('Y-m-d');
		$eventdata['tbl_event.chr_status'] = 'A';
		$eventdata['tbl_event.int_event_user_id'] = $int_event_user_id;
		$eventdata['tbl_event.int_organization_id'] = $int_organization_id;
		$eventdata['tbl_event.int_event_id'] = $int_event_id;
		//var_dump($eventdata);exit;
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			$imgupload[0] = $this->imageupload($imgarray,'img_logo','event',$int_event_id);
			$str_logo_image =  $imgupload[0]['content'];			
			$eventdata['tbl_event.str_logo'] = $str_logo_image;
			
		} 
		
		
		 $this->mEvent->edit($int_event_id,$eventdata);
		
		/* ------------------ Begin Insert Event Denominations ------------------------*/ 
		$str_denomination1 = $this->input->post('flt_amount1');
		$chr_denomination_type1 = 'A';
		$str_denomination2 = $this->input->post('flt_amount2');
		$chr_denomination_type2 = 'A';
		$str_denomination3 = $this->input->post('flt_amount3');
		$chr_denomination_type3 = 'A'; 
		$str_denomination4 = $this->input->post('flt_amount4');
		$chr_denomination_type4 = 'A'; 
		$str_denomination5 = $this->input->post('flt_amount5');
		$chr_denomination_type5 ='A';
		
		$denominationdata = array();
		$denominationdata['tbl_event_denomination.int_event_id'] = $int_event_id;
		$denominationdata['tbl_event_denomination.str_denomination1'] = $str_denomination1;
		$denominationdata['tbl_event_denomination.str_denomination2'] = $str_denomination2;
		$denominationdata['tbl_event_denomination.str_denomination3'] = $str_denomination3;
		$denominationdata['tbl_event_denomination.str_denomination4'] = $str_denomination4;
		$denominationdata['tbl_event_denomination.str_denomination5'] = $str_denomination5;
		$denominationdata['tbl_event_denomination.chr_denomination_type1'] = $chr_denomination_type1;
		$denominationdata['tbl_event_denomination.chr_denomination_type2'] = $chr_denomination_type2;
		$denominationdata['tbl_event_denomination.chr_denomination_type3'] = $chr_denomination_type3;
		$denominationdata['tbl_event_denomination.chr_denomination_type4'] = $chr_denomination_type4;
		$denominationdata['tbl_event_denomination.chr_denomination_type5'] = $chr_denomination_type5; 
		
		$int_event_denomination_id = $this->mEvent->editdenominationbyeventid($int_event_id,$denominationdata);
		
		
		header('Location:'.$url.'/event/manage'); 
	}
		
	public function eventedit($int_event_id) {
				
		$this->checklogin();		
		$this->load->model('mEvent');
		$event = $this->mEvent->geteventbyid($int_event_id);
		 			
		$this->load->model('mUser');
		$organizations = $this->mUser->getorganizations(); 
		$data = array();		
		$data['event'] = $event;
		$data['organizations'] = $organizations;		  		
		$data['int_event_id'] = $int_event_id;		  		
		$data['title'] = 'Edit Event';
		$this->checklogin();
		$this->load->view('header');
		$this->load->view('event-edit',$data );
		$this->load->view('footer');
	         
	}
	
		
	public function viewevent($int_event_id) {
				
		$this->checklogin();		
		$this->load->model('mEvent');
		$event = $this->mEvent->geteventbyid($int_event_id);
		$data = array();		
		$data['event'] = $event;
		$data['title'] = 'Edit Event';
		$this->checklogin();
		$this->load->view('header');
		$this->load->view('event-view',$data );
		$this->load->view('footer');
	         
	}
	public function changestatus()
	{
		if($this->input->post()){
			$this->load->model('mEvent');
			$int_event_id = $this->input->post('id');
			$row = $this->mEvent->geteventbyid($int_event_id); 
			$status = ($row->chr_status == 'A')?'I':'A';
			$data['chr_status'] = $status;
			$this->mEvent->edit( $int_event_id, $data);
			echo json_encode(array('success'=>'true', 'status'=>$status)); exit;
		}		
	}
	public function savedenomination()
	{
		$this->load->model('mEvent');
		if($this->input->post()){
			$int_event_id = $this->input->post('int_event_id');
			$str_denomination1 = $this->input->post('str_denomination1');
			$chr_denomination_type1 = $this->input->post('chr_denomination_type1'); 
			$str_denomination2 = $this->input->post('str_denomination2');
			$chr_denomination_type2 = $this->input->post('chr_denomination_type2'); 
			$str_denomination3 = $this->input->post('str_denomination3');
			$chr_denomination_type3 = $this->input->post('chr_denomination_type3'); 
			$str_denomination4 = $this->input->post('str_denomination4');
			$chr_denomination_type4 = $this->input->post('chr_denomination_type4'); 
			$str_denomination5 = $this->input->post('str_denomination5');
			$chr_denomination_type5 = $this->input->post('chr_denomination_type5'); 
			
			$denominationdata = array();
			$denominationdata['tbl_event_denomination.int_event_id'] = $int_event_id;
			$denominationdata['tbl_event_denomination.str_denomination1'] = $str_denomination1;
			$denominationdata['tbl_event_denomination.str_denomination2'] = $str_denomination2;
			$denominationdata['tbl_event_denomination.str_denomination3'] = $str_denomination3;
			$denominationdata['tbl_event_denomination.str_denomination4'] = $str_denomination4;
			$denominationdata['tbl_event_denomination.str_denomination5'] = $str_denomination5;
			$denominationdata['tbl_event_denomination.chr_denomination_type1'] = $chr_denomination_type1;
			$denominationdata['tbl_event_denomination.chr_denomination_type2'] = $chr_denomination_type2;
			$denominationdata['tbl_event_denomination.chr_denomination_type3'] = $chr_denomination_type3;
			$denominationdata['tbl_event_denomination.chr_denomination_type4'] = $chr_denomination_type4;
			$denominationdata['tbl_event_denomination.chr_denomination_type5'] = $chr_denomination_type5;
			$denominationdata['tbl_event_denomination.int_event_id'] = $int_event_id;
			$int_event_denomination_id = $this->mEvent->savedenomination($denominationdata);
			echo json_encode(array('success'=>'true')); exit;
		}		
	}
	
	public function getdenomination()
	{
		$this->load->model('mEvent');
		
		if($this->input->post()){
			$int_event_id = $this->input->post('int_event_id');
		
			$denominations = $this->mEvent->getdenomination($int_event_id); 
			if(count($denominations)>0){
				echo '
				<input type="hidden" name="int_event_id" id="int_event_id_hidden" value="'.$int_event_id.'">
				<fieldset>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 1</label>
						<div class="controls">
							<select name="chr_denomination_type1" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
							<input class="input-medium" id="focusedInput" type="text" name="str_denomination1" value="'.$denominations[0]->str_denomination1.'" placeholder="Event Denomination 1" >
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 2</label>
						<div class="controls">
							<select name="chr_denomination_type2" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination2" value="'.$denominations[0]->str_denomination2.'" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 3</label>
						<div class="controls">
							<select name="chr_denomination_type3" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination3" value="'.$denominations[0]->str_denomination3.'" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 4</label>
						<div class="controls">
							<select name="chr_denomination_type4" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination4" value="'.$denominations[0]->str_denomination4.'" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 5</label>
						<div class="controls">
							<select name="chr_denomination_type5" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination5" value="'.$denominations[0]->str_denomination5.'" placeholder="Event Denomination 1">
						</div>
					</div>
				</fieldset>';
			}else{
				echo '
				<input type="hidden" name="int_event_id" id="int_event_id_hidden" value="'.$int_event_id.'">
				<fieldset>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 1</label>
						<div class="controls">
							<select name="chr_denomination_type1" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
							<input class="input-medium" id="focusedInput" type="text" name="str_denomination1" value="" placeholder="Event Denomination 1" >
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 2</label>
						<div class="controls">
							<select name="chr_denomination_type2" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination2" value="" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 3</label>
						<div class="controls">
							<select name="chr_denomination_type3" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination3" value="" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 4</label>
						<div class="controls">
							<select name="chr_denomination_type4" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination4" value="" placeholder="Event Denomination 1">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="focusedInput">Denomination 5</label>
						<div class="controls">
							<select name="chr_denomination_type5" class="input-medium">
								<option value="">Type</option>
								<option value="A">Amount</option>
								<option value="P">Percentage</option>
							</select>
						  <input class="input-medium" id="focusedInput" type="text" name="str_denomination5" value="" placeholder="Event Denomination 1">
						</div>
					</div>
				</fieldset>';
			}exit;
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
	
		//$this->checklogin();
		
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
	
		//$this->checklogin();
		
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
	
		//$this->checklogin();
		
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

	public function manageusers() {
		
		$this->load->model('mUser');
		$users = $this->mUser->getorgusers();
		$data = array();
		$data['users'] = $users;
		$data['title'] = 'Organization Users';
		
		//$this->checklogin();
		$this->load->view('header');
		$this->load->view('manage-users',$data);
		$this->load->view('footer');
	         
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
	public function deleteevent($eventid)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mEvent');
		$user = $this->mEvent->deleteevent($eventid);		
		header('Location:'.$url.'/index.php/event/manage'); 
	}
	public function orgadd()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mUser');
		
		$imgupload=array();
		$imgupload[0]=array();
		$imgupload[0]['error'] = 0;
		$imgupload[0]['content'] = '';
		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_name = $this->input->post('str_name');
		$str_short_name = $this->input->post('str_short_name');
		$str_email = $this->input->post('str_email');
		$str_address1 = $this->input->post('str_address1');
		$str_address2 = $this->input->post('str_address2');
		$str_city = $this->input->post('str_city');
		$int_state_id = $this->input->post('int_state_id');
		$int_country_id = $this->input->post('int_country_id');
		$str_zip = $this->input->post('str_zip');	
		
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add User ------------------------*/
		$userdata = array();
		$userdata['tbl_user.str_login'] = $str_email;
		$userdata['tbl_user.str_password'] = 'password';
		$userdata['tbl_user.int_user_type_id'] = 2; // 2- Organization/University
		$int_user_id = $this->mUser->add($userdata);
		/* ------------------Add Organization ------------------------*/
		$orgdata = array();
		$orgdata['tbl_organization.int_user_id'] = $int_user_id;
		$orgdata['tbl_organization.str_name'] =  $str_name;
		$orgdata['tbl_organization.str_short_name'] = $str_name; 
		$orgdata['tbl_organization.str_address1'] = $str_address1;
		$orgdata['tbl_organization.str_address2'] = $str_address2;
		$orgdata['tbl_organization.str_state'] = $int_state_id;
		$orgdata['tbl_organization.str_city'] = $str_city;
		$orgdata['tbl_organization.str_email'] = $str_email;
		$orgdata['tbl_organization.date_added'] = date('Y-m-d');
		$orgdata['tbl_organization.date_modified'] = date('Y-m-d');
		$orgdata['tbl_organization.chr_status'] = 'A';
		$orgdata['tbl_organization.int_user_id'] = $int_user_id;
		$int_organization_id = $this->mUser->addorganization($orgdata);
		
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			$imgupload[0] = $this->imageupload($imgarray,'img_logo','logo',$int_organization_id);
		} 
		$str_logo_image =  $imgupload[0]['content'];
		
		$orgdata['tbl_organization.str_logo'] = $str_logo_image;
		$int_organization_id = $this->mUser->editorganization($int_organization_id,$orgdata);
		
		header('Location:'.$url.'/user/organization'); 
	}
	
	public function orgupdate()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mUser');
		
		$imgupload=array();
		$imgupload[0]=array();
		$imgupload[0]['error'] = 0;
		$imgupload[0]['content'] = '';
		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_name = $this->input->post('str_name');
		$str_short_name = $this->input->post('str_short_name');
		$str_email = $this->input->post('str_email');
		$str_address1 = $this->input->post('str_address1');
		$str_address2 = $this->input->post('str_address2');
		$str_city = $this->input->post('str_city');
		$str_state = $this->input->post('str_state');
		$int_country_id = $this->input->post('str_country');
		$str_zip = $this->input->post('str_zip');	
		$int_organization_id = $this->input->post('int_org_id');	
		
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add User ------------------------*/ 
		/* ------------------Add Organization ------------------------*/
		$orgdata = array(); 
		$orgdata['tbl_organization.str_name'] =  $str_name;
		$orgdata['tbl_organization.str_short_name'] = $str_short_name; 
		$orgdata['tbl_organization.str_address1'] = $str_address1;
		$orgdata['tbl_organization.str_address2'] = $str_address2;
		$orgdata['tbl_organization.str_state'] = $str_state;
		$orgdata['tbl_organization.str_city'] = $str_city;
		$orgdata['tbl_organization.str_email'] = $str_email;
		$orgdata['tbl_organization.date_added'] = date('Y-m-d');
		$orgdata['tbl_organization.date_modified'] = date('Y-m-d');
		$orgdata['tbl_organization.chr_status'] = 'A'; 
		$int_organization_id = $this->mUser->editorganization($int_organization_id,$orgdata);
		
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			//$imgupload[0] = $this->imageupload($imgarray,'img_logo','logo',$int_user_id);
		}
		
		$orgdata['tbl_organization.str_logo'] = $_FILES['img_logo']['name'];
		$int_organization_id = $this->mUser->editorganization($int_organization_id,$orgdata);
		
		header('Location:'.$url.'/user/manageorg'); 
	}

	public function deleteorguser($int_org_user_id)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mUser');
		$user = $this->mUser->deleteorguser($int_org_user_id);
		
		header('Location:'.$url.'index.php/user/manageusers'); 
	//	$this->load->view('edit_form',$data);
		//$this->load->view('welcome_message');
	}
	public function deleteorg($int_org_id)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mUser');
		$user = $this->mUser->deleteorg($int_org_id);
		
		header('Location:'.$url.'index.php/user/manageorg'); 
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
	public function imageupload($img,$fieldname,$dir,$id)
	{
		$session_id='1'; //$session id
		$path = "uploads/events/".$id."/";
		
		if (!file_exists($path)) {
			mkdir($path, 0777, true); 
			mkdir($path."/logo", 0777, true); 
			
		}
		$path = $path."/logo/";
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