<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/config.local.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];
    $mail->Timeout = 20;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom(
        $config['from_email'],
        $config['from_name']
    );

    $mail->addAddress($config['to_email']);

    $mail->Subject = 'Sunny Family Band — test email';
    $mail->Body = 'Отправка через Gmail SMTP работает!';

    $mail->send();

    echo "Тестовое письмо отправлено.\n";
} catch (\Throwable $error) {
    fwrite(
        STDERR,
        "Не удалось отправить письмо: {$mail->ErrorInfo}\n"
    );

    exit(1);
}