<?php

class mLogin extends CI_Model {

	function getoffers()
	{
		$this->load->database();	
		
		$this->db->select('tbl_offer.*', FALSE);
		$this->db->select('c.str_name AS category', FALSE);
		$this->db->order_by("tbl_offer.date_created", "desc");
		$query = $this->db->join('tbl_category AS c', 'c.int_category_id = tbl_offer.int_category_id'); 
		$query = $this->db->get('tbl_offer');
		return $query->result();
		
		
	} 
	function checklogin($username,$password)
	{
		$this->load->database();
		
		
		/*$this->db->select('tbl_user.*', FALSE);
		$this->db->select('ut.int_user_type_id AS type', FALSE);
		$query = $this->db->join('tbl_user_type AS ut', 'ut.int_user_type_id = tbl_user.int_user_type_id'); 
		$query = $this->db->get('tbl_user');
		$query = $this->db->where('login', $username); 
		$query = $this->db->where('password', $password); 
		return $query->result();*/
		
		$this->db->select('*'); // Select field
		$this->db->from('tbl_user'); // from Table1
		$this->db->join('tbl_user_type','tbl_user.int_user_type_id = tbl_user_type.int_user_type_id','INNER'); // Join table1 with table2 based on the foreign key
		$this->db->where('tbl_user.str_login',$username); // Set Filter
		$this->db->where('tbl_user.str_password',$password); // Set Filter
		$res = $this->db->get();
		return $res->result();
		/*$query = $this->db->get('tbl_user');
		$this->db->where('login', $username); 
		$this->db->where('password', $password); 
		return $query->result();*/
	}
	function getuserbyemail($email)
	{
		$this->load->database();
		$this->db->select('*'); // Select field
		$this->db->from('tbl_user'); // from Table1
		$this->db->join('tbl_user_type','tbl_user.int_user_type_id = tbl_user_type.int_user_type_id','INNER'); // Join table1 with table2 based on the foreign key
		$this->db->join('tbl_merchant','tbl_merchant.int_user_id = tbl_user.int_user_id','LEFT'); // Join table1 with table2 based on the foreign key
		$this->db->where('tbl_merchant.str_email',$email); // Set Filter
		$res = $this->db->get();
		return $res->result();
	}
	function getmerchants()
	{
		$this->load->database();
		$query = $this->db->get('tbl_merchant');
		return $query->result();
	}
	function getoffer($int_offer_id)
	{
		$this->load->database();
		$this->db->where('tbl_offer.int_offer_id', $int_offer_id);
		$query = $this->db->get('tbl_offer');
		if( $query->num_rows() >0 ){
			$row = $query->row();
			return $row;
		
		}else{
			return 0;
		}
		 
	}  
	
	
	
}