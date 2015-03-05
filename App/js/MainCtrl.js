// angular.module('pommApp').controller("MainCtrl", ["$scope", "Auth", function($scope, Auth, $firebase) {
//   // any time auth status updates, add the user data to scope
//   Auth.$onAuth(function(authData) {
//      $scope.authData = authData;
//   });
// }]);

//stage1:
angular.module('pommApp').controller('MainCtrl', function($scope, mainService, $firebaseAuth) {
	var ref = new Firebase("https://pomm.firebaseio.com/");
    var auth = $firebaseAuth(ref);
    debugger;
    mainService.$onAuth(function(authData) {
     $scope.authData = authData;
     console.log("you clicked login button");
     debugger;
  });

});


// // how does this fit in:
// app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
//   function($scope, $firebaseAuth) {
//     var ref = new Firebase("https://pomm.firebaseio.com/");
//     var auth = $firebaseAuth(ref);
//   }
// ]);

// //this is for angularFire:
// app.controller("MainCtrl", ["$scope", "Auth", function($scope, Auth) {
//   // any time auth status updates, add the user data to scope
//   Auth.$onAuth(function(authData) {
//      $scope.authData = authData;
//   });
// }]);