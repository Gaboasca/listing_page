var myApp = angular.module('myApp', ["ui.router"]);

myApp.controller("ProductsCtrl", ['$scope', '$http', function ($scope, $http) {
	$scope.myLimit = 16;
	// $scope.products = Products;
	$scope.myCart = {
		myProducts: []
	};

	$http.get('ajax_get.php')
		.success(function(data, status, headers, config) {
			$scope.products = data;
		})
		.error(function(data, status, headers, config) {
			console.log("_GET error");
		});

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
