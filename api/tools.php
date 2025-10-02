<?php
require_once 'config.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);

use chillerlan\QRCode\{QRCode, QROptions};

function calculate($curr_from, $curr_to, $amount_from, $amount_to)
{
    $url = API_URL . 'calculate';
    $data = [
        'exchanger_id' => EXCHANGE_ID,
        'currency_from' => $curr_from,
        'currency_to' => $curr_to,
        'amount_from' => $amount_from,
        'amount_to' => $amount_to,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);

    // Выполняем запрос
    $response = curl_exec($ch);

    // Получаем информацию о запросе

    curl_close($ch);
    return json_decode($response, true);
}


function create($data)
{
    $url = API_URL . 'create_order';
    $user_ip = $_SERVER["HTTP_CF_CONNECTING_IP"] ??
    $_SERVER['HTTP_X_FORWARDED_FOR'] ??
    $_SERVER['HTTP_CLIENT_IP'] ??
    $_SERVER['REMOTE_ADDR'];

    if(strpos($user_ip, ',') !== false) {
    $ips = explode(',', $user_ip);
    $user_ip = trim($ips[0]);
    }
    $data = [
        'exchanger_id' => EXCHANGE_ID,
        'currency_from' => $data['currency_from'],
        'currency_to' => $data['currency_to'],
        'amount_from' => $data['amount_from'],
        'amount_to' => $data['amount_to'],
        'payment_info' => json_encode($data['payment_info']),
        'description' => json_encode($data['description']) ?? null,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive',
        'X-Forwarded-For: ' . $user_ip
    ]);
    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        throw new Exception('Ошибка cURL: ' . curl_error($ch));
    }




    return json_decode($response, true)['data'];
}

function generate_currencies($rates)
{

    $regex_data = get_regex_data();
    $rates = array_filter($rates, function ($rate) use ($exept_fiat_currencies) {

        return !in_array($rate['code'], $exept_fiat_currencies);
    });
    $data = [];
    foreach ($rates as $rate) {
        $formatted_currency = format_currency($rate['code'], $rate['network']);
        $data[] =
            [
                "currency"    => $formatted_currency,
                "image"       => strtolower($formatted_currency) . ".svg",
                "name"        => $rate['code'] . ' ' . $rate['network'],
                "regex"       => get_regex_data_by_code($formatted_currency, $regex_data)['regex'] ?? null,
                "reserve"     => 18461,
                "status"      => true,
                "status_give" => true,
                "status_take" => true,
                "type"        => "crypto",
                "id"          => $rate['id'],
                "min_receive" => get_min_amount_all()[$formatted_currency] ?? 0
            ];
    }

    return $data;
}
function get_order($id)
{
    $url = API_URL . 'get_order/' . $id;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}




function get_currencies()
{
    $currencies_json = file_get_contents(__DIR__ . '/currencies.json');
    $currencies_data = json_decode($currencies_json, true);

    if (isset($currencies_data['currencies'])) {
        return $currencies_data['currencies'];
    }

    return [];
}
function get_regex_data()
{
    $regex_json = file_get_contents(__DIR__ . '/regex_data.json');
    $regex_data = json_decode($regex_json, true);
    return $regex_data;
}
function get_regex_data_by_code($currency_code, $regex_data)
{
    foreach ($regex_data as $regex) {
        if ($regex['best_code'] === $currency_code) {
            return $regex;
        }
    }
    return null;
}
function validate_currency($currency_code, $address)
{
    $regex_json = file_get_contents(__DIR__ . '/regex_data.json');
    $regex_data = json_decode($regex_json, true);
    foreach ($regex_data as $regex) {
        if ($regex['best_code'] === $currency_code) {
            $regex_data = $regex;
            break;
        }
    }
    $regex = $regex_data['regex'];

    // Добавляем разделители к регулярному выражению
    $regex = '/' . str_replace('/', '\/', $regex) . '/';

    if (preg_match($regex, $address)) {
        return true;
    }
    return false;
}
function get_min_amount_all()
{
    $url = API_URL . 'get_min_amount_all/' . EXCHANGE_ID;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}
function get_currency_full($currency_code)
{

    $currencies = get_currencies();

    $currency_code = strtolower($currency_code);
    foreach ($currencies as $currency) {

        if ($currency['legacyTicker'] === $currency_code) {
            return $currency;
        }
    }
    return null;
}


function change_status($id, $status)
{
    $url = API_URL . 'change_order_status/' . $id;
    $data = [
        'status' => $status
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}
function format_status($status)
{
    switch ($status) {
        case 'created':
            return 'waiting';
        case 'processing':
            return 'processing';
        case 'paid':
            return 'paid';
        case 'completed':
            return 'success';
        case 'suspended':
            return 'stoped';
        case 'deleted':
            return 'rejected_time';
    }
}


function get_rate_by_id($id, $rates)
{
    foreach ($rates as $rate) {
        if ($rate['id'] == $id) {
            return $rate;
        }
    }
    return null;
}
function get_rates($rates)
{
    $url = API_URL . '/rates/get';
    $data = [
        'rates' => $rates
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}


function format_currency($currency, $network)
{
    // Список поддерживаемых стейблкоинов
    $currency = strtoupper($currency);
    $stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI', 'TUSD'];

    // Список поддерживаемых сетей с их суффиксами
    $networks = [
        'trx' => 'TRC20',
        'eth' => 'ERC20',
        'bsc' => 'BSC',
        'sol' => 'SOL',
        'arb' => 'ARB',
        'matic' => 'MATIC',
        'avax' => 'AVAX',
        'op' => 'OP'
    ];

    // Специальная обработка для BNB BEP20
    if ($currency === 'BNB' && $network === 'BEP20') {
        return 'BNBBEP20';
    }

    // Проверяем, является ли валюта стейблкоином
    if (in_array($currency, $stablecoins) && isset($networks[$network])) {
        return $currency . $networks[$network];
    }

    // Для других валют или неизвестных сетей возвращаем только код валюты
    return $currency;
}
function unformat_currency($currency)
{
    $currency = strtoupper($currency);
    $stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI', 'TUSD'];
    $networks = [
        'TRC20' => 'trx',
        'ERC20' => 'eth',
        'BSC' => 'bsc',
        'SOL' => 'sol',
        'ARB' => 'arb',
        'MATIC' => 'matic',
        'AVAX' => 'avax',
        'OP' => 'op'
    ];

    // Проверяем стейблкоины
    foreach ($stablecoins as $stablecoin) {
        foreach ($networks as $networkSuffix => $networkCode) {
            if (strpos($currency, $stablecoin . $networkSuffix) === 0) {
                return [$stablecoin, $networkCode];
            }
        }
    }

    // Для обычных валют возвращаем только валюту и пустую сеть
    return [$currency, $currency];
}



function get_rates_all()
{
    $url = API_URL . 'rates/get/all';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}

function find_currency_by_code($code, $rates)
{
    foreach ($rates as $rate) {
        if ($rate['code'] == $code) {
            return $rate;
        }
    }
    return null;
}
function find_currency_by_id($id, $rates)
{
    foreach ($rates as $rate) {
        if ($rate['id'] == $id) {
            return $rate;
        }
    }
    return null;
}
