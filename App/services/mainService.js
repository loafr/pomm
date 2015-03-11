angular.module('pommApp').factory("mainService", function($firebaseAuth, $q) {
  var ref = new Firebase("https://pomm.firebaseio.com/");
  var firebaseLogins = {}; // creates empty object for all the logins to be individual methods
  //firebaseLogins is undefined from my MainCtrl
  //return $firebaseAuth(ref); // test to see if this works

  firebaseLogins.createUser = function(email, pswrd) {
	  ref.createUser({
	  email: email, 
	  password: pswrd 
	  }, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);
		  }
	});
	};//email createUser

  firebaseLogins.emailLogin = function() { // email login
  	  var deferred = $q.defer();
  	  $firebaseAuth(ref)

  	  
  	  
  	  .then(function(response) {
  	  	console.log(response);
  	  	deferred.resolve(response);
  	  });
  	  return deferred.promise; 
  };//end emailLogin

  firebaseLogins.googleLogin = function() { // google login
  	  var deferred = $q.defer();
	  ref.authWithOAuthPopup("google", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
	  }
  	}).then(function(response) {
  		deferred.resolve(response);
  	}); return deferred.promise;
  };//end googleLogin

  firebaseLogins.facebookLogin = function() { // FB login
  	var deferred = $q.defer();
	  ref.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
	  }
  }).then(function(response) {
  	deferred.resolve(response);
  }); return deferred.promise;
  };//end facebookLogin

  firebaseLogins.twitterLogin = function() { // twitter login
  	var deferred = $q.defer();
	  ref.authWithOAuthPopup("twitter", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
	  }
  }).then(function(response) {
  	deferred.resolve(response);
  }); return	deferred.promise;
  };//end twitterLogin

  return firebaseLogins;

});