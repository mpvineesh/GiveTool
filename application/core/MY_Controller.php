<?php
class MY_Controller extends CI_Controller 
{
    public function checklogin() 
    {    
		$CI =& get_instance(); 
		$url = $CI->config->config['base_site_url']; 
        if(!$this->session->userdata("loggedin")) {
            	header('Location:'.$url); 
        }
    }
	public function encrypt_text($str_string) {	
		
			# --- ENCRYPTION ---

			# key is specified using hexadecimal
			$key = pack('H*', "bcb04b7e103a0cd8b54763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
			
			# show key size use either 16, 24 or 32 byte keys for AES-128, 192 and 256 respectively
			
			$plaintext = $str_string;

			# create a random IV to use with CBC encoding
			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
			$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
			
			# creates a cipher text compatible with AES (Rijndael block size = 128)
			# to keep the text confidential only suitable for encoded input that never ends with value 00h (because of default zero padding)
			$ciphertext = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $plaintext, MCRYPT_MODE_CBC, $iv);

			# prepend the IV for it to be available for decryption
			$ciphertext = $iv . $ciphertext;
			
			# encode the resulting cipher text so it can be represented by a string
			$ciphertext_base64 = base64_encode($ciphertext);

			return   $ciphertext_base64;
     
	}
	public function decrypt_text($str_string) {			
		
			# --- DECRYPTION ---
			# key is specified using hexadecimal
			$key = pack('H*', "bcb04b7e103a0cd8b54763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
			
			# show key size use either 16, 24 or 32 byte keys for AES-128, 192 and 256 respectively
			# create a random IV to use with CBC encoding
			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
 
			$ciphertext_dec = base64_decode($str_string);
			
			# retrieves the IV, iv_size should be created using mcrypt_get_iv_size()
			$iv_dec = substr($ciphertext_dec, 0, $iv_size);
			
			# retrieves the cipher text (everything except the $iv_size in the front)
			$ciphertext_dec = substr($ciphertext_dec, $iv_size);
			# may remove 00h valued characters from end of plain text
			$plaintext_dec = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key,$ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);
			return  $plaintext_dec;
     
	}

	//send mail
	public	function sendEmail($from,$sender,$to,$subject,$message)
	{
		$this->load->library('email'); // load email library
		$this->email->from($from, $sender);
		$this->email->to($to);
		// $this->email->cc('test2@gmail.com'); 
		$this->email->subject($subject);
		$this->email->message($message);
		// $this->email->attach('/path/to/file1.png'); // attach file
		// $this->email->attach('/path/to/file2.pdf');
		if ($this->email->send())
			return true;
		else
			return false;
	}
	public	function sendHTMLEmail($sendername,$to,$subject,$line1,$line2,$line3,$line4)
	{
		$CI =& get_instance(); 	
		$resource_path = $CI->config->config['resource_path'];
		$from = 'admin@quitegiant.com';
		$template = '<html>
					<head>
					<title>Profile Confirmation</title>
					</head>
					<body style="margin: 0; padding: 0; background: #eeeff1;">
						<table cellpadding="0" cellspacing="0" width="650" border="0" align="center" bgcolor="#ffffff">
							<tr>
								<td style="padding: 10px;">
									<table cellpadding="0" cellspacing="0" width="100%" border="0" style="font-family: Segoe, \'Segoe UI\', \'DejaVu Sans\', \'Trebuchet MS\', Verdana, sans-serif; color: #505050; font-size: 14px;">
										<tr><td style="font-size: 10px;">&nbsp;</td></tr>
										<tr><td align="center"><img src="'.$resource_path.'/img/banner-2.jpg" width="612" height="226" />	</td></tr>
										<tr><td style="font-size: 20px;">&nbsp;</td></tr>
										<tr><td style="padding: 0 8px 8px 8px;">Dear <strong>ToName,</strong></td></tr>
										<tr><td style="padding: 0 8px 8px 8px;">MailContentLine1</td></tr>
										<tr><td style="font-size: 10px;">&nbsp;</td></tr>
										<tr>
											<td style="padding: 0 8px 8px 8px;">MailContentLine2</td>
										</tr>
										<tr><td style="padding: 0 8px 8px 8px;">MailContentLine3</td>	</tr>
										<tr>
											<td style="padding: 0 8px 0 8px;">
												MailContentLine4
											</td>
										</tr>
										<tr><td style="font-size: 15px;">&nbsp;</td></tr>
										<tr><td style="padding: 0 8px 0 8px;">Thanks</td></tr>
										<tr><td style="padding: 0 8px 0 8px;">QuiteGiant</td></tr>
										<tr><td style="font-size: 20px;">&nbsp;</td></tr>
										<tr><td style="padding: 10px 0 5px; font-size: 12px; color: #909090;" align="center">You received this message because you are a member of QuiteGiant.</td></tr>
										<tr><td style="font-size: 12px;" align="center">Team QuiteGiant</td></tr>
									</table>
								</td>
							</tr>
						</table>
					</body>
					</html>
					';
		$name = $sendername;
		$template = str_replace('ToName',$name ,$template);
		$template = str_replace('MailContentLine1',$line1,$template);
		$template = str_replace('MailContentLine2',$line2,$template);
		$template = str_replace('MailContentLine3',$line3,$template);
		$template = str_replace('MailContentLine4',$line4,$template);
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

		// More headers
		$headers .= 'From: <admin@quitegiant.com>' . "\r\n"; 
		$headers .= "Content-type: text/html";  
		mail($to, $subject, $template, $headers);
	}

}