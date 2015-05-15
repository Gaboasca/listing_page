<?php
	require_once("itemsdb.php");
	$data = json_decode(file_get_contents("php://input")); 
	$titles = $data->titles;
	$prices = $data->prices;
	$total = $data->total;

	$sql = "INSERT INTO cart VALUES('NULL','".$titles."','".$prices."','".$prices."')";
	$connect->exec($sql);