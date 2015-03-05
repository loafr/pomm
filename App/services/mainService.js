angular.module('pommApp').factory("mainService", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://pomm.firebaseio.com/");
  var firebaseObj = {};
  return $firebaseAuth(ref); // test to see if this works
  firebaseObj.emailLogin = function() { // email login
  	return $firebaseAuth(ref); 
  };
  firebaseObj.googleLogin = function() { // google login
  return ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end googleLogin
  firebaseObj.facebookLogin = function() { // FB login
  return ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end facebookLogin
   firebaseObj.twitterLogin = function() { // twitter login
  return ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end twitterLogin
  return firebaseObj;

}]);