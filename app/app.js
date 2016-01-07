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
                templateUrl: 'partials/home.html'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'partials/main.html',
                controller:'MainCtrl',
            })
            .state('register', {
                url: '/register',
                templateUrl: 'partials/reigster.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'partials/profile.html'
            });
        $urlRouterProvider.otherwise('/home');
    }
})();