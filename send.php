<?php
// Файлы phpmailer
require 'templates/phpmailer/PHPMailer.php';
require 'templates/phpmailer/SMTP.php';
require 'templates/phpmailer/Exception.php';

// в зависимости от пришедшей формы формируем сообщение:
if(isset($_POST['email'])) {
  $email = $_POST['email'];

  $title = "Новая подписка на Best Tour Plan";
  $body = "
  <h2>Новая подписка</h2>
  <b>Email:</b> $email
  ";
} elseif (isset($_POST['name'])){
  // Переменные, которые отправляет пользователь
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  // Формирование самого письма
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
  ";
} else {
  $name = $_POST['name-modal'];
  $phone = $_POST['phone-modal'];
  $email = $_POST['email-modal'];
  $message = $_POST['message-modal'];
  // Формирование самого письма
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', ''); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');