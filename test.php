<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://steppschuh-json-porn-v1.p.rapidapi.com/porn/?genreId=5245132710346752&actorId=5681034041491456&count=5&pornType=4&producerId=4554967436230656&pornId=5073292679446528&offset=0",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: steppschuh-json-porn-v1.p.rapidapi.com"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}