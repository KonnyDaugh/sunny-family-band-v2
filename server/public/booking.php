<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, string $message): never
{
    http_response_code($status);

    echo json_encode([
        'ok' => $status === 200,
        'message' => $message,
    ]);

    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, 'Please submit the enquiry form.');
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    respond(413, 'Your enquiry is too large.');
}

$website = $_POST['website'] ?? '';

if (!is_string($website) || trim($website) !== '') {
    respond(422, 'Unable to process this enquiry.');
}

$limits = [
    'name' => 100,
    'email' => 254,
    'date' => 10,
    'location' => 200,
    'program' => 50,
    'message' => 3000,
];

$booking = [];

foreach ($limits as $field => $limit) {
    $value = $_POST[$field] ?? '';

    if (!is_string($value)) {
        respond(422, 'Please check the form fields.');
    }

    $value = trim($value);

    if (preg_match('//u', $value) !== 1) {
        respond(422, 'Please check the text in your enquiry.');
    }

    // Allow up to four bytes per Unicode character.
    if (strlen($value) > $limit * 4) {
        respond(422, 'One of the fields is too long.');
    }

    $booking[$field] = $value;
}

if ($booking['name'] === '') {
    respond(422, 'Please enter your name.');
}

if (
    strlen($booking['email']) > 254 ||
    !filter_var($booking['email'], FILTER_VALIDATE_EMAIL)
) {
    respond(422, 'Please enter a valid email address.');
}

if (preg_match('/[\r\n\x00]/', $booking['name'] . $booking['email'])) {
    respond(422, 'Please check your name and email.');
}

if ($booking['date'] !== '') {
    $date = DateTimeImmutable::createFromFormat(
        '!Y-m-d',
        $booking['date'],
        new DateTimeZone('Europe/Zagreb')
    );

    if (!$date || $date->format('Y-m-d') !== $booking['date']) {
        respond(422, 'Please enter a valid event date.');
    }

    $today = new DateTimeImmutable(
        'today',
        new DateTimeZone('Europe/Zagreb')
    );

    if ($date < $today) {
        respond(422, 'Please choose today or a future date.');
    }
}

$programs = [
    '' => 'Help me choose',
    'full-band' => 'Sunny Family Band',
    'solo-saxophone' => 'Solo Saxophone',
    'lounge-vocals' => 'Lounge Vocals',
];

if (!array_key_exists($booking['program'], $programs)) {
    respond(422, 'Please choose a format from the list.');
}

$booking['program'] = $programs[$booking['program']];

try {
    require_once dirname(__DIR__) . '/rate-limit.php';

    $retryAfter = reserveBookingAttempt(
        $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    );
} catch (Throwable $error) {
    error_log('Booking rate-limit storage failed.');

    respond(
        503,
        'The enquiry form is temporarily unavailable. Please try again later.'
    );
}

if ($retryAfter > 0) {
    header('Retry-After: ' . $retryAfter);

    respond(
        429,
        "Please wait {$retryAfter} seconds before sending another enquiry."
    );
}

try {
    require_once dirname(__DIR__) . '/send-booking.php';

    sendBookingEmail($booking);

    respond(200, 'Thank you! Your enquiry has been sent.');
} catch (Throwable $error) {
    error_log('Booking email delivery failed.');

    respond(
        500,
        'We couldn’t send your enquiry. Please try again later.'
    );
}