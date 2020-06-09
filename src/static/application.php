<?

    $name  =  $_POST['name'];   
	$telephone =  $_POST['telephone'];
    // $admin_email = 'matveev.rusaniv@gmail.com';
    $admin_email = 'mr.andrey@bigmir.net';
	
	$subject = 'Нова заявка Rusaniv Residence';
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8; boundary='first'\r\n";
    $message .= "<h1>Нова заявка</h1>";
    $message .= "<p>Ім'я: ".$name."</p>";
	$message .= '<p>Телефон: '.$telephone;
	if (mail($admin_email, $subject, $message, $headers)) {
        echo '11';
    } else {
        echo 'fail';
        // echo $message;
    }


?>