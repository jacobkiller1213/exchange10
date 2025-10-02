<?php
require 'tools.php';
header('Content-Type: application/json');
$rates = get_rates_all()['data'];
$exept_fiat_currencies = [
	"RUB",
	"USD",
	"EUR",
	"GBP",
	"CHF",
	"JPY",
	"CNY",
	"UAH",
	"KZT",
	"BYN",
	"KGS",
	"TJS",
	"AZN",
	"TRY"

];

$regex_data = get_regex_data();
$rates = array_filter($rates, function ($rate) use ($exept_fiat_currencies) {

	return !in_array($rate['code'], $exept_fiat_currencies);
});
$min_amounts = get_min_amount_all();

$data = [];
foreach ($rates as $rate) {
	$formatted_currency = format_currency($rate['code'], $rate['network']);
	$min_amount = 0;
	if (isset($rate['network'])) {
		$min_amount = $min_amounts[$rate['code'] . ' ' . $rate['network']] ?? 0;
	} else {
		$min_amount = $min_amounts[$rate['code']] ?? 0;
	}
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
			"min_receive" => $min_amount
		];
}

echo json_encode($data);
