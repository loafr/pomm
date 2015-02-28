var app = angular.module('pommApp', []);

// app.config(function($routeProvider, $httpProvider){
//   $httpProvider.interceptors.push('httpRequestInterceptor');

//   $routeProvider
//   .when('/', {
//   	templateUrl: 'index.html',
//   	controller: 'MainCtrl',
//     // resolve: {
//     //   allData: function($route, homeService) {
//     //     return homeService.getAllData();
//     //   }
//     // }
//   })

//   .when('/states/:state', {
//   	templateUrl: 'templates/states/state-template.html',
//   	controller: 'StateCtrl',
//   	// resolve: {
//   	// 	teamData: function($route, teamService) {
//    //      return teamService.getTeamData($route.current.params.team)
//    //    }
//    //  }
//   })
  
//   .otherwise ({
//   	redirectTo: '/'
//   })


// });