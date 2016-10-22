angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.canales', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/canales.html',
        controller: 'canalesCtrl'
      }
    }
  })

  .state('tabsController.favoritos', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('tabsController.contactos', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/contactos.html',
        controller: 'contactosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/canales',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.tab4DefaultPage', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/tab4DefaultPage.html',
        controller: 'tab4DefaultPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/canales/page2')

  

});