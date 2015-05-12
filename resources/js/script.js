var myApp = angular.module('myApp', []);

myApp.factory('Products', function() {
	var filters = {};
	var Products = {};

	Products.items = [
		{
			title: "product1",
			price: "10",
			category: "Cars"
		},
		{
			title: "product2",
			price: "170",
			category: "Fruits"
		},
		{
			title: "product3",
			price: "10",
			category: "Toys"
		},
		{
			title: "product4",
			price: "30",
			category: "Cars"
		},
		{
			title: "product5",
			price: "140",
			category: "Fruits"
		},
		{
			title: "product6",
			price: "30",
			category: "Toys"
		},
		{
			title: "product7",
			price: "550",
			category: "Cars"
		},
		{
			title: "product8",
			price: "40",
			category: "Fruits"
		},
		{
			title: "product9",
			price: "420",
			category: "Toys"
		},
		{
			title: "product10",
			price: "30",
			category: "Cars"
		},
		{
			title: "product11",
			price: "40",
			category: "Fruits"
		},
		{
			title: "product12",
			price: "330",
			category: "Toys"
		},
		{
			title: "product13",
			price: "350",
			category: "Cars"
		},
		{
			title: "product14",
			price: "230",
			category: "Fruits"
		},
		{
			title: "product15",
			price: "140",
			category: "Toys"
		},
		{
			title: "product16",
			price: "230",
			category: "Cars"
		},
		{
			title: "product17",
			price: "230",
			category: "Fruits"
		},
		{
			title: "product18",
			price: "230",
			category: "Toys"
		},
		{
			title: "product19",
			price: "230",
			category: "Cars"
		},
		{
			title: "product20",
			price: "230",
			category: "Fruits"
		},
		{
			title: "product21",
			price: "230",
			category: "Cars"
		},
		{
			title: "product22",
			price: "230",
			category: "Cars"
		},
		{
			title: "product23",
			price: "230",
			category: "Cars"
		},
		{
			title: "product24",
			price: "230",
			category: "Cars"
		},
		{
			title: "product25",
			price: "230",
			category: "Cars"
		},
		{
			title: "product26",
			price: "230",
			category: "Cars"
		},
		{
			title: "product27",
			price: "230",
			category: "Cars"
		},
		{
			title: "product28",
			price: "230",
			category: "Cars"
		}
	];
	return Products;
}) 

myApp.controller("ProductsCtrl", function ($scope, Products) {
	$scope.myLimit = 16;
	$scope.products = Products;

	$scope.cart = [];

	$scope.increaseLimit = function () {
		$scope.myLimit += 8;
	}

	$scope.addProduct = function (title, price) {
		
	}

	$scope.getTotal = function () {
		var total = 0;
		for(var i = 0; i < $scope.products.items.length; i++){
	        var product = $scope.products.items[i];
	        total += (parseInt(product.price));
	    }
	    return total;
	}
}); 




