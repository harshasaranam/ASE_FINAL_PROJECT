angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.flarsheimHall460', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/flarsheimHall460.html',
        controller: 'flarsheimHall460Ctrl'
      }
    }
  })

  .state('mapToFh', {
    url: '/page6',
    templateUrl: 'templates/mapToFh.html',
    controller: 'mapToFhCtrl'
  })

  .state('menu.fHScheduleYourAppointment', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fHScheduleYourAppointment.html',
        controller: 'fHScheduleYourAppointmentCtrl'
      }
    }
  })

  .state('menu.haagHall301', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haagHall301.html',
        controller: 'haagHall301Ctrl'
      }
    }
  })

  .state('haagHallScheduleYourAppointment', {
    url: '/page9',
    templateUrl: 'templates/haagHallScheduleYourAppointment.html',
    controller: 'haagHallScheduleYourAppointmentCtrl'
  })

  .state('mapToHaagHall', {
    url: '/page10',
    templateUrl: 'templates/mapToHaagHall.html',
    controller: 'mapToHaagHallCtrl'
  })

  .state('menu.mNLibrary351', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mNLibrary351.html',
        controller: 'mNLibrary351Ctrl'
      }
    }
  })

  .state('menu.mNLScheduleYourAppointment', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mNLScheduleYourAppointment.html',
        controller: 'mNLScheduleYourAppointmentCtrl'
      }
    }
  })

  .state('mapToMNL', {
    url: '/page13',
    templateUrl: 'templates/mapToMNL.html',
    controller: 'mapToMNLCtrl'
  })

$urlRouterProvider.otherwise('/page4')

  

});