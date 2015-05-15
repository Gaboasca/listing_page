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