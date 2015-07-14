<?php

class Muser extends CI_Model {

	function add($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_user', array('int_user_id' => NULL) );
		// Get id of inserted record
		$int_user_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->edit($int_user_id, $data);		
		return $int_user_id;
	}
	function edit($int_user_id, $data){
		$this->db->where('int_user_id', $int_user_id); 
		$result = $this->db->update('tbl_user', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
	
	function addorguser($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_org_user', array('int_org_user_id' => NULL) );
		// Get id of inserted record
		$int_org_user_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editorguser($int_org_user_id, $data);		
		return $int_org_user_id;
	}
	function editorguser($int_org_user_id, $data){
		$this->db->where('int_org_user_id', $int_org_user_id); 
		$result = $this->db->update('tbl_org_user', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
	
	function adddonor($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_donor', array('int_donor_id' => NULL) );
		// Get id of inserted record
		$int_donor_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editdonor($int_donor_id, $data);		
		return $int_donor_id;
	}
	function adddonation($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_donation', array('int_donation_id' => NULL) );
		// Get id of inserted record
		$int_donation_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editdonation($int_donation_id, $data);		
		return $int_donation_id;
	}
	function editdonation($int_donation_id,$data){
		
		$this->db->where('int_donation_id', $int_donation_id); 
		$result = $this->db->update('tbl_donation', $data);
		if($result){
			return true;
		} else {
			return false;
		}
	}
	function editdonor($int_donor_id, $data){
		$this->db->where('int_donor_id', $int_donor_id); 
		$result = $this->db->update('tbl_donor', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
	function updatedonorbyuserid($int_user_id, $data){
		$this->db->where('int_user_id', $int_user_id); 
		$result = $this->db->update('tbl_donor', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function addorganization($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_organization', array('int_organization_id' => NULL) );
		// Get id of inserted record
		$int_organization_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editorganization($int_organization_id, $data);		
		return $int_organization_id;
	}
	function editorganization($int_organization_id, $data){
		$this->db->where('int_organization_id', $int_organization_id); 
		$result = $this->db->update('tbl_organization', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function getorganizations()
	{
		$this->load->database();
		$query = $this->db->get('tbl_organization');
		return $query->result();
	}
	function getuserpassword($int_user_id)
	{
		
		$this->load->database();
		$this->db->where('tbl_user.int_user_id', $int_user_id);
		$query = $this->db->get('tbl_user'); 
		$row = $query->row();
		return $row;	
	}
	function getorganization($int_org_id)
	{
		$this->load->database();
		$this->db->where('tbl_organization.int_organization_id', $int_org_id);
		$query = $this->db->get('tbl_organization');
		$row = $query->row();
		return $row;	
	}
	function checkadminuserexist($int_org_id)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_org_user  WHERE int_organization_id = $int_org_id AND  bit_is_admin = 1";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function checkDonorEmailUnique($str_email)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_donor  WHERE str_email = '$str_email'";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function checkEmailUnique($str_email)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_user  WHERE str_login = '$str_email'";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function checkOrgUserEmailUnique($str_email)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_org_user  WHERE str_email = '$str_email'";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getorgusers($int_user_id)
	{
		$this->load->database();

		$orguser  = $this->getOrgID($int_user_id); 
		if(sizeof($orguser) >0){			
			$int_organization_id = $orguser[0]->int_organization_id;
		}else{		
			$int_organization_id = 0;
		}
		if($int_organization_id !=0)
			$this->db->where('tbl_org_user.int_organization_id', $int_organization_id);
		$this->db->select('tbl_org_user.*', FALSE);
		$this->db->select('o.str_name AS str_org_name', FALSE);
		$query = $this->db->join('tbl_organization AS o', 'o.int_organization_id = tbl_org_user.int_organization_id');  
		$query = $this->db->get('tbl_org_user');
		return $query->result();                                                                     
	}
	function getOrgID($int_user_id)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_org_user  WHERE int_user_id =$int_user_id "; 	
		$result =   $this->db->query($query);           
		return $result->result();		 
	}  
	function getorganizationuser($int_org_user_id)
	{
		$this->load->database();
		$this->db->where('tbl_org_user.int_org_user_id', $int_org_user_id);
		$query = $this->db->get('tbl_org_user'); 
		$row = $query->row();
		return $row;		 
	}  
	function getorganizationuserdetail($int_org_user_id)
	{
		$this->db->select('tbl_org_user.*, o.str_name AS str_org_name');
		$this->db->where('tbl_org_user.int_org_user_id', $int_org_user_id);
		$query = $this->db->join('tbl_organization AS o', 'o.int_organization_id = tbl_org_user.int_organization_id');  
		$query = $this->db->get('tbl_org_user');	
		$row = $query->row();
		return $row;		 
	}  
	function getprofile($int_user_id)
	{
		$this->db->select('tbl_org_user.*, o.str_name AS str_org_name');
		$this->db->where('tbl_org_user.int_user_id', $int_user_id);
		$query = $this->db->join('tbl_organization AS o', 'o.int_organization_id = tbl_org_user.int_organization_id');  
		$query = $this->db->get('tbl_org_user');	
		$row = $query->row();
				
		return $row;		 
	}  
	function deleteorguser($int_org_user_id){
		$this->db->where('int_org_user_id', $int_org_user_id); 
		$result = $this->db->delete('tbl_org_user');
		// Return bool on success
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function deleteuser($int_user_id){
		$this->db->where('int_user_id', $int_user_id); 
		$result = $this->db->delete('tbl_user');
		// Return bool on success
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function deleteuserbyorg($int_organization_id){
		$this->db->where('int_organization_id', $int_organization_id); 
		$result = $this->db->delete('tbl_org_user');
		// Return bool on success
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function deleteorg($int_organization_id){
		$this->db->where('int_organization_id', $int_organization_id); 
		$result = $this->db->delete('tbl_organization');
		
		$this->deleteuserbyorg($int_organization_id);
		
		// Return bool on success
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
}