<?php
require 'tools.php';
header('Content-Type: application/json');

$data_request = json_decode(file_get_contents('php://input'), true)['order'];
$amount_purchase = $data_request['amount_purchase'];
$amount_sale = $data_request['amount_sale'];
$crypto_purchase_id = $data_request['crypto_purchase_id'];
$crypto_sale_id = $data_request['crypto_sale_id'];
$email = $data_request['email'];
$exchange_rate = $data_request['exchange_rate'];
$memo = $data_request['memo'] ?? null;
$phone = $data_request['phone'];
$wallet = $data_request['wallet'];
$rates = get_rates_all()['data'];
$rate_to = get_rate_by_id($crypto_purchase_id, $rates);
$rate_from = get_rate_by_id($crypto_sale_id, $rates);

$payment_info = [
	"💼 Адрес кошелька" => $wallet,
];
if($memo) {
	$payment_info["⚠️ МЕМО"] = $memo;
}
if($wallet) {
	$payment_info["💼 Адрес кошелька"] = $wallet;
}
$description = [
	"📱 Номер телефона" => $phone,
	"📧 Email" => $email,
];
$data_create = [
    "currency_from" => format_currency($rate_from['code'], $rate_from['network']),
    "currency_to" => format_currency($rate_to['code'], $rate_to['network']),
    "amount_from" => $amount_sale,
    "amount_to" => $amount_purchase,
    "payment_info" => $payment_info,
    "description" => $description,
];

$order = create($data_create);


$data = [
	"email"    => $email,
	"referral" => "1159cf5c-ccab-413a-acf1-9237d7f1417c",
	"token"    => "drMP2VHJaYCusEHWLdScdMcvSoJUftr0vyDMbJlDVi6A4bYH5RJCM3URSgFVrNvO",
	"result"   => $order['id']
];

echo json_encode($data);

