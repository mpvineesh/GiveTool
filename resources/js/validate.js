/******************************Form Validation Script *******************************************/
/******To Validate Form Inputs Using This Script, Add Attribute 'validate' To Each Element ******/

$(document).ready(function () {
	$('.goback').live('click',function(){
	 
		 history.back(1);
	
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
				if($("#td_"+errorArray[j][1])){ 
					 
					$("#"+errorArray[j][1]+"_msg").html(errorArray[j][0]);
					if((errorArray[j][2]==1))
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==2)
					$("#"+errorArray[j][1]).addClass('inputerror');
					else if(errorArray[j][2]==3)
					$("#"+errorArray[j][1]).addClass('textareaerror');
				}
			}
				
		}
		if(passwordcheck ==1){
			var password1 = $('#password').val();
			var password2 = $('#confirm-password').val();
			if( password1 != password2){
				$("#confirm-password_msg").html('Entered passwords are not same');
				return false;
			}
		}
		//return false;
	}
	if(result){
		$("#btn"+form).attr('disabled', 'disabled');
		return true;
	}else{
		$( "#"+errorArray[0][1] ).focus();
		return false;
	}
}

validateEmail=function(email){
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}





$('#password').live("keyup",function(e) {
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