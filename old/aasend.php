<?php
/* Set e-mail recipient */
//$myemail  = "gil@soulbounds.com";/*gil@soulbounds.com*/
$myemail  = "radhikadadhaniya.cnc@gmail.com";

/* Check all form inputs using check_input function */

$yourname = $_REQUEST['name'];
$phone  = $_REQUEST['phone'];
$email  = $_REQUEST['email'];
$message  = $_REQUEST['message'];


$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=utf-8" . "\r\n";
$headers .= 'From: noreplay@coreandcode.co.il';

$message .= "Hello!\r\n";

$message .="Your form has been submitted by:\r\n <br />";
$message = '<html style="direction:rtl;"><body style="direction:rtl";>';
$message .="שם: $yourname\r\n <br />";
/*$message .="phone: $phone\r\n <br />";*/
$message .="טלפון: $phone\r\n <br />";
$message .="דואר אלקטורני: $email\r\n <br />";
$message .="הודעה: $message\r\n <br />";
$message .= "</body></html>";



/* Send the message using mail() function */
if(isset($_POST['url']) && $_POST['url'] == ''){
    if($_POST["phone"] == "" || $_POST["name"] == ""){
        echo "<p>Please press the back button and fill in all fields</p>";
    } else {
        mail($myemail, "NewQuery", $message, $headers);
    }
}
/*require("thankyou.html"); */

?>