<?php
	require_once("itemsdb.php");
    $load = htmlentities(strip_tags($_POST['load'])) * 8;

    $query = $connect->query("
    	SELECT * FROM items ORDER BY id ASC LIMIT ".$load.",8
    ");

    while($row = $query->fetch()) {
    	?>
    		<div class="listing__items">
                <img class="listing__items__img" src="http://lorempixel.com/176/176/" alt="img">
                <p class="listing__items__title" ng-model="item.title"><?php echo $row['title']; ?></p>
                <span class="listing__items__price" ng-model="item.price"><?php echo $row['price']; ?>$</span>
                <input type="button" value="Add to cart"class="listing__items__btn" ng-click="addToCart(item.title, item.price)">
            </div>
    	<?php
    }