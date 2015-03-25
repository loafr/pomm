angular.module('pommApp').controller('MainCtrl', function($scope, $modal, $log, mainService, $firebaseAuth) {
	var ref = new Firebase("https://pomm.firebaseio.com/");
    var auth = $firebaseAuth(ref); 

	var emlObj = {email: $scope.userEmail,
	              password: $scope.userPassword};	
	
	$scope.createUser = function() {
		var newEmlObj = {email: $scope.newEmail, password: $scope.newPassword};
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

	$scope.payment = function(e){
        var handler = StripeCheckout.configure({
            key: 'pk_test_bg9GaIsqZZA6eLdIP1yRPfDM',
            image: 'favicon.png',
            token: function(token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
            }
        });

        handler.open({
            name: 'Pay My Mortgage',
            description: 'Entry Fee',
            amount: 100
        });
        e.preventDefault();

        // Close Checkout on page navigation
        $(window).on('popstate', function() {
            handler.close();
        });
    };

	//start of modal stuff:
	$scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('pommApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

