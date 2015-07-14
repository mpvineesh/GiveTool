// JavaScript Document


$(document).ready(function () {
	$('#changepassword').bind('click',function(){
		var currentpassword = $('#currentpassword').val();
		var newpassword = $('#newpassword').val();
		var retypepassword = $('#retypepassword').val();
		var int_user_id = $('#int_user_id_hidden').val();
		var base_url = $('#base-url').val();
		if(newpassword  == '' ||  retypepassword == '' ||  currentpassword == ''){
			$('#changepassword-error').html('Fill all fields');
			$('#changepassword-error').show();
		}else if(newpassword != retypepassword){
			$('#changepassword-error').html('Password and Retype Password does not match');
			$('#changepassword-error').show();
		}else{			
			$.ajax({
					type:"GET",
					url:base_url+"/user/changepassword/"+int_user_id+"/"+newpassword+"/"+currentpassword+"",
						success: function(msg) {
						$('#changepassword-error').html(msg);
						$('#changepassword-error').show();
					}
			});	
			
		
		}
	
	});
   
});



	/*var CheckinDate=$('#CheckInDate').val();
	var CheckoutDate=$('#CheckOutDate').val();
	var today=new Date();
	var option=$('#AvailableRoomNo:seleected').val();
	if(CheckinDate == "" || CheckoutDate == ""){
		alert("Please Select CheckIn Date and Checkout Date ");
		return false;
	}
	else{
		var diff=DateDiff(CheckinDate, CheckoutDate);
		if(diff == "T"){
		alert("Selected Dates must be after today");
		return false;
		}
		else if(diff < 0)
		{
		alert("CheckIn Date Must be earlier than checkout date");
		return false;
		}
		else if((diff+1) != noofdays)
		{
		alert("Number Of Days Must be equal to Checkin/Checkout Date Duration");
		return false;
		}
		//var NoDays=$("[name=NoOfDays]").val();
		$.ajax({
		  type:"GET",
		  url:"index.php?pid=41&roomid="+option+"&checkindate="+CheckinDate+"&checkoutdate="+CheckoutDate+"",
		  //data: "sales_price=55000&interestRate=5.99",
		  cache:false,
		  success: function(msg) {
			if(msg == 0){
			alert("This Room Is Not Available for the selected Date Range");
			return false;
			}
		  }
		});	
	}*/
	