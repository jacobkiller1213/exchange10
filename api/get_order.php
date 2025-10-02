<?php
require 'tools.php';
header('Content-Type: application/json');
$orderId = $_GET['orderId'];
$order = get_order($orderId);

$status = format_status($order['status']);
$payment_info = json_decode($order['payment_info'], true);
$description = json_decode($order['description'], true);
$data = [
    "amount_purchase" => $order['amount_to'],
    "amount_sale"     => $order['amount_from'],
    "created_at"      => $order['created_at'],
    "exchange_rate"   => 0.0004040699378809661,
    "full_name"       => null,
    "id"              => $orderId,
    "memo"            =>   $payment_info['⚠️ МЕМО'] ?? "",
    "memo_payment"    => $order['memo'] ?? "",
    "number_slug"     => $orderId,
    "phone"           => $description['📱 Номер телефона'] ?? "",
    "slug"            => "9f99e3eb-7df3-41e5-8786-8a05e7a8306c",
    "updated_at"      => $order['updated_at'] ?? "",
    "wallet"          => $payment_info['💼 Адрес кошелька'] ?? "",
    "wallet_payment"  => $order['wallet_address'],
    "crypto_sale"     => [
        "name"     => $order['currency_from'],
        "currency" => $order['currency_from'],
        "image"    => strtolower($order['currency_from']) . ".svg"
    ],
    "crypto_purchase" => [
        "name"     => $order['currency_to'],
        "currency" => $order['currency_to'],
        "image"    => strtolower($order['currency_to']) . ".svg",
        "regex"    => "^(?:0x)?[0-9a-fA-F]{40}$"
    ],
    "status"          => $status,
    "email"           => $description['📧 Email'] ?? ""
];

echo json_encode($data);
