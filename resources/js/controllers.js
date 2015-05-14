var myApp = angular.module('myApp', ["ui.router"]);

myApp.controller("ProductsCtrl", ['$scope', '$http', '$interval', 'Products', function ($scope, $http, $interval, Products) {
	$scope.myLimit = 16;
	$scope.products = Products;
	$scope.myCart = {
		myProducts: []
	};

	$scope.addToCart = function (title, price) {
		if ( (title === title) && (price) ) {
			$scope.myCart.myProducts.push({title, price});
		}
	};

	$scope.getTotal = function () {
		var total = 0;
		for(var i = 0; i < $scope.myCart.myProducts.length; i++){
	        var product = $scope.myCart.myProducts[i];
	        total += (parseInt(product.price));
	    }
	    return total;
	};

	$scope.buyProduct = function () {
	}
}]); 
