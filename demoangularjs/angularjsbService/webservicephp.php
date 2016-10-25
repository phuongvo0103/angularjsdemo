<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	$ip="localhost";
	$user="root";
	$pass="";
	$data="agularjsemployeedemo";
	$conn=new mysqli($ip,$user,$pass,$data)or die("không thể kết nối tới sql");
	$conn->set_charset('utf8');

	$result = $conn->query("SELECT * FROM employee");

	$json=array();

	while ($rs = $result->fetch_array()) {
		$emp=array();
		$emp["name"]=$rs["name"];
		$emp["birthday"]=$rs["birthday"];
		$emp["gender"]=$rs["gender"];
		$emp["salary"]=$rs["salary"];
		
		array_push($json, $emp);
	}

	echo(json_encode($json));

	$conn->close();
?>