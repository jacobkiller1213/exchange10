<?php
require 'tools.php';
header('Content-Type: application/json');

$data = [
	[
		"amount_purchase" => 115.134013,
		"amount_sale"     => 0.373,
		"created_at"      => "2025-04-06T10:35:15.129639+22:00",
		"exchange_rate"   => 308.67027500875827,
		"updated_at"      => "2025-04-06T10:48:53.288640+22:00",
		"crypto_sale"     => [
			"name"     => "Binance Coin",
			"currency" => "BNB20",
			"image"    => "BNB20.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	],
	[
		"amount_purchase" => 156.551635,
		"amount_sale"     => 0.509082,
		"created_at"      => "2025-04-06T09:49:47.222335+22:00",
		"exchange_rate"   => 307.51752244522567,
		"updated_at"      => "2025-04-06T10:04:51.483474+22:00",
		"crypto_sale"     => [
			"name"     => "Binance Coin",
			"currency" => "BNB20",
			"image"    => "BNB20.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	],
	[
		"amount_purchase" => 156.011228,
		"amount_sale"     => 0.507,
		"created_at"      => "2025-04-06T09:40:06.603681+22:00",
		"exchange_rate"   => 307.7144533198488,
		"updated_at"      => "2025-04-06T10:12:18.110153+22:00",
		"crypto_sale"     => [
			"name"     => "Binance Coin",
			"currency" => "BNB20",
			"image"    => "BNB20.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	],
	[
		"amount_purchase" => 74.06336,
		"amount_sale"     => 0.24236296,
		"created_at"      => "2025-04-05T18:10:04.252056+22:00",
		"exchange_rate"   => 305.5886102610962,
		"updated_at"      => "2025-04-05T19:19:04.584907+22:00",
		"crypto_sale"     => [
			"name"     => "Binance Coin",
			"currency" => "BNB20",
			"image"    => "BNB20.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	],
	[
		"amount_purchase" => 454.044945,
		"amount_sale"     => 1.505,
		"created_at"      => "2025-04-05T12:20:03.413263+22:00",
		"exchange_rate"   => 301.69099367752295,
		"updated_at"      => "2025-04-05T12:39:26.777087+22:00",
		"crypto_sale"     => [
			"name"     => "Binance Coin",
			"currency" => "BNB20",
			"image"    => "BNB20.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	],
	[
		"amount_purchase" => 59.671609,
		"amount_sale"     => 150,
		"created_at"      => "2025-04-05T11:42:35.006975+22:00",
		"exchange_rate"   => 0.3978107270150537,
		"updated_at"      => "2025-04-06T05:31:12.814237+22:00",
		"crypto_sale"     => [
			"name"     => "EOS",
			"currency" => "EOS",
			"image"    => "EOS.svg"
		],
		"crypto_purchase" => [
			"name"     => "Ripple",
			"currency" => "XRP",
			"image"    => "XRP.svg",
			"regex"    => "^r[1-9a-km-zA-HJ-NP-Z]{25,35}$"
		]
	]
];
echo json_encode($data);
