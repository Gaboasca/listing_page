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

	$scope.increaseLimit = function () {
		$scope.myLimit += 8;
	};

	$scope.addToCart = function (item) {
		var i;
		var myCart = $scope.myCart.myProducts;

		for(i = 0; i < myCart.length; i++) {
			if(myCart[i].id === item.id) {
				myCart[i].count += 1;
				return;
			}
		}

		item.count = 1
		myCart.push(item)
	};

	$scope.getTotal = function () {
		var total = 0;
		var i, product;
		for(i = 0; i < $scope.myCart.myProducts.length; i++){
	        product = $scope.myCart.myProducts[i];
	        total += (parseInt(product.price * product.count));
	    }
	    return total;
	};

	$scope.buyProducts = function (cart) {
		$http.post('ajax_post.php', {carts: JSON.stringify(cart), total: $scope.getTotal()})
			.success(function(data, status, headers, config) {
				console.log("data inserted succesfully");
			})
			.error(function(data, status, headers, config) {
				console.log("_POST error");
			});

		$scope.myCart.myProducts = [];
	};

	$scope.remove = function (product) {
		var index = $scope.myCart.myProducts.indexOf(product);
		$scope.myCart.myProducts.splice(index, 1);
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