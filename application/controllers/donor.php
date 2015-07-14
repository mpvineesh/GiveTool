<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

 

class Donor extends MY_Controller {

	 
	
	public function manage() {
	
		$this->checklogin();
		
		$this->load->model('mDonor');
		$int_user_id = $this->session->userdata("int_user_id"); 
		$donors = $this->mDonor->getdonors($int_user_id );
		$data = array();
		$data['donors'] = $donors;
		
		$this->load->view('header');
		$this->load->view('donor-list',$data);
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
	public function updateprofile() {
		$this->load->model('mUser')	;
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mDonor');
		
		 
		$str_fname = $this->input->post('str_fname');
		$str_lname = $this->input->post('str_lname');
		$str_email = $this->input->post('str_email');
		$str_password = $this->input->post('str_password');
		$str_phone = $this->input->post('str_phone');
		$str_address = $this->input->post('str_address');
		$str_city = $this->input->post('str_city');
		$str_zip = $this->input->post('str_zip');
		$str_state = $this->input->post('str_state');
		$int_donor_id = $this->input->post('int_donor_id');
		$int_user_id = $this->input->post('int_user_id');
		
		
		$donordata = array();
		$donordata['tbl_donor.str_fname'] = $str_fname;
		$donordata['tbl_donor.str_lname'] = $str_lname;
		$donordata['tbl_donor.str_email'] = $str_email;
		$donordata['tbl_donor.str_phone'] = $str_phone;
		$donordata['tbl_donor.str_address'] = $str_address;
		$donordata['tbl_donor.str_city'] = $str_city;
		$donordata['tbl_donor.str_state'] = $str_state;
		$donordata['tbl_donor.str_zip'] = $str_zip;	
		$donordata['tbl_donor.int_donor_id'] = $int_donor_id;	
		$donordata['tbl_donor.date_modified'] =  date('Y-m-d');	 
		$int_donor_id = $this->mDonor->edit($int_donor_id,$donordata);
		
		
		
		$userdata = array();
		$userdata['tbl_user.str_password'] = $str_password;
		$userdata['tbl_user.int_user_id'] = $int_user_id;
		$int_user_id = $this->mUser->edit($int_user_id,$userdata);
		
		header('Location:'.$url.'/index.php'); 
	}
	public function changestatus()
	{
		if($this->input->post()){
			$this->load->model('mUser');
			$orguser = $this->input->post('int_org_user_id');
			$row = $this->mUser->getorganizationuser($orguser);			
			$status = ($row->chr_status == 'A')?'I':'A';
			$data['chr_status'] = $status;
			$this->mUser->editorguser( $orguser, $data);
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


	public function myprofile($int_donor_id) {	
		$this->load->model('mMain');
		$donor = $this->mMain->getdonordatabydonorid($int_donor_id);
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];	
		$base_site_url = $CI->config->config['base_site_url'];	 
		foreach ($donor as $item){
			echo '<div class="modal-header">
					  <button type="button" class="close" data-dismiss="modal">&times;</button>
					  <h4 class="modal-title">My Profile</h4>
					</div>
					<form class="form-horizontal" action="'.$base_site_url.'/donor/updateprofile" method="post" id="signup"  role="form">				
						<div class="modal-body">
					 		<input type="hidden"  name="int_donor_id"  value="'.$item->int_donor_id.'" >
					 		<input type="hidden"  name="int_user_id"  value="'.$item->int_user_id.'" >
							<div class="control-group">
								<label class="control-label" for="name">First Name</label>
								<div class="controls">
								  <input class="form-control" id="fname" type="text" title="First Name" name="str_fname" validate="text" value="'.$item->str_fname.'" placeholder="First Name">
								  <span class="help-inline" id="fname_msg"></span>
								</div>
								
							</div>
							<div class="control-group">
								<label class="control-label" for="lname">Last Name</label>
								<div class="controls">
								  <input class="form-control" id="lname" type="text" title="Last Name" name="str_lname" validate="text" value="'.$item->str_lname.'" placeholder="Last Name">
								  <span class="help-inline" id="lname_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="email">Email</label>
								<div class="controls">
									<input class="input-xlarge uneditable-input" id="email" type="hidden" name="str_email" title="Email" value="'.$item->str_email.'" placeholder="Email">
									<span class="input-xlarge uneditable-input">'.$item->str_email.'</span>
									<span class="help-inline" id="email_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="password">Password</label>
								<div class="controls">
									<input class="form-control" id="password" type="password" name="str_password"  title="Password" validate="text"  value="'.$item->str_password.'" placeholder="Password">
									<span class="help-inline" id="password_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="address">Street Address</label>
								<div class="controls">
								  <input class="form-control" id="address" type="text" name="str_address"  title="Address" validate="text"  value="'.$item->str_address.'" placeholder="Street Address">
								   <span class="help-inline" id="address_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="city">City</label>
								<div class="controls">
								  <input class="form-control" id="city" type="text" name="str_city"  title="City" validate="text"  value="'.$item->str_city.'" placeholder="City">
								   <span class="help-inline" id="city_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="state">State</label>
								<div class="controls">
								  <input class="form-control" id="state" type="text" name="str_state"  title="State" validate="text"  value="'.$item->str_state.'" placeholder="State">
								   <span class="help-inline" id="state_msg"></span>
								</div>
							</div>					
							<div class="control-group">
								<label class="control-label" for="zip">Zip</label>
								<div class="controls">
								  <input class="form-control" id="zip" type="text" name="str_zip"  title="Zip" validate="numeric"  value="'.$item->str_zip.'" placeholder="Zip">
								   <span class="help-inline" id="zip_msg"></span>
								</div>
							</div>				
							<div class="control-group">
								<label class="control-label" for="phone">Phone</label>
								<div class="controls">
								  <input class="form-control" id="phone" type="text" name="str_phone"  title="Phone" validate="phone"  value="'.$item->str_phone.'" placeholder="Phone">
								   <span class="help-inline" id="phone_msg"></span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
							<button class="btn btn-success" type="submit" id="btn-signup1" value="1" name="event_search" onClick="return validateForm(\'signup\');">Save Changes</button>

						</div>
					</form>	
				';
			} 
	}

	public function view($int_donor_id) {
	
		//$this->checklogin();
		
		$this->load->model('mDonor');
		$donor = $this->mDonor->getdonordetails($int_donor_id);
		$data = array();
		$data['donor'] = $donor;
		$data['title'] = 'View Donor Details';
		
		$this->load->view('header');
		$this->load->view('donor-view',$data);
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
	
	
	
	public function delete($int_donor_id)
	{	
		$this->checklogin();
		$CI =& get_instance(); 
		$url = $CI->config->config['base_url'];
		$this->load->model('mDonor');
		$user = $this->mDonor->deletedonor($int_donor_id);
		
		
		header('Location:'.$url.'/index.php/donor/manage'); 
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