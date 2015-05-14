<?php
require_once("itemsdb.php");
// $load = htmlentities(strip_tags($_GET['load'])) * 8;

$query = $connect->query("
	SELECT * FROM items ORDER BY id ASC
");

$products = array();

while($row = $query->fetch()) {
	$product = array(
		"id" => $row['id'],
		"title" => $row['title'],
		"price" => $row['price'],
		"category" => $row['category'],
	);
	array_push($products, $product);
}
echo json_encode($products);