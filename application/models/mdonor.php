<?php

class MDonor extends CI_Model {

	function add($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_user', array('int_user_id' => NULL) );
		// Get id of inserted record
		$int_user_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->edit($int_user_id, $data);		
		return $int_user_id;
	}
	function edit($int_donor_id, $data){
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
	function editdonation($int_donation_id, $data){
		$this->db->where('int_donation_id', $int_donation_id); 
		$result = $this->db->update('tbl_donation', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function getdonors($int_user_id)
	{
		$orguser  = $this->getOrgID($int_user_id); 
		if(sizeof($orguser) >0){			
			$int_organization_id = $orguser[0]->int_organization_id;
		}else{		
			$int_organization_id = 0;
		}
		$dresult = array();
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_donor d"; 	
		if($int_organization_id !=0)
			$query = $query." INNER JOIN tbl_donation dn ON dn.int_user_id = d.int_user_id  INNER JOIN tbl_event e ON e.int_event_id = dn.int_event_id WHERE  e.int_organization_id =$int_organization_id";
	
		$result =   $this->db->query($query);  
		if($result->num_rows >0) 
			return $result->result();
		else
			return $dresult;
	}
	function getOrgID($int_user_id)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_org_user  WHERE int_user_id =$int_user_id "; 	
		$result =   $this->db->query($query);           
		return $result->result();		 
	}  
	function getdonordetails($int_donor_id)
	{
		$this->load->database();
		$this->db->where('int_donor_id', $int_donor_id); 
		$query = $this->db->get('tbl_donor'); //var_dump($query->result());exit;
		$result = $query->result();
		$result = $result[0];
		return $result;
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
	function deletedonor($int_donor_id){
		$data = array();
		$data['chr_status'] = 'D';
		$this->editdonor( $int_donor_id, $data);
			
		$data = array();
		$data['chr_status'] = 'D';
		$this->editdonor( $int_donor_id, $data);
		$this->db->where('int_donor_id', $int_donor_id); 
		$result = $this->db->delete('tbl_donor'); 
		// Return bool on success
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
}