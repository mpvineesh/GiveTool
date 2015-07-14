<?php

class Mmain extends CI_Model {

	function adddonor($data){
		
		// Run query to insert blank row
		$this->db->insert('tbl_donor', array('int_donor_id' => NULL) );
		// Get id of inserted record
		$int_donor_id = $this->db->insert_id();
		// Now call the edit function to update the actual data for this new row now we have the ID
		$this->editdonor($int_donor_id, $data);		
		return $int_donor_id;
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
	function getevents()
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e WHERE 1=1 limit 0,4"; 
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function geteventsbysearch($keyword,$date,$location)
	{		 
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e WHERE 1=1 "; 
		if($keyword !=''){
			$condition = $condition." AND str_name like '%$keyword%'";
		}
		if($date !=''){ 
			$dateArray = explode("/", $date);
			$date = $dateArray[2]."-".$dateArray[1]."-".$dateArray[0];
			$condition = $condition." AND start_date = '$date'";
		}
		if($location !=''){
			$condition = $condition." AND str_city like '%$location%'";
		}
		$query = $query.$condition;	
		$result =   $this->db->query($query);   //var_dump($result->result());exit;        
		return $result->result();
	}
	function getrecentevents()
	{		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e WHERE 1=1 order by start_date desc limit 0,2"; 		
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getupcomingevents()
	{		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event WHERE DATE(start_date) > CURDATE() order by start_date desc limit 0,3"; 	
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getmostcontributedevents()
	{		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT e.*,sum(flt_amount) as a FROM tbl_event  e inner join tbl_donation d on d.int_event_id = e.int_event_id
						group by d.int_event_id order by a desc limit 0,3"; 	
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getpopularevents()
	{		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e WHERE 1=1 order by int_views desc limit 0,3"; 		
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getlocations()
	{		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT distinct str_city FROM tbl_event e WHERE 1=1 "; 		
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function geteventdetails($int_event_id)
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e left join tbl_event_denomination ed on ed.int_event_id = e.int_event_id  WHERE e.int_event_id =$int_event_id "; 	
		$result =   $this->db->query($query);           
		return $result->result();
	}
	
	function updateviews($int_event_id,$ip)
	{
		$this->load->database();	
		
		$query="SELECT * FROM tbl_client_ip where int_event_id=$int_event_id and ip = '$ip'"; 
		$check = mysql_query($query); 
		if(mysql_num_rows($check)>0){
			
		}else {
			$query1 ="UPDATE tbl_event SET int_views = int_views+1 WHERE int_event_id=$int_event_id";
			mysql_query($query1);  
			$query2 ="INSERT INTO  tbl_client_ip(int_event_id,ip) VALUES($int_event_id,'$ip')"; 
			mysql_query($query2); 	
		}
		return 1;		
	}
	
	
	function getdonordetails($int_user_id)
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_donor d INNER JOIN tbl_user u on u.int_user_id = d.int_user_id WHERE d.int_user_id = $int_user_id"; 
		$result =   $this->db->query($query);           
		return $result->result();
	}
	
	function validateuniquestring($int_user_id,$uniquestring)
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_user  WHERE int_user_id = $int_user_id AND str_password_reset_id = '$uniquestring'"; 
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getdonordatabydonorid($int_donor_id)
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_donor d INNER JOIN tbl_user u on u.int_user_id = d.int_user_id WHERE d.int_donor_id = $int_donor_id"; 
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getdonordata($int_user_id)
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_event e WHERE int_event_id = $int_event_id"; 
		$result =   $this->db->query($query);           
		return $result->result();
	}
	function getorganizations()
	{
		
		$this->load->database();	
		$condition='';
		$query = 	"SELECT * FROM tbl_organization o WHERE 1=1 limit 0,4"; 
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
	/*added by ulkarsh*/
	function updateSiteVisitors($ip){
	
		$this->load->database();	
		
		$query="SELECT * FROM tbl_site_visitors where client_ip = '$ip'"; 
		$check = mysql_query($query); 
		if(mysql_num_rows($check)>0){
			$query ="UPDATE tbl_site_visitors SET int_views = int_views+1 WHERE client_ip='$ip'";
			mysql_query($query);  			
		}else {
			$query ="INSERT INTO  tbl_site_visitors(client_ip,int_views) VALUES('$ip',1)"; 
			mysql_query($query);		
		}
	}
	
}