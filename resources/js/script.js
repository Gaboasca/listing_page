var myApp = angular.module('myApp', []);

myApp.factory('Products', function() {
	var Products = {};
	Products.items = [
		{
			title: "product1",
			price: "10"
		},
		{
			title: "product2",
			price: "170"
		},
		{
			title: "product3",
			price: "10"
		},
		{
			title: "product4",
			price: "30"
		},
		{
			title: "product5",
			price: "140"
		},
		{
			title: "product6",
			price: "30"
		},
		{
			title: "product7",
			price: "550"
		},
		{
			title: "product8",
			price: "40"
		},
		{
			title: "product9",
			price: "420"
		},
		{
			title: "product10",
			price: "30"
		},
		{
			title: "product11",
			price: "40"
		},
		{
			title: "product12",
			price: "330"
		},
		{
			title: "product13",
			price: "350"
		},
		{
			title: "product14",
			price: "230"
		},
		{
			title: "product15",
			price: "140"
		}
	];
	return Products;
}) 

function ProductsCtrl($scope, Products) {
	$scope.products = Products;
}

myApp.controller("ProductsCtrl", ProductsCtrl); 