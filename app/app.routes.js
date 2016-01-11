/**
 * Created by danle on 1/11/16.
 */
(function () {
    'use strict';
    angular
        .module('favourApp')
        .config(['$stateProvider','$urlRouterProvider',config]);

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../app/components/login/home.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: '../app/components/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: '../app/components/register/register.html'
            })
            .state('profile', {
                url: '/profile/:userId',
                templateUrl: '../app/components/profile/profile.html',
                controller: 'ProfileController',
                controllerAs: 'profileCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    }
})();