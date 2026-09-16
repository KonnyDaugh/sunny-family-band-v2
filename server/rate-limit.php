<?php

declare(strict_types=1);

function reserveBookingAttempt(string $ip): int
{
    $file = fopen(__DIR__ . '/storage/booking-rate.json', 'c+');

    if ($file === false) {
        throw new RuntimeException('Cannot open rate-limit storage.');
    }

    try {
        if (!flock($file, LOCK_EX)) {
            throw new RuntimeException('Cannot lock rate-limit storage.');
        }

        $contents = stream_get_contents($file);

        if ($contents === false) {
            throw new RuntimeException('Cannot read rate-limit storage.');
        }

        $records = $contents === ''
            ? []
            : json_decode($contents, true, 512, JSON_THROW_ON_ERROR);

        if (!is_array($records)) {
            throw new RuntimeException('Invalid rate-limit storage.');
        }

        $now = time();
        $client = hash('sha256', $ip);
        $recent = [];
        $retryAfter = 0;

        foreach ($records as $record) {
            if (
                !is_array($record) ||
                !isset($record['time'], $record['client']) ||
                !is_int($record['time']) ||
                !is_string($record['client'])
            ) {
                throw new RuntimeException('Invalid rate-limit record.');
            }

            if ($record['time'] <= $now - 3600) {
                continue;
            }

            $recent[] = $record;

            if ($record['client'] === $client) {
                $retryAfter = max(
                    $retryAfter,
                    $record['time'] + 60 - $now
                );
            }
        }

        if (count($recent) >= 30) {
            $oldest = min(array_column($recent, 'time'));
            $retryAfter = max($retryAfter, $oldest + 3600 - $now);
        }

        if ($retryAfter > 0) {
            return $retryAfter;
        }

        $recent[] = [
            'time' => $now,
            'client' => $client,
        ];

        $json = json_encode($recent, JSON_THROW_ON_ERROR);

        if (!rewind($file) || !ftruncate($file, 0)) {
            throw new RuntimeException('Cannot prepare rate-limit storage.');
        }

        if (fwrite($file, $json) !== strlen($json) || !fflush($file)) {
            throw new RuntimeException('Cannot save rate-limit storage.');
        }

        return 0;
    } finally {
        fclose($file);
    }
}