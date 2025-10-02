<?php
require 'tools.php';
header('Content-Type: application/json');
$rates = get_rates_all()['data'];
$rate_from_id = $_GET['crypto_sale_id'];
$rate_to_id = $_GET['crypto_purchase_id'];
$rate_from = get_rate_by_id($rate_from_id, $rates);
$rate_to = get_rate_by_id($rate_to_id, $rates);

$calc_result = calculate(format_currency($rate_from['code'], $rate_from['network']), format_currency($rate_to['code'], $rate_to['network']), 1, 1)['data'];

echo $calc_result['amount_to'];
