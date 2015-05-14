<!DOCTYPE html>
<html ng-app="myApp">
    <head lang="en">
        <meta charset=utf-8>
        <title>Listing Page</title>
        <link rel="stylesheet" type="text/css" href="resources/css/normalize.css">
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/style.css">
        <link rel="stylesheet" type="text/css" href="resources/css/mediaqueries.css">
        <link rel="stylesheet" type="text/css" media="all" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/themes/base/jquery-ui.css">
    </head>

    <body ng-controller="ProductsCtrl">    
        <div class="l-container l-container--spacing l-container--position" >
            <div class="listing-section">
                <div class="listing__items" ng-repeat="item in products | filter: searched_item">
                    <img class="listing__items__img" src="http://lorempixel.com/176/176/" alt="img">
                    <p class="listing__items__title" ng-model="item.title">{{item.title}}</p>
                    <span class="listing__items__price" ng-model="item.price">{{item.price}}$</span>
                    <input type="button" value="Add to cart"class="listing__items__btn" ng-click="addToCart(item.title, item.price)">
                </div>
      
                <div class="loader">
                    <img src="resources/img/example_loading.gif" ng-show="myLimit < products.items.length">
                </div>
            </div>

            <div class="aside-commands">
                <div class="filter-box">
                    <h2>filters</h2>
                    <div class="filter__first-section">
                        <label>Category:</label>
                        <select class="filter__first-section__select" ng-model="searched_item">
                            <option value="">-- No Filter --</option>
                            <option>Cars</option>
                            <option>Fruits</option>
                            <option>Toys</option>
                        </select>
                    </div>                  
                </div>
                
                <div class="cart-box">
                    <h2>Cart</h2>
                    <div class="cart__product" ng-repeat="product in myCart.myProducts">
                        <p class="cart__product__title">{{product.title}}</p>
                        <div class="cart__product__price">{{product.price}}$</div>
                    </div>
                    <div class="cart__total">
                        <p>Total</p>
                        <div class="cart__total__price">{{ getTotal() }}$</div>
                    </div>
                    <button class="listing__items__btn" ng-click=" buyProduct() ">Buy it!</button>
                </div>
            </div>
        </div>


        <script src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.14/angular-ui-router.js"></script>
        <script src="resources/js/controllers.js"></script>
        <script src="resources/js/service.js"></script>
        <script src="resources/js/script.js"></script>
    </body>
    
</html>