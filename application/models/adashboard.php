<?php

class Adashboard extends CI_Model {
		
	/* 	Author: Ulkarsh
		Version: 1.00
		Description: Newly added for Admin Dashboard*/	
	
	function getTotalUsers()
	{
		$adminId = 1;
		$this->load->database();
		$this->db->where('int_user_type_id !=', $adminId);
		$this->db->from('tbl_user');
		return $this->db->count_all_results();	
	}
	
	function getAllOrganizations()
	{
		$this->load->database();
		$this->db->select('int_organization_id,str_name');		
		$query=$this->db->get('tbl_organization');	
		$row = $query->result();		
		return $row;
	}
		
	function getTotalOrg()
	{		
		$this->load->database();		
		return $this->db->count_all('tbl_organization');	
	}

	function getTotalEvents()
	{		
		$this->load->database();		
		return $this->db->count_all('tbl_event');	
	}

	function getTotalDonationAmount()
	{		
		$this->load->database();
		$this->db->select_sum('flt_amount');		
		$query = $this->db->get('tbl_donation'); 	
		$row = $query->row();		
		return $row;
	}

	function getTotalDonationByMonthAndYear($month,$year)
	{
		$startDate = $this->createDateString($month,$year,1);
		$endDate = $this->createDateString($month,$year,2);
		$this->load->database();
		$this->db->select_sum('flt_amount');		
		$query = $this->db->get_where('tbl_donation',array('date >=' => $startDate,'date <=' => $endDate)); 	
		$row = $query->row();		
		return $row;
	}
	
	function createDateString($month,$year,$id1)
	{	
		$date = '0000-00-00';
		$id = $id1;
		$thirtyOneMonths =array('1','3','5','7','8','10','12');
		$thirtyMonths =array('4','6','9','11');
		if($id==2 && in_array($month,$thirtyOneMonths))
		{
			$date = $year.'-'.$month.'-31';
		}
		else if($id==2 && in_array($month,$thirtyMonths))
		{
			$date = $year.'-'.$month.'-30';
		}
		else if($id==2 && $month==2)
		{
			$date = $year.'-'.$month.'-28';
		}
		else if($id==1)
		{
			$date = $year.'-'.$month.'-01';
		}
		return $date;
	}
	
	function get_Organization_donation_summary($orgID)
	{
		$this->load->database();		
		$this->db->select_sum('tbl_donation.flt_amount');					
		$this->db->join('tbl_event AS e', 'e.int_event_id = tbl_donation.int_event_id'); 		
		$query = $this->db->get_where('tbl_donation',array('e.int_organization_id'=>$orgID));
		return $query->row();         	
	}
	
	function getWeeklyNewUsersAdded()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
			
		$adminId = 1;
		$this->load->database();
		//$this->db->get_where('tbl_user',array('int_user_id !=' => $adminId, 'date_created >=' => $week_start,'date_created <=' => $week_end));		
		$this->db->where(array('int_user_type_id !=' => $adminId, 'date_created >=' => $week_start,'date_created <=' => $week_end));
		$this->db->from('tbl_user');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	function getWeeklyNewOrganizationsAdded()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
		
		$this->load->database();		
		$this->db->where(array('date_added >=' => $week_start,'date_added <=' => $week_end));
		$this->db->from('tbl_organization');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	function getWeeklyNewDonorsAdded()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
	
		$this->load->database();		
		$this->db->where(array('date_created >=' => $week_start,'date_created <=' => $week_end));
		$this->db->from('tbl_donor');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	
	function getWeeklyNumberOfDonations()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
				
		$this->load->database();		
		$this->db->where(array('date >=' => $week_start,'date <=' => $week_end));
		$this->db->from('tbl_donation');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	function getWeeklyTotalDonationAmount()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
			
		$this->load->database();
		$this->db->select_sum('flt_amount');		
		$query = $this->db->get_where('tbl_donation',array('date >=' => $week_start,'date <=' => $week_end)); 	
		$row = $query->row();		
		return $row;		
	}
	
	function getWeeklyNewEvents()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
				
		$this->load->database();		
		$this->db->where(array('date_created >=' => $week_start,'date_created <=' => $week_end));
		$this->db->from('tbl_event');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	function getThisWeeksEvents()
	{
		date_default_timezone_set('UTC');
		$date = new DateTime();
		$week = $date->format("W");
		$year = $date->format("Y");
		$week_array = $this->getStartAndEndDate($week, $year);
		$week_start = $week_array['week_start'];
		$week_end = $week_array['week_end'];
				
		$this->load->database();		
		$this->db->where(array('start_date >=' => $week_start,'start_date <=' => $week_end));
		$this->db->from('tbl_event');	
		$num_results = $this->db->count_all_results();
		return $num_results;	
	}
	
	
	function getStartAndEndDate($week, $year) {
		$dto = new DateTime();
		$dto->setISODate($year, $week);
		$ret['week_start'] = $dto->format('Y-m-d');
		$dto->modify('+6 days');
		$ret['week_end'] = $dto->format('Y-m-d');
		return $ret;
	}
	
	function getRecentActivity()
	{
		date_default_timezone_set('UTC');
		$start_date=date_sub(new DateTime(),date_interval_create_from_date_string("10 days"));
		$end_date = date_format(new DateTime(),"Y-m-d");
		$start_date = date_format($start_date,"Y-m-d");		
		
		$this->load->database();		
		$this->db->select('1 as act_id, "New Donation" as Activity_Name,d.str_fname as Name1,d.str_lname as Name2,tbl_donation.flt_amount as Amount,e.str_name AS event_name,tbl_donation.date AS date',false);		
		$this->db->join('tbl_event AS e', 'e.int_event_id = tbl_donation.int_event_id'); 		
		$this->db->join('tbl_donor AS d', 'd.int_user_id = tbl_donation.int_user_id');		
		$query = $this->db->get_where('tbl_donation',array('tbl_donation.date >=' => $start_date,'tbl_donation.date <=' => $end_date));
		$row =  $query->result();
		$this->db->select('2 as act_id, "New Event" as Activity_Name,"" as Name1,e.str_name AS Name2,"" as Amount,tbl_organization.str_name AS org_name,e.date_created AS date',false);		
		$this->db->join('tbl_event AS e', 'e.int_organization_id = tbl_organization.int_organization_id'); 					
		$query = $this->db->get_where('tbl_organization',array('e.date_created >=' => $start_date,'e.date_created <=' => $end_date));
		$row1 =  $query->result();	
		$obj_merged = (object) array_merge((array) $row, (array) $row1);
		return $obj_merged;
	}
	 function getTotalSiteHits()
	 {
		$this->load->database();
		$this->db->select_sum('int_views');		
		$query = $this->db->get('tbl_site_visitors'); 	
		$row = $query->row();		
		return $row;
	 }
	 
	 function getDistinctSiteHits()
	 {
		$this->load->database();
		$this->db->get('tbl_site_visitors');
		return $this->db->count_all_results();	
	 }	
	 
	 function getTotalEventHits()
	 {
		$this->load->database();
		$this->db->select_sum('int_views');		
		$query = $this->db->get('tbl_event'); 	
		$row = $query->row();		
		return $row;
	 }
	 
	 function getDistinctEventHits()
	 {
		$this->load->database();
		$this->db->get('tbl_client_ip');
		return $this->db->count_all_results();	
	 }	
	/*Author Ulkarsh - New addition ends*/	
}