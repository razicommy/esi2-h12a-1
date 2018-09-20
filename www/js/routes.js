angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('welcome', {
    url: '/page0',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('menu.home', {
    url: '/page100',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('view', {
    url: '/page400',
	params: {
		data: "{}"		
},
    templateUrl: 'templates/view.html',
    controller: 'viewCtrl'
  })

  .state('edit', {
    url: '/page11',
	params: {
		data: "{}"		
},
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

  .state('videoCapture', {
    url: '/page410',
    templateUrl: 'templates/videoCapture.html',
    controller: 'videoCaptureCtrl'
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/page0')


});