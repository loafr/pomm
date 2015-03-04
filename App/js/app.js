var app = angular.module('pommApp', [ngRoute]);

app.config(function($routeProvider){
  //$httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  .when('/', {
  	templateUrl: 'index.html',
  	controller: 'MainCtrl'
  })
  .when('/Rules', {
  	templateUrl: 'templates/rules.html',
  	controller: 'TemplateCtrl'
  })
  .when('/Legal', {
  	templateUrl: 'templates/legal.html',
  	controller: 'TemplateCtrl'
  })
  .when('/About', {
  	templateUrl: 'templates/about.html',
  	controller: 'TemplateCtrl'
  })
  .when('/Pay', {
  	templateUrl: 'templates/pay.html',
  	controller: 'TemplateCtrl'
  })
  .when('/Login', {
  	templateUrl: 'templates/login.html',
  	controller: 'TemplateCtrl'
  })
  .when('/states/:state', {
  	templateUrl: 'templates/states/state-template.html',
  	controller: 'StateCtrl'
  })
  .otherwise ({
  	redirectTo: '/'
  })


});