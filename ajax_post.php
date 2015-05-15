<?php
	require_once("itemsdb.php");
	$data = json_decode(file_get_contents("php://input")); 
	$carts = $data->carts;
	$total = $data->total;

	$sql = "INSERT INTO cart VALUES('NULL','".$carts."','".$total."')";
	$connect->exec($sql);