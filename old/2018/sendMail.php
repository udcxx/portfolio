<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta http-equiv="refresh" content="3; URL=index.html"/>
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p:300,400,900&amp;subset=japanese" rel="stylesheet">
    <meta charset="utf-8">
  </head>
  <body>

      <?php

        $from = $_POST['user_mail'];
        $name = $_POST['user_name'];
        $msg = $_POST['user_message'];

        mb_language("japanese");
        mb_internal_encoding("UTF-8");

        $to = "me@udcxx.me";
        $subject = "ポートフォリオから問い合わせ";
        $body = "お名前＞＞".$name."\n\nE-mail＞＞".$from."\n \n内　容＞＞".$msg;
        $from = "send-only@udcxx.me";
        mb_send_mail($to,$subject,$body,"From:".$from);

       ?>

       <h1>お問い合わせいただき、ありがとうございました！</h1>
       <br />
       <p>3秒後に <a href="https://udcxx.me/index.html">ポートフォリオサイト</a> へ戻ります。</p>

  </body>
</html>
