/******************************Form Validation Script *******************************************/
/******To Validate Form Inputs Using This Script, Add Attribute 'validate' To Each Element ******/

$(document).ready(function () { 
	
	$('.pre-amount').bind('click',function(){
		$('#specify-amount').hide(); 
		var amount = $(this).attr('value');
		alert(amount);
		$('#specifiedamount').val(amount);  
	});
	$('#specifyamount').bind('click',function(){
		$('#specify-amount').show();	
	});
	 
	$('#password').bind("keyup",function(e) {
		 var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		 var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		 if (false == enoughRegex.test($(this).val())) {
				 $('#passstrength').html('Minimum 6 Character');
		 } else if (strongRegex.test($(this).val())) {
				 $('#passstrength').removeClass('red-text');
				 $('#passstrength').removeClass('blue-text');
				 $('#passstrength').addClass('green-text');
				 $('#passstrength').html('Strong!');
		 } else if (mediumRegex.test($(this).val())) {
				 $('#passstrength').removeClass('green-text');
				 $('#passstrength').removeClass('red-text');
				 $('#passstrength').addClass('blue-text');
				 $('#passstrength').html('Medium!');
		 } else {
				 $('#passstrength').removeClass('green-text');
				 $('#passstrength').removeClass('blue-text');
				 $('#passstrength').addClass('red-text');
				 $('#passstrength').html('Weak!');
		 }
		 return true;
	});
   
});
confirmdelete = function()
{ 
	var c = confirm('Do you really want to delete this record?');
	if(c)return true;else return false;

}
validatesearchfields=function(){ 
	var name=$('#event-name').val().trim();
	var keyword=$('#event-keyword').val().trim();
	var location=$('#location').val().trim();
	if(name == ''&& keyword==''&& location==''){
		alert('Enter some search criteria');
		return false;
	}
	return true;
	
}


validateEmail=function(email){
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}





function DateDiff( date1, date2 ) 
{ 
	//Get 1 day in milliseconds 
	var today=new Date();
	var today=today.setHours(0,0,0,0);	
	var x = date1.split("/");
	var date1=new Date(x[2],(x[1]-1),x[0]);
	var y = date2.split("/");	
	var date2=new Date(y[2],(y[1]-1),y[0]);
	if(today > date1 || today > date2){
	return "T";
	}
	var one_day=24*60*60*1000; // Convert both dates to milliseconds 
	var date1_ms = date1.getTime(); 
	var date2_ms = date2.getTime(); // Calculate the difference in milliseconds 
	var difference_ms = date2_ms - date1_ms; // Convert back to days and return 
	return Math.round(difference_ms/one_day); 
} 


function AddDaysToDate( date, days ) 
{ 
	//Get 1 day in milliseconds 
	//var today=new Date();
	//var today=today.setHours(0,0,0,0);
	var days=parseInt(days)-1;
	var x = date.split("-");
	var date=new Date(x[0],(x[1]-1),x[2]);
	var one_day=24*60*60*1000; // Convert both dates to milliseconds 
	var totaldays = one_day * days;
	var date_ms = date.getTime(); 
	var newdate = date_ms +  totaldays;
	var newdate = new Date(newdate);
	var date = newdate.getFullYear() + '-'+(parseInt(newdate.getMonth())+1) +'-'+newdate.getDate();
	return date; 
} 
function datevalidate(){
	var StartDate=$('#startdate').val();
	var EndDate=$('#enddate').val();
	var today=new Date();
	
	var diff=DateDiff(StartDate, EndDate); 
	if(diff == "T"){
		$('#startdate_msg').html("Selected Dates must be after today");
		return false;
	}
	else if(diff < 0)
	{ 
		$('#startdate_msg').html("Start Date Must be earlier than End Date");
		return false;
	}  
	return true;
}
function validateCreditCardDetails(){alert(1);

	$('.input-popup').css('border','1px solid #ccc');
	$('.input-popup').css('border','1px solid red');
	var FName=$('#cr-fname').val().trim();
	var LName=$('#cr-lname').val().trim();
	var Address=$('#cr-address').val().trim();
	var State=$('#cr-state').val().trim();
	var Zip=$('#cr-zip').val().trim();
	var City=$('#cr-city').val().trim();
	var str_name_on_card=$('#cr-str_name_on_card').val().trim();
	var str_credit_card_no=$('#cr-str_credit_card_no').val().trim();
	var expiry=$('#cr-str_expire_on').val().trim();
	var str_cvv=$('#cr-str_cvv').val().trim();
	var amount=$('#cr-amount').val().trim();
	var str_cc_type=$('#cr-str_cc_type').val();
	if(FName == "" || LName == "" || Address == "" || State == ""||State == ""||Zip == ""||City == ""||str_name_on_card == ""||str_credit_card_no == ""||expiry == ""||str_cvv == ""||amount == ""){
		$('#ccformerror').html("Fill all fields");
		return false;
	}
	
	return true;
}