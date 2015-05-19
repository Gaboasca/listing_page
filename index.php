<!DOCTYPE html>
<html ng-app="myApp">
    <head lang="en">
        <meta charset=utf-8>
        <title>Listing Page</title>
        <link rel="stylesheet" type="text/css" href="resources/css/normalize.css">
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
        <link rel="stylesheet" type="text/css" href="resources/css/style.css">
        <link rel="stylesheet" type="text/css" href="resources/css/mediaqueries.css">
        
    </head>

    <body ng-controller="ProductsCtrl" infinite-scroll="#">    
        <div class="l-container l-container--spacing l-container--position" >
            <div class="listing-section">
                <div class="listing__items" ng-repeat="item in products | filter: searched_item | filter: priceRange | limitTo: myLimit">
                    <img class="listing__items__img" src="{{item.imageUrl}}" alt="img">
                    <p class="listing__items__title">{{item.title}}</p>
                    <span class="listing__items__price">{{item.price}}$</span>
                    <button class="listing__items__btn" ng-click="addToCart(item)">Add to cart</button>
                </div>
      
                <div class="loader">
                    <img src="resources/img/example_loading.gif" ng-show="myLimit < products.items.length">
                </div>
            </div><!--

            --><div class="aside-commands">
                <div class="filter-box">
                    <h2 class="aside__title aside--spacing">Filters</h2>
                    <div class="filter__first-section">
                        <label>Category:</label>
                        <select class="filter__first-section__select" ng-model="searched_item">
                            <option value="">-- No Filter --</option>
                            <option>Cars</option>
                            <option>Fruits</option>
                            <option>Toys</option>
                        </select>
                    </div>  
                    <div class="filter__second-section">
                    <div data-role="main" class="ui-content">
                        <form method="post" action="demoform.asp">
                            <div data-role="rangeslider">
                                <label for="price-min">Price:</label>
                                <input type="range" name="price-min" class="price-min" value="0" min="0" max="600" ng-model="lower_price_bound">
                                <label for="price-max">Price:</label>
                                <input type="range" name="price-max" class="price-max" value="600" min="0" max="600" ng-model="upper_price_bound">
                            </div>
                        </form>
                    </div>
                    </div>                
                </div>
                
                <div class="cart-box">
                    <h2 class="aside__title">Cart</h2>
                    <div class="cart__product" ng-repeat="product in myCart.myProducts">
                        <p class="cart__product__title">{{product.title}} <span>x{{product.count}}</span></p>

                        <div class="cart__product__price">{{product.price}}$ <small class="remove" ng-click="remove(product)">[X]</small></div>
                    </div>
                    <div class="cart__total">
                        <p>Total</p>
                        <div class="cart__total__price">{{ getTotal() }}$</div>
                    </div>
                    <div class="cart-btn">
                        <button class="listing__items__btn listing__items__btn--cart" ng-disabled="myCart.myProducts.length==0" ng-click="buyProducts(myCart.myProducts)">Buy it!</button>    
                    </div>
                </div>
            </div>
        </div>


        <script src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script> 
        <script src="resources/js/controllers.js"></script>
        
    </body>
    
</html>