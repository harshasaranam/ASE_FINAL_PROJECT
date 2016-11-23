/**
 * Created by nagar on 11/10/2016.
 */


angular.module('starter.routes', ['ngResource'])




      .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider


          .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          })


          .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
          })



   /*      .state('home', {
           url: '/home',
           templateUrl: 'templates/home.html',
           controller: 'HomeCtrl'

          })
*/

          .state('menu', {
            url: '/menu',
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl'
          })


          .state('menu.home', {
            url: '/home',
            views: {
              'side-menu21': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
              }
            }
          })



          .state('menu.about', {
            url: '/about',
            views: {
              'side-menu21': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
              }
            }
          })


          .state('fh', {
            url: '/fh',
            templateUrl: 'templates/fh.html',
            controller: 'fhCtrl'

          })



          .state('fhschedule', {
            url: '/fhschedule',
            templateUrl: 'templates/fhschedule.html',
            controller: 'fhscheduleCtrl'

          })

          .state('menu.update', {
            url: '/update',
            views: {
              'side-menu21': {
                templateUrl: 'templates/update.html',
                controller: 'UpdateCtrl'
              }
            }
          })

          .state('menu.maps', {
            url: '/maps',
            views: {
              'side-menu21': {
                templateUrl: 'templates/maps.html',
                controller: 'MapsCtrl'
              }
            }
          })





        $urlRouterProvider.otherwise('/login');
      });
