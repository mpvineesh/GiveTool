<?php

class Mevent extends CI_Model {

	function add($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_event', array('int_event_id' => NULL) );
		// Get id of inserted record
		$int_event_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->edit($int_event_id, $data);		
		return $int_event_id;
	}
	function edit($int_event_id, $data){ 
		$this->db->where('int_event_id', $int_event_id); 
		$result = $this->db->update('tbl_event', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
	function savedenomination($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_event_denomination', array('int_event_denomination_id' => NULL) );
		// Get id of inserted record
		$int_event_denomination_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editdenomination($int_event_denomination_id, $data);		
		return $int_event_denomination_id;
	}
	function editdenomination($int_event_denomination_id, $data){
		$this->db->where('int_event_denomination_id', $int_event_denomination_id); 
		$result = $this->db->update('tbl_event_denomination', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	
	function editdenominationbyeventid($int_event_id, $data){
		$this->db->where('int_event_id', $int_event_id); 
		$result = $this->db->update('tbl_event_denomination', $data);
		// Return bool on success		
		if($result){
			// Clear the cache file for this room info page
			return true;
		} else {
			return false;
		}
	}
	function getevents($int_user_id)
	{
		
		$orguser  = $this->getOrgID($int_user_id); 
		if(sizeof($orguser) >0){			
			$int_organization_id = $orguser[0]->int_organization_id;
		}else{		
			$int_organization_id = 0;
		}
		if($int_organization_id !=0)
			$this->db->where('tbl_org_user.int_organization_id', $int_organization_id);
		
		$this->load->database();	
		$query = 	"SELECT e.*,o.str_name as orgname FROM tbl_event e INNER JOIN tbl_organization o ON o.int_organization_id  = e.int_organization_id  WHERE 1=1 "; 
		if($int_organization_id !=0)
			$query= $query." AND e.int_organization_id =  $int_organization_id";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getOrgID($int_user_id)
	{
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_org_user  WHERE int_user_id =$int_user_id "; 	
		$result =   $this->db->query($query);           
		return $result->result();		 
	}  
	function getoldevents($int_user_id)
	{
		$orguser  = $this->getOrgID($int_user_id); 
		if(sizeof($orguser) >0){			
			$int_organization_id = $orguser[0]->int_organization_id;
		}else{		
			$int_organization_id = 0;
		}
		if($int_organization_id !=0)
			$this->db->where('tbl_org_user.int_organization_id', $int_organization_id);
		$this->load->database();	
		$query = 	"SELECT e.*,o.str_name as orgname FROM tbl_event e INNER JOIN tbl_organization o ON o.int_organization_id  = e.int_organization_id  WHERE 1=1 "; 
		$query = $query." AND e.chr_status ='I'";		
		if($int_organization_id !=0)
			$query= $query." AND e.int_organization_id =  $int_organization_id";
		$result =   $this->db->query($query);           
		return $result->result();
	 
	}
	function getdenomination($int_event_id)
	{
		$this->load->database();
		$this->db->where('int_event_id', $int_event_id); 
		$query = $this->db->get('tbl_event_denomination');
		return $query->result();
	}
	function getactiveevents($int_user_id)
	{
		$orguser  = $this->getOrgID($int_user_id); 
		if(sizeof($orguser) >0){			
			$int_organization_id = $orguser[0]->int_organization_id;
		}else{		
			$int_organization_id = 0;
		}
		if($int_organization_id !=0)
			$this->db->where('tbl_org_user.int_organization_id', $int_organization_id);
		$this->load->database();	
		$query = 	"SELECT e.*,o.str_name as orgname FROM tbl_event e INNER JOIN tbl_organization o ON o.int_organization_id  = e.int_organization_id  WHERE 1=1 "; 
		$query = $query." AND e.chr_status ='A'";		
		if($int_organization_id !=0)
			$query= $query." AND e.int_organization_id =  $int_organization_id";
		$result =   $this->db->query($query);           
		return $result->result();
	}
	
	function geteventbyid($int_event_id)
	{
		 
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e left join tbl_event_denomination ed on ed.int_event_id = e.int_event_id  WHERE e.int_event_id =$int_event_id "; 	
		$result =   $this->db->query($query);   
		$result = $result->result();
		return $result[0];
	}	
	function getresult($date_start,$date_end,$int_merchant_id)
	{
		$this->load->database();	
		$condition='';
		if($date_start !='' && $date_end !='')
			$condition = " AND date_created between '$date_start' AND '$date_end'";
		$query = 	"SELECT o.str_title AS offer, m.str_name AS merchant, 
					(SELECT count( * ) FROM tbl_views WHERE int_merchant_id = m.int_merchant_id ) AS views, 
					(SELECT count( * ) FROM tbl_review WHERE int_offer_id = o.int_offer_id ".$condition.") AS reviews, 
					(SELECT sum(service_rating+location_rating+quality_rating+others_rating) FROM tbl_rating WHERE int_offer_id = o.int_offer_id  ".$condition.") AS rating
					,CASE WHEN (SELECT count( * ) FROM tbl_rating	WHERE int_offer_id = o.int_offer_id ".$condition.") = 0 THEN 1 ELSE (SELECT count( * ) FROM tbl_rating	WHERE int_offer_id = o.int_offer_id ".$condition.") END  AS ratingcount
					FROM tbl_offer o
					INNER JOIN tbl_merchant m ON m.int_merchant_id = o.int_merchant_id WHERE 1=1
					"; 
		if($int_merchant_id >0)
		$query = $query." AND m.int_merchant_id=$int_merchant_id";		
		$result =   $this->db->query($query);           
		return $result->result();
		
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
	function deleteevent($int_event_id){
		$this->db->where('int_event_id', $int_event_id); 
		$result = $this->db->delete('tbl_event');
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