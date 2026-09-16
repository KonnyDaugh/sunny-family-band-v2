<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

require_once __DIR__ . '/vendor/autoload.php';

function sendBookingEmail(array $booking): void
{
    $config = require __DIR__ . '/config.local.php';

    $mail = new PHPMailer(true);

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

    $mail->addReplyTo(
        $booking['email'],
        $booking['name']
    );

    $mail->isHTML(false);
    $mail->Subject = 'New enquiry — Sunny Family Band';

    $mail->Body = implode("\n", [
        'New booking enquiry',
        '',
        'Name: ' . $booking['name'],
        'Email: ' . $booking['email'],
        'Date: ' . ($booking['date'] ?: 'Not decided yet'),
        'Venue or city: ' . ($booking['location'] ?: 'Not specified'),
        'Format: ' . $booking['program'],
        '',
        'Message:',
        $booking['message'] ?: 'No additional message',
    ]);

    $mail->send();
}