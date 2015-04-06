// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.gospels','starter.rosary','starter.timings','LocalStorageModule', ])

.run(function($ionicPlatform, $rootScope, localStorageService, $location, $timeout,$ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {file:///D:/node/ionicApp/app/index.html#/menu/gospel
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  var skipIntro;
   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState) {
        skipIntro = localStorageService.get('skip') === 'true' ? true : false;
        console.log(fromState.name +" from")
        console.log(toState.name+" to")
        console.log(skipIntro)
      
        if (toState.name === 'intro') {
          if (skipIntro) {
            //location.href = '#/menu/rosary';
          }
        }
      });
 
    skipIntro = localStorageService.get('skip') === 'true' ? true : false;
 
    if ($location.$$url === '/menu/gospel') {
      $timeout(function() {
        if (skipIntro) {
          location.href = '#/menu/rosary';
        } else {
          location.href = '#/menu/gospel';
        }
      }, 2000);
    }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "index.html"
  })

  // Each tab has its own nav history stack:

  .state('intro', {
    url: '/intro',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      }
    }
  })
  .state('menu.gospel', {
    url: '/gospel',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu-gospel.html',
        controller: 'GospelCtrl'
      }
    }
  })
  .state('menu.gospel-detail', {
    url: '/gospel/:GoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/gospel-detail.html',
        controller: 'GoDetailCtrl'
      }
    }
  })
  .state('menu.rosary', {
    url: '/rosary',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu-rosary.html',
        controller: 'RosaryCtrl'
      }
    }
  })
  .state('menu.rosary-list', {
    url: '/rosary-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/rosary-list.html',
        controller: 'RosaryCtrl'
      }
    }
  }).state('menu.rosary-detail', {
    url: '/rosary-detail',
    views: {
      'menuContent': {
        templateUrl: 'templates/rosary-detail.html',
        controller: 'RosaryDetailCtrl'
      }
    }
  }).state('menu.ourFather', {
      url: '/ourFather',
      views: {
        'menuContent': {
          templateUrl: 'templates/ourFather.html',
          controller: 'ourFatherCtrl'
        }
      }
  }).state('menu.hailMary', {
      url: '/hailMary',
      views: {
        'menuContent': {
          templateUrl: 'templates/hailMary.html',
          controller: 'RosaryDetailCtrl'
        }
      }
  })



  .state('menu.soc', {
    url: '/soc',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu-soc.html',
        controller: 'SocCtrl'
      }
    }
  })
    .state('menu.soc-detail', {
      url: '/soc/:socId',
      views: {
        'menuContent': {
          templateUrl: 'templates/soc-detail.html',
          controller: 'SocDetailCtrl'
        }
      }
    })
  .state('menu.timings', {
    url: '/timings',
    views: {
      'menuContent': {
        templateUrl: 'templates/timings.html',
        controller: 'TimingsCtrl'
      }
    }
  }).state('menu.timings-detail', {
    url: '/timings/:TimingsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/timings-detail.html',
        controller: 'TimingsDetailCtrl'
      }
    }
  }).state('menu.novena', {
    url: '/novena',
    views: {
      'menuContent': {
        templateUrl: 'templates/novena.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');

});
