var app = angular.module('pommApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  //$httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  .when('/', {
  	templateUrl: 'templates/home.html',
  	controller: 'MainCtrl'
  })
  .when('/Rules/', {
  	templateUrl: 'templates/rules.html',
  	controller: 'MainCtrl'
  })
  .when('/Legal/', {
  	templateUrl: 'templates/legal.html',
  	controller: 'MainCtrl'
  })
  .when('/About', {
  	templateUrl: 'templates/about.html',
  	controller: 'MainCtrl'
  })
  .when('/Pay', {
  	templateUrl: 'templates/pay.html',
  	controller: 'MainCtrl'
  })
  .when('/Login', {
  	templateUrl: 'templates/login.html',
  	controller: 'MainCtrl'
  })
   .when('/charge', {
    templateUrl: 'templates/charge.html',
    controller: 'MainCtrl'
  })
  .when('/states/:state', {
  	templateUrl: 'templates/states/state-template.html',
  	controller: 'StateCtrl'
  })
  .otherwise ({
  	redirectTo: '/'
  })


});

// app.run(["$rootScope", "$location", function($rootScope, $location) {
//   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
//     // We can catch the error thrown when the $requireAuth promise is rejected
//     // and redirect the user back to the home page
//     if (error === "AUTH_REQUIRED") {
//       $location.path("/Login");
//     }
//   });
// }]);

// app.config(["$routeProvider", function($routeProvider) {
//   $routeProvider.when("/home", {
//     // the rest is the same for ui-router and ngRoute...
//     controller: "HomeCtrl",
//     templateUrl: "views/home.html",
//     resolve: {
//       // controller will not be loaded until $waitForAuth resolves
//       // Auth refers to our $firebaseAuth wrapper in the example above
//       "currentAuth": ["Auth", function(Auth) {
//         // $waitForAuth returns a promise so the resolve waits for it to complete
//         return Auth.$waitForAuth();
//       }]
//     }
//   }).when("/account", {
//     // the rest is the same for ui-router and ngRoute...
//     controller: "AccountCtrl",
//     templateUrl: "views/account.html",
//     resolve: {
//       // controller will not be loaded until $requireAuth resolves
//       // Auth refers to our $firebaseAuth wrapper in the example above
//       "currentAuth": ["Auth", function(Auth) {
//         // $requireAuth returns a promise so the resolve waits for it to complete
//         // If the promise is rejected, it will throw a $stateChangeError (see above)
//         return Auth.$requireAuth();
//       }]
//     }
//   });
// }]);

// app.controller("HomeCtrl", ["currentAuth", function(currentAuth) {
//   // currentAuth (provided by resolve) will contain the
//   // authenticated user or null if not logged in
// }]);

// app.controller("AccountCtrl", ["currentAuth", function(currentAuth) {
//   // currentAuth (provided by resolve) will contain the
//   // authenticated user or null if not logged in
// }]);