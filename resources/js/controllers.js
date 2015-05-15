var myApp = angular.module('myApp', []);

myApp.controller("ProductsCtrl", ['$scope', '$http', function ($scope, $http) {
	$scope.myLimit = 24;
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
		$scope.myCart.myProducts.push({title, price});
	};

	$scope.getTotal = function () {
		var total = 0;
		for(var i = 0; i < $scope.myCart.myProducts.length; i++){
	        var product = $scope.myCart.myProducts[i];
	        total += (parseInt(product.price));
	    }
	    return total;
	};

	$scope.buyProduct = function (cart) {
		for(var i= 0 ; i< cart.length ; i++){		
			$http.post('ajax_post.php', { titles:cart[i].title, prices:cart[i].price, total: $scope.getTotal() })
			.success(function(data, status, headers, config) {
				console.log("data inserted succesfully");
			})
			.error(function(data, status, headers, config) {
				console.log("_POST error");
			});
		}

		$scope.myCart.myProducts.length = 0;
	};



	$scope.increaseLimit = function () {
		$scope.myLimit += 8;
	};
}]); 


myApp.directive('infiniteScroll', function() {
	return {
		restrict: 'A',
		link: function ($scope) { 
			$(window).on('scroll', function () {
				if($(window).scrollTop() == $(document).height() - $(window).height()) {
					$scope.increaseLimit();
					$scope.$apply();
				}
			});
		}
	};
});
