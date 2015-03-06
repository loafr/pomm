angular.module('pommApp').factory("mainService", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://pomm.firebaseio.com/");
  var firebaseLogins = {}; // creates empty object for all the logins to be individual methods
  //firebaseLogins is undefined from my MainCtrl
  return $firebaseAuth(ref); // test to see if this works
  firebaseLogins.emailLogin = function() { // email login
  	return $firebaseAuth(ref); 
  };//end emailLogin
  firebaseLogins.googleLogin = function() { // google login
  return ref.authWithOAuthPopup("google", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end googleLogin
  firebaseLogins.facebookLogin = function() { // FB login
  return ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end facebookLogin
   firebaseLogins.twitterLogin = function() { // twitter login
  return ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
})};//end twitterLogin
  return firebaseLogins;

}]);