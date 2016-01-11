/**
 * Created by danle on 1/3/16.
 */
(function(){
    'use strict';
    angular
        .module('app', ['firebase', 'ui.router'])
        .constant('fb', {
            url: 'https://needsfavor.firebaseio.com'
        })
        .config(['$stateProvider','$urlRouterProvider', config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../app/login/home.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'partials/register.html'
            })
            .state('profile', {
                url: '/profile/:userId',
                templateUrl: 'partials/profile.html',
                controller: 'ProfileController',
                controllerAs: 'profileCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    }
})();