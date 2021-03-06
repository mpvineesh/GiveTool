<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class User extends MY_Controller {

	 
	public function index() {
	
		$this->checklogin();
		$this->load->view('includes/header');
		$this->load->view('home');
		$this->load->view('includes/footer');
	         
	}
	
	
	public function organization() {
	
		$this->checklogin();
		
		$this->load->model('mUser');
		$organizations = $this->mUser->getorganizations();
		
		$data = array();
		$data['organizations'] = $organizations;
		
		$this->load->view('header');
		$this->load->view('org-list',$data);
		$this->load->view('footer');
	         
	}
	
	public function manageorg() {
	
		$this->checklogin();		
		$this->load->model('mUser');
		$organizations = $this->mUser->getorganizations();
		
		$data = array();
		$data['organizations'] = $organizations;
		
		$this->load->view('header');
		$this->load->view('manage-org',$data);
		$this->load->view('footer');
	         
	}
	
	public function addorganization() {		
		
		$this->checklogin();		
		$this->load->model('mUser');		 
		$data['title'] = 'Edit Organization User';		
		
		$this->checklogin();
		$this->load->view('header');
		$this->load->view('org-add');
		$this->load->view('footer');	         
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


	public function changepassword($int_user_id,$newpassword,$currentpassword) {
	
		$this->checklogin();
		$this->load->model('mUser');
		$user = $this->mUser->getuserpassword($int_user_id);
		
		if($user->str_password != $currentpassword){
			echo 'The current password you entered does not match with our records';
		}else{
			$userdata = array();
			$userdata['tbl_user.int_user_id'] = $int_user_id;
			$userdata['tbl_user.str_password'] = $newpassword;
			$this->mUser->edit($int_user_id,$userdata);
			echo 'The password updated successfully';
		}
		exit; 
		         
	}
	public function savepassword($int_user_id) {
	
		$this->checklogin();
		$this->load->model('mUser');		
		$CI =& get_instance();  
		$url = $CI->config->config['base_site_url'];
		$userdata = array();
		$str_password = $_POST['str_password'];
		$userdata['tbl_user.int_user_id'] = $int_user_id;
		$userdata['tbl_user.str_password'] = $str_password;
		$userdata['tbl_user.str_password_reset_id'] = '';
		$this->mUser->edit($int_user_id,$userdata);
		
		header('Location:'.$url.'?updated'); 
		         
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
		
		$int_user_id = $this->session->userdata("int_user_id"); 
		$this->load->model('mUser'); 
		
		$users = $this->mUser->getorgusers($int_user_id);
		$data = array();
		$data['users'] = $users;
		$data['title'] = 'Organization Users';		
		$this->checklogin();
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
	
	
	public function saveorguser()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mUser');		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_name = $this->input->post('str_name');
		$str_email = $this->input->post('str_email');
		$str_password = $this->input->post('str_password');
		$int_org_user_id = $this->input->post('int_org_user_id');
		$int_user_id = $this->input->post('int_user_id');
		$int_organization_id = $this->input->post('int_organization_id');
		if(isset($_POST["bit_is_admin"]))
			$bit_is_admin = $this->input->post('bit_is_admin');
		else
			$bit_is_admin = 0;
		
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add User ------------------------*/
		$userdata = array();
		$userdata['tbl_user.str_login'] = $str_email;
		$userdata['tbl_user.str_password'] = $str_password;
		$userdata['tbl_user.int_user_type_id'] = 2; // 2- Organization/University		
		
		/* ------------------Add Organization ------------------------*/
		$orguserdata = array();
		$orguserdata['tbl_org_user.str_name'] = $str_name;
		$orguserdata['tbl_org_user.str_email'] = $str_email;
		$orguserdata['tbl_org_user.str_password'] = $str_password;
		$orguserdata['tbl_org_user.int_organization_id'] = $int_organization_id; 
		$orguserdata['tbl_org_user.bit_is_admin'] = $bit_is_admin;
		$orguserdata['tbl_org_user.chr_status'] = 'A';
		if($int_org_user_id > 0){ 
			$orguserdata['tbl_org_user.int_org_user_id'] = $int_org_user_id;
			$int_user_id = $this->mUser->edit($int_user_id,$userdata);
			$int_org_user_id = $this->mUser->editorguser($int_org_user_id,$orguserdata);
		}else{
			$int_user_id = $this->mUser->add($userdata);
			$orguserdata['tbl_org_user.int_user_id'] = $int_user_id;			
			$int_org_user_id = $this->mUser->addorguser($orguserdata);
		}
		header('Location:'.$url.'/user/manageusers'); 
	}
	
	
	public function donorsignup()
	{
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url'];
		$this->load->model('mUser');		
		/*--------------Begin Get Form Variables --------------*/
		
		$str_lname = $this->input->post('str_lname');
		$str_fname = $this->input->post('str_fname'); 
		
		$str_name = $str_lname." ".$str_fname;
		$str_email = $this->input->post('str_email');
		$str_address = $this->input->post('str_address');
		$str_city = $this->input->post('str_city');
		$str_state = $this->input->post('str_state');
		$str_zip = $this->input->post('str_zip');
		$str_phone = $this->input->post('str_phone');
		
		
		/* --------------End Get Form Variables --------------*/
		$length = 16;
		$uniqueString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
		
		/* ------------------Add User ------------------------*/
		$userdata = array();
		$userdata['tbl_user.str_login'] = $str_email;
		$userdata['tbl_user.str_password'] = 'password';
		$userdata['tbl_user.int_user_type_id'] = 3; // 2- Organization/University		
		$userdata['tbl_user.str_password_reset_id'] = $uniqueString; // 2- Organization/University		
		
		/* ------------------Add Organization ------------------------*/
		$donordata = array();
		$donordata['tbl_donor.str_fname'] = $str_fname;
		$donordata['tbl_donor.str_lname'] = $str_lname;
		$donordata['tbl_donor.str_email'] = $str_email;
		$donordata['tbl_donor.str_address'] = $str_address;
		$donordata['tbl_donor.str_city'] = 	$str_city;
		$donordata['tbl_donor.str_state'] = $str_state;
		$donordata['tbl_donor.str_zip'] = 	$str_zip;
	
		$int_user_id = $this->mUser->add($userdata);
		$donordata['tbl_donor.int_user_id'] = $int_user_id;
		$int_donor_id = $this->mUser->adddonor($donordata);
		 
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
						<tr>
							<td bgcolor="#f9f9fa" style="padding: 8px 0 8px 100px; border-bottom: 1px solid #dedede;">Password</td>
							<td style="padding: 8px 0 8px 50px; border-bottom: 1px solid #dedede;"><a href="'.$url.'/main/updatepassword/'.$int_user_id.'/'.$uniqueString.'">Update Password</a></td>
						</tr>
					</table>';
		$this->sendHTMLEmail($toname,$to,$subject,$line1,$line2,$line3,$line4);
		
		
		header('Location:'.$url.'/main/home?success'); 
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
		$str_country = $this->input->post('str_country'); 
		$str_state = $this->input->post('str_state');
		$str_zip = $this->input->post('str_zip');	
		
		/* --------------End Get Form Variables --------------*/
		/* ------------------Add User ------------------------ 
		$userdata = array();
		$userdata['tbl_user.str_login'] = $str_email;
		$userdata['tbl_user.str_password'] = 'password';
		$userdata['tbl_user.int_user_type_id'] = 2; // 2- Organization/University
		$int_user_id = $this->mUser->add($userdata);
		------------------Add Organization ------------------------*/
		$orgdata = array();
		$orgdata['tbl_organization.str_name'] =  $str_name;
		$orgdata['tbl_organization.str_short_name'] = $str_name; 
		$orgdata['tbl_organization.str_address1'] = $str_address1;
		$orgdata['tbl_organization.str_address2'] = $str_address2;
		$orgdata['tbl_organization.str_state'] = $str_state;
		$orgdata['tbl_organization.str_city'] = $str_city;
		$orgdata['tbl_organization.str_email'] = $str_email;
		$orgdata['tbl_organization.str_zip'] = $str_zip;
		$orgdata['tbl_organization.str_country'] = $str_country;
		$orgdata['tbl_organization.date_added'] = date('Y-m-d');
		$orgdata['tbl_organization.date_modified'] = date('Y-m-d');
		$orgdata['tbl_organization.chr_status'] = 'A';
		$orgdata['tbl_organization.int_user_id'] = 0;
		$int_organization_id = $this->mUser->addorganization($orgdata);
		
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			$imgupload[0] = $this->imageupload($imgarray,'img_logo','logo',$int_organization_id);
		} 
		$str_logo_image =  $imgupload[0]['content'];
		
		$orgdata['tbl_organization.str_logo'] = $str_logo_image;
		$int_organization_id = $this->mUser->editorganization($int_organization_id,$orgdata);
		
		header('Location:'.$url.'/user/manageorg'); 
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
		$str_country = $this->input->post('str_country');
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
		$orgdata['tbl_organization.str_zip'] = $str_zip;
		$orgdata['tbl_organization.str_country'] = $str_country;
		$orgdata['tbl_organization.date_added'] = date('Y-m-d');
		$orgdata['tbl_organization.date_modified'] = date('Y-m-d');
		$orgdata['tbl_organization.chr_status'] = 'A'; 
		/* ------------------ Upload Logo Image ------------------------*/
		if(isset($_FILES['img_logo']) && $_FILES['img_logo']['name'] !='' && strlen($_FILES['img_logo']['name'])){ 
			$imgarray['img_logo'] = $_FILES['img_logo'];
			$imgupload[0] = $this->imageupload($imgarray,'img_logo','logo',$int_organization_id);
			$str_logo_image =  $imgupload[0]['content'];
			$orgdata['tbl_organization.str_logo'] = $str_logo_image;
		}
		
		$int_organization_id = $this->mUser->editorganization($int_organization_id,$orgdata);
		
		header('Location:'.$url.'/user/manageorg'); 
	}

	public function deleteorguser($int_org_user_id)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mUser');
		
		$row = $this->mUser->getorganizationuser($int_org_user_id);		
		$int_user_id = $row->int_user_id;
				
		$this->mUser->deleteuser($int_user_id);		
		$user = $this->mUser->deleteorguser($int_org_user_id);		
		header('Location:'.$url.'/index.php/user/manageusers'); 
	}
	public function deleteorg($int_org_id)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mUser');
		$user = $this->mUser->deleteorg($int_org_id);		
		header('Location:'.$url.'/index.php/user/manageorg'); 
	}
	public function checkemailunique($str_email,$type)
	{	
		$this->load->model('mUser');
		switch($type)
		{
			case 'donor':
				$user  = $this->mUser->checkEmailUnique($str_email);
				break;
			case 'orguser':
				$user = $this->mUser->checkEmailUnique($str_email);
				break;
		}
		if(sizeof($user)>0)
			print 1;
		else
			print 0;
		exit;
		
	}
	
	
	public function checkadminuserexist($int_org_id)
	{	
		$this->load->model('mUser');
		$user = $this->mUser->checkadminuserexist($int_org_id);		
		if(sizeof($user)>0)
			print 1;
		else
			print 0;
		exit;
	}

	
	public function imageupload($img,$fieldname,$dir,$id)
	{
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
											$what = getimagesize($uploadedfile);
											switch(strtolower($what['mime']))
											{
												case 'image/png':
													$src = imagecreatefrompng($uploadedfile);
													break;
												case 'image/jpeg':
													$src = imagecreatefromjpeg($uploadedfile);
													break;
												case 'image/gif':
													$src = imagecreatefromgif($uploadedfile);
													break;
												default: die();
											}
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