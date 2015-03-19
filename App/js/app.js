var app = angular.module('pommApp', ['ngRoute', 'firebase', 'ui.bootstrap']);

app.config(function($routeProvider){

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
   .when('/Charge', {
    templateUrl: 'templates/pay.html',
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

