/******************************Form Validation Script *******************************************/
/******To Validate Form Inputs Using This Script, Add Attribute 'validate' To Each Element ******/

$(document).ready(function () {
	$('.backto').bind('click',function(){	 
		 history.back(1);	
	});
	$('.goback').bind('click',function(){
		var page = $(this).attr('data');
		var base_url = $('#base-url').val();
		location.href=base_url+"/"+page;
	
	});
	$('#password').bind("keyup",function(e) {
		 var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		 var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		 var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		 $("#confirm-password_msg").html('');
		 if (false == enoughRegex.test($(this).val())) {
				 $('#passstrength').html('Minimum 6 Character');
				 $('#passwordstrength').val('0');
		 } else if (strongRegex.test($(this).val())) {
				 $('#passstrength').removeClass('red-text');
				 $('#passstrength').removeClass('blue-text');
				 $('#passstrength').addClass('green-text');
				 $('#passstrength').html('Strong!');
				 $('#passwordstrength').val('1');
		 } else if (mediumRegex.test($(this).val())) {
				 $('#passstrength').removeClass('green-text');
				 $('#passstrength').removeClass('red-text');
				 $('#passstrength').addClass('blue-text');
				 $('#passstrength').html('Medium!');
				 $('#passwordstrength').val('1');
		 } else {
				 $('#passstrength').removeClass('green-text');
				 $('#passstrength').removeClass('blue-text');
				 $('#passstrength').addClass('red-text');
				 $('#passstrength').html('Weak!');
				 $('#passwordstrength').val('0');
		 }
		 return true;
	});
   
   
	$( "#orga-id" ).bind('change',function() {
		var orgid = $( "#orga-id" ).val();
		var base_url = $('#base-url').val();
		$.ajax({
				type:"GET",
				url:base_url+"/user/checkadminuserexist/"+orgid+"",
					success: function(result) {
					if(result ==1){
						$('#field-enable-admin').hide();			
					}else{
						$('#field-enable-admin').show();
					}
				}
		});	
	});
   
});
confirmdelete = function()
{ 
	var c = confirm('Do you really want to delete this record?');
	if(c)return true;else return false;

}
validateForm=function(form){ 
	var passwordcheck =0;
	$(".help-inline").html('');
	var errorArray = []; 
	var i=0;		
	$('.input-popup').css('border','1px solid #ccc');
	$("#cr-error").html('');
	/************* Begin : All Input text validation*******************/
	$("#"+form+" input").each(function() {
		var IsValidate = $(this).attr('validate');
		var inputTitle = $(this).attr('title');
		var inputName  = this.name;
		var inputId  = this.id;
		var inputValue = $(this).val();
		$(this).removeClass('inputerror');
		if(inputId == 'confirm-password')
			passwordcheck =1;
		if(IsValidate){
			errorArray[i] =  [] ;
			if(inputValue.length < 1){
				errorArray[i][0]='This Field Is Required';
				errorArray[i][1]=inputId;
				errorArray[i][2]='1';
				i++;
			}
			else
			{
				switch(IsValidate){
					case 'numeric':
						if(isNaN(inputValue)){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not '+IsValidate;
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'email':
						if(!validateEmail(inputValue)){
								errorArray[i][0]='The value you entered in field '+inputTitle+' is not '+IsValidate;
								errorArray[i][1]=inputId;
								errorArray[i][2]='1';
								i++;
						}
						else{ 
								if($('#email_unique').length >0){
									var type = $('#email_unique').attr('usertype');
									isEmailUnique(inputValue,type)
									var isUnique = $('#email_unique').val();
									if(isUnique==1){
										errorArray[i][0]='The email you entered is already there for another user';
										errorArray[i][1]=inputId;
										errorArray[i][2]='1';
										i++;
									}
								}
							
						}
						break;
					case 'text':
						if(!(inputValue)){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not '+IsValidate;
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'phone':
						if(isNaN(inputValue) || inputValue.length < 10){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not valid';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'zip':
						if(inputValue.length < 5 || inputValue.length > 6){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not valid';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'cvv':
						if(inputValue.length < 3 || inputValue.length > 3){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not valid';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'MMYYYY':
						if(!ValidateMMYYYY(inputValue)){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not valid';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break; 
					case 'creditcard':
						if(inputValue.length < 16 || inputValue.length > 20){
							errorArray[i][0]='The value you entered in field '+inputTitle+' is not valid';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					case 'image':
						if(!inputValue || inputValue.length < 1){
							errorArray[i][0]='Please select  '+inputName+' image';
							errorArray[i][1]=inputId;
							errorArray[i][2]='1';
							i++;
							}
						break;
					default:
						break;
					}
				}
		}

	});
	/************* End : All Input text validation*******************/
	/************* Begin : Select Box Validation*******************/
	$("#"+form+" select").each(function() {
		var IsValidate = $(this).attr('validate');
		var inputTitle = $(this).attr('title');
		var inputName  = this.name;
		var inputId  = this.id;
		var inputValue = $(this).val();
		$(this).removeClass('inputerror');
		if(IsValidate){
			errorArray[i] =  [] ;
			if(inputValue.length < 1 || inputValue == 0 || inputValue == -1){
				errorArray[i][0]='Please Select Any Value For '+inputTitle;
				errorArray[i][1]=inputId;
				errorArray[i][2]='1';
				i++;
			}
		}

	});
	/************* End : Select Box Validation*******************/
	/************* Begin : Textarea  Validation*******************/
	$("#"+form+" textarea").each(function() {
		var IsValidate = $(this).attr('validate');
		var inputTitle = $(this).attr('title');
		var inputName  = this.name;
		var inputId  = this.id;
		var inputValue = $(this).val();
		inputValue = inputValue.trim();
		$(this).removeClass('textareaerror');
		if(IsValidate){
			errorArray[i] =  [] ;
			if(inputValue.length < 1){
				errorArray[i][0]='Please Enter Text For '+inputTitle;
				errorArray[i][1]=inputId;
				errorArray[i][2]='3';
				i++;
			}
		}

	});
	/************* End : Select Box Validation*******************/
	var result = true;
	if(errorArray.length == 0 ){		
		result = true;
	}
	else{  
		for(var j=0;j<errorArray.length;j++)
		{		
			if(errorArray[j].length > 0){
				result = false;
				var errorDiv = "<div class='err_input' id='err_"+errorArray[j][1]+"'><div class='error-left'></div><div class='error-inner' id='error_"+errorArray[j][1]+"'></div></div>";
			 
				if($("#td_"+errorArray[j][1]).length > 0){  
					$("#"+errorArray[j][1]+"_msg").html(errorArray[j][0]);
					if((errorArray[j][2]==1))
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==2)
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==3)
					$("#"+errorArray[j][1]).addClass('textareaerror');
				}else if($("#"+errorArray[j][1]+"_msg").length > 0){ 			 
					$("#"+errorArray[j][1]+"_msg").html(errorArray[j][0]);
					if((errorArray[j][2]==1))
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==2)
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==3)
					$("#"+errorArray[j][1]).addClass('textareaerror');
				}else if($("#"+errorArray[j][1]).length > 0){ 			 
					$("#"+errorArray[j][1]).css('border','1px solid red');
				}
			}
				
		}
		if(passwordcheck ==1){
			var password1 = $('#password').val();
			var password2 = $('#confirm-password').val();
			var PasswordStrength =  $('#passwordstrength').val();
			var PasswordStrength =  PasswordStrength.trim();
			
			if( password1 != password2){
				$("#confirm-password_msg").html('Entered passwords are not same');
				return false; 
			}else if(PasswordStrength == 0){
				$("#confirm-password_msg").html('Entered passwords are weak');
				return false;
			}
		}
		//return false;
	} 
	if(result){
		$("#btn"+form).attr('disabled', 'disabled');
		$("#validate").val(1);
		
		return true;
	}else{
		$( "#"+errorArray[0][1] ).focus();
		if($("#cr-error").length> 0){
			$("#cr-error").html('Please correct the fields');
		}
		return false;
	}
}

validateEmail=function(email){
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}


function isEmailUnique(inputValue,type){
	var base_url = $('#base-url').val();
	$.ajax({
			type:"GET",
			async:false,
			url:base_url+"/user/checkemailunique/"+inputValue+"/"+type,
				success: function(result) {
				if(result == 1){ 
					$('#email_unique').val(1);		
				}else{
					$('#email_unique').val(0);	
				}
			}
	});	
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

function accepttnc(){
	if($('#tnc :checked').length > 0){
		return true;
	}else{
		$("#cr-error").html('Accept Terms & Conditions before proceding payment');
		return false;
	}
}

function validateCreditCard(CCNo,Type){
	switch(Type){
		case 'AMERICANEXPRESS':
			var validExp = /^(?:3[47][0-9]{13})$/;  
			break;
		case 'VISA':
			var validExp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/; 
			break;
		case 'MASTERCARD':
			var validExp =  /^(?:5[1-5][0-9]{14})$/;  
			break;
		case 'DISCOVER':
			var validExp = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 	
			break;
		default:
			break;
		} 
		if(CCNo.match(validExp)) 
			return true;  
		else 
			return false;   
	
}
function ValidateMMYYYY(Value){
	var month =  Value.substring(0,2); 
	var year =  Value.substring(2,6);
	var d = new Date();
	var currentYear = d.getFullYear(); 	
	if(isNaN(Value)){alert(1);
		return false;	
	}else if(month < 0||month > 12)	{alert(2);
		return false;
	}else if(year <= currentYear){alert(3);
		return false; 
	}else {
		return true;
	}
	
}

function ValidatePhone(Value){ 
	
	if(!isNaN(Value) && Value.length==10) 
		return true;  
	else 
		return false;   
	
}
function ValidateCCV(Value){ ; 
	if(!isNaN(Value) && Value.length==3) 
		return true;  
	else 
		return false; 
}
function validateDonateForm(form){
	var ExpiryDate = $('#str_expire_on').val();
	var CCNo = $('#str_credit_card_no').val();
	var CCVNo = $('#str_cvv').val();
	var Phone = $('#cr-phone').val();
	var Email = $('#cr-email').val();
	var Amount = $('#cr-amount').val();
	var Type = $('#cr-str_cc_type').val();
	var errorMsg = '';
	var result =true;
	var errorArray = []; 
	var i=0;	
	$('.input-popup').css('border','1px solid #ccc');
	$("#"+form+" input").each(function() {
		var IsValidate = $(this).attr('validate');
		
		var inputId  = this.id;
		var inputValue = $(this).val();
		inputValue = inputValue.trim();
		$(this).removeClass('inputerror');
		if(IsValidate){
			errorArray[i] =  [] ;
			if(inputValue.length < 1){
				errorArray[i][0]='This Field Is Required';
				errorArray[i][1]=inputId;
				errorArray[i][2]='1';
				i++;
			}
		}
	});	
	var result = true;
	if(errorArray.length == 0 ){		
		result = true;
	}
	else{  
		for(var j=0;j<errorArray.length;j++)
		{		
			if(errorArray[j].length > 0){
				result = false;
				if($("#"+errorArray[j][1]).length > 0){ 			 
					$("#"+errorArray[j][1]).css('border','1px solid red');
				} 
			}
				
		}
	} 
	if(!result){
	
	}else{	
		result =true;
		if(!ValidatePhone(Phone)){ 
			$("#cr-error").html('The Phone Number is not valid');
			$('#cr-phone').css('border','1px solid red');
			return false;
		}
		if(!validateEmail(Email)){ 
			$("#cr-error").html('The Email is not valid');
			$('#cr-email').css('border','1px solid red');
			return false;
		}
		if(isNaN(Amount)){ 
			$("#cr-error").html('The Amount is not valid');
			$('#cr-amount').css('border','1px solid red');
			return false;
		}
		if(!validateCreditCard(CCNo,Type)){ 
			$("#cr-error").html('The Credit Card Number is not valid');
			$('#str_credit_card_no').css('border','1px solid red');
			return false;
		}
		if(!ValidateCCV(CCVNo)){ 
			$("#cr-error").html('The CCV No is not valid');
			$('#str_cvv').css('border','1px solid red');
			return false;
		}
		if(!ValidateMMYYYY(ExpiryDate)){ 
			$("#cr-error").html('The Expiry Date is not valid');
			$('#str_expire_on').css('border','1px solid red');
			return false;
		} 
		if($('#tnc:checked').length < 1){
			$("#cr-error").html('Accept Terms & Conditions before proceding payment');
			return false; 
		} 
		return true;
	}                                                                                                          
	
}