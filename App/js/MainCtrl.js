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
     
	    // mainService.$onAuth(function(authData) {
	    // $scope.authData = authData;
	    // console.log("you clicked the login button"); //these 3 lines are from firebase docs
	    //});  

	var emlObj = {email: $scope.userEmail,
	              password: $scope.userPassword};
	// var newEmlObj = {email: $scope.newEmail,
	// 			     password: $scope.newPassword};
	
	
	$scope.createUser = function() {
		var newEmlObj = {email: $scope.newEmail, password: $scope.newPassword};
		// debugger;
		mainService.createUser(newEmlObj).then(function() {
			ref.authWithPassword(newEmlObj, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }
			});
		})
	};  
	$scope.googleLogin = function() {
			console.log("part 1");
		mainService.googleLogin().then(function() {
			console.log('part 4');
			$scope.loggedIn = true;
		});
	};
	$scope.facebookLogin = function() {
		mainService.facebookLogin().then(function() {
			$scope.loggedIn = true;
		});
	};
	$scope.twitterLogin = function() {
		mainService.twitterLogin().then(function() {
			$scope.loggedIn = true;
		});
	};
	$scope.emailLogin = function() {
		var emlObj = {email: $scope.userEmail, password: $scope.userPassword};
		mainService.emailLogin(emlObj).then(function() {
			$scope.loggedIn = true;
			$scope.emailLoginShow = !$scope.emailLoginShow;
			$scope.userEmail = '';
			$scope.userPassword = '';
		});
	};
	$scope.emailLoginShow = function() {
		$scope.emailLoginShow = !$scope.emailLoginShow;
	}
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