app.directive('moneyPot', function($interval) {
	return {
		restrict: 'E',
		template: '<div>{{moneyPot | currency:"$":0}}</div>',
		link: function(scope, elem, attr) {
		     scope.moneyPot = 43618;
		     $interval(function () { //$interval is same as setInterval
		         scope.moneyPot = scope.moneyPot + (Math.random() * 43);
		         //scope.moneyPot = Number(parseFloat(scope.moneyPot).toFixed(0));
		         //return scope.moneyPot;
		         

		     }, 1000);
        }//end of link: function

    }//end of return
});//end of directive












// var moneyPot = 43597.12;
// window.setInterval(
// function () {
//     moneyPot = moneyPot + (Math.random() * 87);
//     document.getElementById("moneyPot").innerHTML = Number(parseFloat(moneyPot).toFixed(0)).toLocaleString('en');
// }, 1000);
// //this should be in its own file (but I'm lazy and it is a mini project):
// app.directive('clock', ['dateFilter', '$timeout', function(dateFilter, $timeout){
//     return {
//         restrict: 'E',
//         scope: {
//             format: '@'
//         },
//         link: function(scope, element, attrs){
//             var updateTime = function(){
//                 var now = Date.now();
                
//                 element.html(dateFilter(now, scope.format));
//                 $timeout(updateTime, now % 200);
//             };
            
//             updateTime();
//         }
//     };
// }]);

// angular.module('timeApp').directive('showTime', function() {
// 	return {
// 		restrict: 'E',
//     	templateUrl: '/js/homeTemplate.html',
//     	//scope: "=",
//     	link: function($scope, $elem, $attr){
//       		var d = (new Date()+'').split(' ');
//       		var friendlyTime =  d[4];
//       		var date = [d[1], d[2]].join(' ') + ", " + d[3]
//       		setInterval(d, 500);
//       		$scope.time = friendlyTime;
//       		$scope.date = date;
//       		//

			
//     	}
//   	}
// });