app.directive('moneyPot', function($interval) {
	return {
		restrict: 'E',
		template: '<div>{{moneyPot | currency:"$":0}}</div>',
		link: function(scope, elem, attr) {
		     if(!scope.moneyPot) {
		     	scope.moneyPot = 43618;
		     };
		     $interval(function () { //$interval is Angular's setInterval
		         scope.moneyPot = scope.moneyPot + (Math.random() * 43);
		     }, 1000);
        }
    }
});